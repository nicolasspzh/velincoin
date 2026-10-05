#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""One-off conversion of the BIP173/BIP350 vectors in
test/functional/rpc_validateaddress.py from the "bc" to the "vlc" prefix.

Valid addresses are re-encoded. Invalid addresses keep the same kind of
defect (wrong checksum, invalid character, mixed case, ...). Error locations
move by one because "vlc" is one character longer than "bc".
Run from the repository root on the original Bitcoin Core file.
"""
import sys, re
sys.path.insert(0,'contrib/velincoin')
import convert_test_vectors as c
CS=c.BECH32_CHARSET
MIXED_LOC={}
def checksum(hrp, values, const):
    pm=c.bech32_polymod(c.hrp_expand(hrp)+values+[0]*6)^const
    return [(pm>>5*(5-i))&31 for i in range(6)]
def conv(tok):
    """Return (new_token, shift) keeping the same kind of defect."""
    assert tok[:3].lower()=='bc1'
    new=c.convert_bech32(tok)
    if new: return new
    low=tok.lower()
    if tok!=low and tok!=tok.upper():           # mixed case: convert the canonical form, reapply case
        for base in (tok.upper(), low):
            b=c.convert_bech32(base)
            if b:
                out=['vlc1'[0:4] if False else None]
                res=list(b.lower())
                res=[ch.upper() for ch in res]
                for i,ch in enumerate(tok):
                    j=i+1 if i>=2 else i      # shift after the hrp (bc -> vlc)
                    if ch.islower():
                        # Velincoin: the new character at this place may be a digit,
                        # then use the next letter instead. The error location is
                        # the index of the first lowercase letter.
                        while not res[j].isalpha(): j+=1
                        res[j]=res[j].lower()
                        MIXED_LOC[tok]=j
                if tok[:2].islower(): res[0:3]=list('vlc')
                return ''.join(res)
    data=low[3:]
    if any(ch not in CS for ch in data):          # invalid character: only swap the hrp
        return ('VLC' if tok[:2].isupper() else 'vlc')+tok[2:]
    values=[CS.index(ch) for ch in data[:-6]]
    orig=[CS.index(ch) for ch in data[-6:]]
    for const in (c.BECH32_CONST, c.BECH32M_CONST):
        good_bc=checksum('bc',values,const)
        diff=[i for i in range(6) if good_bc[i]!=orig[i]]
        if len(diff)<=2:
            good=checksum('vlc',values,const)
            for i in diff:
                good[i]=orig[i] if orig[i]!=good[i] else (good[i]+1)%32
            out='vlc1'+''.join(CS[v] for v in values+good)
            return out.upper() if tok==tok.upper() else out
    raise SystemExit('cannot convert '+tok)
p='test/functional/rpc_validateaddress.py'
s=open(p).read()
TOK=re.compile(r'"((?:bc|BC)1[0-9A-Za-z]+)"(\s*,\s*\n?\s*"[^"]*"\s*,(?:\s*#[^\n]*)?\s*\n?\s*)\[([0-9, ]*)\]')
def rep_invalid(m):
    new=conv(m.group(1))
    locs=[int(x)+1 for x in m.group(3).split(',') if x.strip()]
    if m.group(1) in MIXED_LOC: locs=[MIXED_LOC[m.group(1)]]
    return '"%s"%s[%s]'%(new,m.group(2),', '.join(map(str,locs)))
s,n1=TOK.subn(rep_invalid,s)
# remaining bc tokens (VALID_DATA) have valid checksums
s,n2=re.subn(r'"((?:bc|BC)1[0-9A-Za-z]+)"', lambda m:'"%s"'%conv(m.group(1)), s)
open(p,'w').write(s); print('invalid',n1,'valid',n2)
