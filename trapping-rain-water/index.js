/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;

    if (len < 3) {
        return 0;
    }

    if (len === 3) {
        let result = Math.min(height[0], height[2]) - height[1];

        return Math.max(0, result);
    }

    let total = 0;
    let left = 0;
    let leftMax = 0;
    let leftIndex = 0;
    let rightMax = 0;
    let rightIndex = len - 1;

    while (leftIndex < rightIndex) {
        left = height[leftIndex];
        right = height[rightIndex];

        if (left <= right) {
            if (left >= leftMax) {
                leftMax = left;
            } else {
                total = total + (leftMax - left);
            }

            leftIndex++;
        } else {
            if (right >= rightMax) {
                rightMax = right;
            } else {
                total = total + (rightMax - right);
            }

            rightIndex--;
        }
    }

    return total;
};

const tests = [
    {
        height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
        expected: 6,
    },
    {
        height: [4, 2, 0, 3, 2, 5],
        expected: 9,
    },
    {
        height: [1, 3, 1],
        expected: 0,
    },
    {
        height: [1, 8, 3],
        expected: 0,
    },
    {
        height: [8, 3, 1],
        expected: 0,
    },
    {
        height: [8, 1, 3],
        expected: 2,
    },
    {
        height: [8, 3],
        expected: 0,
    },
    {
        height: [8],
        expected: 0,
    },
    {
        height: [],
        expected: 0,
    },
];

let is_ok = true;

for (let { height, expected } of tests) {
    // console.log({ height, result: trap(height), expected });
    is_ok = is_ok && trap(height) === expected;
}

console.log(is_ok);
