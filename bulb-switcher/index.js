/**
 * @param {number} n
 * @return {number}
 */
// var bulbSwitch = function (n) {
//     let res = n;
//     let i = 0;

//     while (true) {
//         const d = 3 + 2 * i;

//         if (res < d) {
//             break;
//         } else {
//             i++;
//             res = res - d;
//         }
//     }

//     return res <= 0 ? i : i + 1;
// };
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};

const tests = [
    {
        test: 0,
        expected: 0,
    },
    {
        test: 1,
        expected: 1,
    },
    {
        test: 2,
        expected: 1,
    },
    {
        test: 3,
        expected: 1,
    },
    {
        test: 5,
        expected: 2,
    },
    {
        test: 8,
        expected: 2,
    },
    {
        test: 14,
        expected: 3,
    },
    {
        test: 28,
        expected: 5,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = bulbSwitch(test);
    console.log({ test, result, expected });
    is_ok = is_ok && result === expected;
}

console.log(is_ok);
