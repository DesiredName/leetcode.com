/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const store = new Map(/* missingValue, additionalValueIndex */);

    for (let index in nums) {
        const num = nums[index];
        const missingValue = target - num;
        const stored = store.get(num);

        if (stored != null) {
            return [stored, index];
        } else {
            store.set(missingValue, index);
        }
    }

    return [];
};

const cases = [
    {
        nums: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
    },
    {
        nums: [3, 2, 4, 6],
        target: 6,
        expected: [1, 2],
    },
    {
        nums: [3, 3],
        target: 6,
        expected: [0, 1],
    },
];

let is_ok = true;

for (let { nums, target, expected } of cases) {
    // console.log({ nums, target, result: twoSum(nums, target), expected });
    is_ok = is_ok && twoSum(nums, target).join() === expected.join();
}

console.log(is_ok);
