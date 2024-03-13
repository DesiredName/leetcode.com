/**
 * @param {number} n
 * @return {number}
 */
let cache_left_n = 1;
let cache_sum_left = 1;
const cache_sum = new Map([[1, 1]]);

var pivotInteger = function (n) {
    const start = cache_left_n + 1;

    for (let i = start; i <= n; i++) {
        cache_left_n = i;
        cache_sum_left = cache_sum_left + i;
        cache_sum.set(cache_sum_left, i);
    }

    let target = 0;
    for (let i = n; i > 0; i--) {
        target = target + i;
        if (cache_sum.get(target) === i) {
            return i;
        }
    }

    return -1;
};

const tests = [
    {
        test: 8,
        expected: 6,
    },
    {
        test: 4,
        expected: -1,
    },
    {
        test: 1,
        expected: 1,
    },
    {
        test: 2,
        expected: -1,
    },
    {
        test: 12,
        expected: -1,
    },
    {
        test: 43,
        expected: -1,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = pivotInteger(test);
    // console.log({ test, result, expected });
    is_ok = is_ok && result === expected;
}

console.log(is_ok);
