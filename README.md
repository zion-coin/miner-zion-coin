# merkle-tree-zion-coin [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![Greenkeeper badge](https://badges.greenkeeper.io/zion-coin/merkle-tree-zion-coin.svg)](https://greenkeeper.io/)

[travis-image]: https://travis-ci.org/zion-coin/merkle-tree-zion-coin.svg?branch=master
[travis-url]: https://travis-ci.org/zion-coin/merkle-tree-zion-coin
[npm-image]: https://img.shields.io/npm/v/merkle-tree-zion-coin.svg
[npm-url]: https://npmjs.org/package/merkle-tree-zion-coin
[downloads-image]: https://img.shields.io/npm/dm/merkle-tree-zion-coin.svg
[downloads-url]: https://npmjs.org/package/merkle-tree-zion-coin

`const merkleTree = require('merkle-tree-zion-coin');`

``` javascript
const merkleTree = require('./');

const arr = ["a", "b", "c", "d"];
let mT = new merkleTree(arr);

console.log(mT);
/*
merkleTree {
  root: '1faf78938bc66bf5c824f97550662157ab3cefcc74ef282f3d29b98248395da44825fe851c14900f9b516649d6151e4e75791a9a36360129f549fd80d314a617',
  tree:
   { '0': [ '1faf78938bc66bf5c824f97550662157ab3cefcc74ef282f3d29b98248395da44825fe851c14900f9b516649d6151e4e75791a9a36360129f549fd80d314a617' ],
     '1':
      [ '71e44c3a25fd757c86ffe8884eadfeabb707155319e969dd7179064a75b43931e853c37f6a327b7670a0bedf6a1f3f6ee2ed3fff9f2b6cce47d08b2a259b3c13',
        'a8be8d503ac9b8ddca923440ecc5cdf743489a294e6fdcec3bc730e364cbbd72c38e3ac4dee227755b85ad79c63334143dca20309e1eb98053b5e30822e596d6' ],
     '2':
      [ 'e55ba81e90c44da0f18f97b7725c03dd7988f405a42ee40bccf4191c75d1689b021a8cf38b71e1018981ec695ba6bf6ddccdda6a1e11a2d499a3b224a55f5884',
        '6991820944362c2f3ff0df9d76df45988ac49576afcf2c3de52b6fdbd498bde9cef0f8331f0c764a7cc0d79e31936488041e1ed10e853a0f82f13f846f6766e7',
        '9f1d203b5e69b1a28c636d8dabe28d5d204d92716eb14ea4f06e96010bc5d36324ce09d339026507aaf0667474b299d8ed508bb733c2c85062a7e0d5a24fdccd',
        'e71003603d91e84dbd6fc36c49e7b42ce52922628757f7825394c71c07a4b0e42cd3a66aab93dc772f174663c762121ba9db5ecbca4113934bc48433507dc169' ] },
  depth: 2 }
*/
```

Get the root
``` javascript
const arr = ["a", "b", "c", "d"];
let mT = new merkleTree(arr).digest();

console.log(mT);
// '1faf78938bc66bf5c824f97550662157ab3cefcc74ef282f3d29b98248395da44825fe851c14900f9b516649d6151e4e75791a9a36360129f549fd80d314a617'
```



ISC License (ISC)
Copyright 2017 <Zion Coin>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
