// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/test/addnodetests.h>

#include <qt/addnodedialog.h>

void AddNodeTests::addressTests()
{
    QCOMPARE(AddNodeDialog::NodeAddress("192.168.1.20", 9733), QString("192.168.1.20:9733"));
    QCOMPARE(AddNodeDialog::NodeAddress("  192.168.1.20 ", 29733), QString("192.168.1.20:29733"));
    // a port in the host field wins
    QCOMPARE(AddNodeDialog::NodeAddress("192.168.1.20:1234", 9733), QString("192.168.1.20:1234"));
    QCOMPARE(AddNodeDialog::NodeAddress("node.example.org", 9733), QString("node.example.org:9733"));
    // IPv6 with and without brackets
    QCOMPARE(AddNodeDialog::NodeAddress("2001:db8::1", 9733), QString("[2001:db8::1]:9733"));
    QCOMPARE(AddNodeDialog::NodeAddress("[2001:db8::1]", 9733), QString("[2001:db8::1]:9733"));
    QCOMPARE(AddNodeDialog::NodeAddress("[2001:db8::1]:1234", 9733), QString("[2001:db8::1]:1234"));
    // not usable
    QVERIFY(AddNodeDialog::NodeAddress("", 9733).isEmpty());
    QVERIFY(AddNodeDialog::NodeAddress("two words", 9733).isEmpty());
    QVERIFY(AddNodeDialog::NodeAddress("1.2.3.4:abc", 9733).isEmpty());
    QVERIFY(AddNodeDialog::NodeAddress("1.2.3.4:70000", 9733).isEmpty());
    QVERIFY(AddNodeDialog::NodeAddress("[2001:db8::1]x", 9733).isEmpty());
}
