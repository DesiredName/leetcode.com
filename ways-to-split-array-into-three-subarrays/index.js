/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
    const len = nums.length;

    if (len < 3) {
        return 0;
    } else if (len === 3) {
        return nums[0] <= nums[1] && nums[1] <= nums[2] ? 1 : 0;
    } else {
        const mod = 1e9 + 7;
        const n = nums.length;
        const s = new Array(n).fill(nums[0]);

        for (let i = 1; i < n; ++i) {
            s[i] = s[i - 1] + nums[i];
        }

        function search(s, x, left, right) {
            while (left < right) {
                const mid = (left + right) >> 1;
                if (s[mid] >= x) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }

        let ans = 0;
        for (let i = 0; i < n - 2; ++i) {
            const j = search(s, s[i] << 1, i + 1, n - 1);
            const k = search(s, ((s[n - 1] + s[i]) >> 1) + 1, j, n - 1);
            ans = (ans + k - j) % mod;
        }

        return ans;
    }
};

const tests = [
    // {
    //     test: [1, 1, 1],
    //     expected: 1,
    // },
    // {
    //     test: [3, 2, 1],
    //     expected: 0,
    // },
    // {
    //     test: [1, 2, 2, 2, 5, 0],
    //     expected: 3,
    // },
    // {
    //     test: [10, 0, 1, 5, 1, 1, 2, 4],
    //     expected: 0,
    // },
    // {
    //     test: [3, 8, 7, 1, 2, 6, 4],
    //     expected: 1,
    // },
    {
        test: [2, 3, 5, 10],
        expected: 3,
    },
];

let is_ok = true;

for (let { test, expected } of tests) {
    console.log({ test, result: waysToSplit(test), expected });
    // is_ok = is_ok && waysToSplit(test) === expected;
}

// console.log(is_ok);
