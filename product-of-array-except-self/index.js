/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const ans = new Array(n);
    for (let i = 0, left = 1; i < n; ++i) {
        ans[i] = left;
        left *= nums[i];
    }
    for (let i = n - 1, right = 1; i >= 0; --i) {
        ans[i] *= right;
        right *= nums[i];
    }
    return ans;
};

const tests = [
    {
        test: [1, 2, 3, 4],
        expected: [24, 12, 8, 6],
    },
    {
        test: [-1, 1, 0, -3, 3],
        expected: [0, 0, 9, 0, 0],
    },
];

for (const { test, expected } of tests) {
    const result = productExceptSelf(test);
    console.log({ test, result, expected });
}
