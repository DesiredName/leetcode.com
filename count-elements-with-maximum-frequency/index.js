var maxFrequencyElements = function (nums) {
    const m = new Map();

    let max = Number.NEGATIVE_INFINITY;
    let last = Number.NEGATIVE_INFINITY;
    let count = 0;

    for (const n of nums) {
        const v = (m.get(n) ?? 0) + 1;

        m.set(n, v);

        if (v > max) {
            max = v;
            count = 1;
        } else if (v === max) {
            count++;
        }
    }

    return max * count;
};

const tests = [
    {
        test: [1, 2, 2, 3, 1, 4],
        expected: 4,
    },
    {
        test: [1, 2, 3, 4, 5],
        expected: 5,
    },
    {
        test: [1, 2, 2, 3, 1, 4],
        expected: 4,
    },
    {
        test: [19, 19, 19, 20, 19, 8, 19],
        expected: 5,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    console.log({ test, result: maxFrequencyElements(test), expected });
    is_ok = is_ok && maxFrequencyElements(test) === expected;
}

console.log(is_ok);
