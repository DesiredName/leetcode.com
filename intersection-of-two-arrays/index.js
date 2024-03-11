/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const result = new Set();
    if (nums1.length > nums2.length) {
        const source = new Set(nums1);
        for (let n of nums2) {
            if (source.has(n)) result.add(n);
        }
    } else {
        const source = new Set(nums2);
        for (let n of nums1) {
            if (source.has(n)) result.add(n);
        }
    }
    return Array.from(result);
};

const tests = [
    {
        test: [
            [1, 2, 2, 1],
            [2, 2],
        ],
        expected: [2],
    },
    {
        test: [
            [4, 9, 5],
            [9, 4, 9, 8, 4],
        ],
        expected: [9, 4],
    },
    {
        test: [
            [1, 2, 3],
            [4, 5, 6],
        ],
        expected: [],
    },
    {
        test: [
            [1, 1, 2, 2, 3, 3],
            [4, 4, 3, 3, 2, 2, 1, 1],
        ],
        expected: [1, 2, 3],
    },
];

let is_ok = true;

for (let {
    test: [n1, n2],
    expected,
} of tests) {
    // console.log([n1, n2], intersection(n1, n2), expected);
    is_ok = is_ok && intersection(n1, n2).every((v) => expected.includes(v));
}

console.log(is_ok);
