// |reftest| skip-if(release_or_beta) -- numeric-separator-literal is not released yet
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit
info: |
  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(0o0_1, 0o01);
assert.sameValue(0O0_1, 0O01);

reportCompare(0, 0);
