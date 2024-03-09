/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const l = nums1.length + nums2.length;

    if (l === 0) {
        return 0;
    } else {
        let a = 0;
        const a_l = nums1.length;
        let b = 0;
        const b_l = nums2.length;
        let v = [];

        while (a < a_l && b < b_l) {
            if (nums1[a] < nums2[b]) {
                v.push(nums1[a]);
                a++;
            } else {
                v.push(nums2[b]);
                b++;
            }
        }
        v = v.concat(nums1.slice(a)).concat(nums2.slice(b));

        const v_l = v.length;
        const s = Math.floor(v_l / 2);

        if (v_l % 2 === 0) {
            return (v[s - 1] + v[s]) / 2;
        } else {
            return v[s];
        }
    }
};

const tests = [
    {
        test: [
            [1, 2, 3],
            [1, 2],
        ],
        expected: 2,
    },
    {
        test: [[1, 3], [2]],
        expected: 2,
    },
    {
        test: [
            [1, 2],
            [3, 4],
        ],
        expected: 2.5,
    },
    {
        test: [[2], []],
        expected: 2,
    },
    {
        test: [[2], [1]],
        expected: 1.5,
    },
    {
        test: [[], [2]],
        expected: 2,
    },
    {
        test: [
            [4, 5],
            [1, 10],
        ],
        expected: 4.5,
    },
    {
        test: [
            [12, 13, 14],
            [8, 10],
        ],
        expected: 12,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    console.log({ test, result: findMedianSortedArrays(...test), expected });
    is_ok = is_ok && findMedianSortedArrays(...test) === expected;
}

console.log(is_ok);
