/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const len = height.length;

    if (len < 2) {
        return 0;
    }

    if (len === 2) {
        return Math.min(height[0], height[1]);
    }

    let maximum = 0;
    let leftIndex = 0;
    let left = 0;
    let rightIndex = len - 1;
    let right = 0;
    let length = rightIndex;
    let value = 0;

    while (leftIndex < rightIndex) {
        left = height[leftIndex];
        right = height[rightIndex];

        if (left >= right) {
            value = right * length;
            rightIndex--;
        } else {
            value = left * length;
            leftIndex++;
        }

        maximum = maximum > value ? maximum : value;
        length--;
    }

    return maximum;
};

const tests = [
    {
        height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        expected: 49,
    },
    {
        height: [1, 1],
        expected: 1,
    },
    {
        height: [8, 3],
        expected: 3,
    },
];

for (let { height, expected } of tests) {
    console.log({ height, result: maxArea(height), expected });
}
