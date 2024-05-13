// var reverse = function (x) {
//     const sign = Math.sign(x);

//     let value = Math.abs(x);
//     let result = 0;

//     while (value > 0) {
//         result = result * 10 + (value % 10);
//         value = Math.floor(value / 10);
//     }

//     result = sign * result;

//     if (result < -c || result > c - 1) {
//         return 0;
//     } else {
//         return result;
//     }
// };

// var reverse = function (x) {
//     const sign = Math.sign(x);
//     const value = Math.abs(x).toString().split('');

//     let l = 0;
//     let r = value.length - 1;

//     while (l < r) {
//         [value[l], value[r]] = [value[r], value[l]];
//         l++;
//         r--;
//     }

//     const result = sign * Number(value.join(''));

//     if (result < -c || result > c - 1) {
//         return 0;
//     } else {
//         return result;
//     }
// };

/**
 * @param {number} x
 * @return {number}
 */
const c = Math.pow(2, 31);
const l = -c;
const r = c - 1;

var reverse = function (x) {
    const sign = Math.sign(x);
    const target = Math.abs(x).toString().replace(/0+$/, '');
    const len = target.length;

    let value = Number(target);
    let result = 0;

    for (let i = len - 1; i >= 0; i--) {
        result = result + (value % 10) * 10 ** i;
        value = Math.floor(value / 10);
    }

    result = sign * result;

    if (result < -c || result > c - 1) {
        return 0;
    } else {
        return result;
    }
};

const tests = [
    {
        test: 123,
        expected: 321,
    },
    {
        test: -123,
        expected: -321,
    },
    {
        test: -120,
        expected: -21,
    },
    {
        test: 1534236469,
        expected: 0,
    },
    {
        test: 1563847412,
        expected: 0,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = reverse(test);
    console.log({ test, result, expected });
    is_ok = is_ok && result === expected;
}

console.log(is_ok);
