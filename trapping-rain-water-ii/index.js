const { PriorityQueue } = require('../utils/priority_queue.js');

/**
 * @param {number[][]} height_map
 * @return {number}
 */
var trapRainWater = function (height_map) {
    const max_x = height_map.length;
    const max_y = height_map[0].length;
    const visited = {};
    const queue = PriorityQueue('max_first');

    for (let x = 0; x < max_x; x++) {
        visited[x] = {};

        for (let y = 0; y < max_y; y++) {
            if (x == 0 || x == max_x - 1 || y == 0 || y == max_y - 1) {
                queue.enqueue(height_map[x][y], x, y);
                visited[x][y] = true;
            } else {
                visited[x][y] = false;
            }
        }
    }

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let entry = null;
    let answer = 0;

    while ((entry = queue.dequeue()) != null) {
        const [value, x, y] = entry;

        for (const [dx, dy] of directions) {
            const tx = x + dx;
            const ty = y + dy;

            if (
                tx >= 0 &&
                tx < max_x &&
                ty >= 0 &&
                ty < max_y &&
                visited[tx][ty] !== true
            ) {
                const height_map_value = height_map[tx][ty];

                answer = answer + Math.max(0, value - height_map_value);
                visited[tx][ty] = true;
                queue.enqueue(Math.max(value, height_map_value), tx, ty);
            }
        }
    }

    return answer;
};

const tests = [
    {
        test: [
            [1, 4, 3, 1, 3, 2],
            [3, 2, 1, 3, 2, 4],
            [2, 3, 3, 2, 3, 1],
        ],
        expected: 4,
    },
    {
        test: [
            [3, 3, 3, 3, 3],
            [3, 2, 2, 2, 3],
            [3, 2, 1, 2, 3],
            [3, 2, 2, 2, 3],
            [3, 3, 3, 3, 3],
        ],
        expected: 10,
    },
];

let is_ok = true;

for (let { test, expected } of tests) {
    const result = trapRainWater(test);

    console.log({
        test,
        expected,
        result,
    });

    is_ok = is_ok && result === expected;
}

console.log(is_ok);
