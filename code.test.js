const fs = require('fs');
const assert = require('assert');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

//Property test comparing both implementations
const test =
    jsc.forall("nat", function(n) {
        return dynamicEuler(n) === e(n);
    });
jsc.assert(test);
