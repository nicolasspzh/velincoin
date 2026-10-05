// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
//
// Searches a nonce for a block header. Used by genesis.py.
//
// Build: g++ -O2 -std=c++20 -pthread genesis_miner.cpp -o genesis_miner -lcrypto
// Usage: genesis_miner <76 byte header prefix as hex> <compact bits as hex> <threads>
// Prints the nonce, or NOTFOUND if no nonce in 0..2^32-1 works.

#define OPENSSL_SUPPRESS_DEPRECATED
#include <openssl/sha.h>

#include <atomic>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <thread>
#include <vector>

static std::vector<unsigned char> FromHex(const std::string& hex)
{
    std::vector<unsigned char> out;
    for (size_t i = 0; i + 1 < hex.size(); i += 2) out.push_back(std::stoi(hex.substr(i, 2), nullptr, 16));
    return out;
}

// Turn compact "bits" (like 1d00ffff) into a 32 byte big endian target.
static std::vector<unsigned char> TargetFromBits(uint32_t bits)
{
    std::vector<unsigned char> target(32, 0);
    int size = bits >> 24;
    uint32_t mantissa = bits & 0x007fffff;
    for (int i = 0; i < 3; ++i) {
        int pos = 32 - size + i;
        if (pos >= 0 && pos < 32) target[pos] = (mantissa >> (8 * (2 - i))) & 0xff;
    }
    return target;
}

int main(int argc, char** argv)
{
    if (argc != 4) {
        std::fprintf(stderr, "usage: %s <prefix hex> <bits hex> <threads>\n", argv[0]);
        return 1;
    }
    const std::vector<unsigned char> prefix = FromHex(argv[1]);
    if (prefix.size() != 76) {
        std::fprintf(stderr, "prefix must be 76 bytes\n");
        return 1;
    }
    const std::vector<unsigned char> target = TargetFromBits(std::strtoul(argv[2], nullptr, 16));
    const unsigned threads = std::max(1, std::atoi(argv[3]));

    // The first 64 bytes never change, so hash them once (the "midstate").
    SHA256_CTX midstate;
    SHA256_Init(&midstate);
    SHA256_Update(&midstate, prefix.data(), 64);

    std::atomic<bool> found{false};
    std::atomic<uint32_t> result{0};
    std::vector<std::thread> workers;
    for (unsigned t = 0; t < threads; ++t) {
        workers.emplace_back([&, t] {
            unsigned char tail[16];
            std::memcpy(tail, prefix.data() + 64, 12);
            unsigned char hash1[32], hash2[32];
            for (uint64_t n = t; n <= 0xffffffffULL && !found.load(std::memory_order_relaxed); n += threads) {
                const uint32_t nonce = static_cast<uint32_t>(n);
                std::memcpy(tail + 12, &nonce, 4); // little endian on x86
                SHA256_CTX ctx = midstate;
                SHA256_Update(&ctx, tail, 16);
                SHA256_Final(hash1, &ctx);
                SHA256(hash1, 32, hash2);
                // The block hash is hash2 read backwards. Compare it with the target.
                bool below = false, decided = false;
                for (int i = 0; i < 32 && !decided; ++i) {
                    const unsigned char h = hash2[31 - i];
                    if (h < target[i]) { below = true; decided = true; }
                    else if (h > target[i]) { decided = true; }
                }
                if (!decided) below = true; // equal to target counts as valid
                if (below) {
                    result = nonce;
                    found = true;
                }
            }
        });
    }
    for (auto& w : workers) w.join();
    if (found) std::printf("%u\n", result.load());
    else std::printf("NOTFOUND\n");
    return 0;
}
