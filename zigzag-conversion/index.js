// bruteforce
//
// var convert = function (s, numRows) {
//     let x = 0;
//     let y = 0;
//     let forwards = true;

//     const l = s.length;
//     const result = [[]];

//     for (let i = 0; i < l; i++) {
//         result[y][x] = s[i];

//         if (forwards) {
//             y++;

//             result.push([]);

//             if (y === numRows - 1) {
//                 forwards = false;
//             }
//         } else {
//             x++;
//             y--;

//             if (y === 0) {
//                 forwards = true;
//             }
//         }
//     }

//     return result.flat(2).join('');
// };

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const str_len = s.length;

    if (str_len < 2 || numRows === 1 || str_len === numRows) {
        return s;
    }

    const max = numRows - 1;
    const cycle_len = numRows + (numRows - 2);
    const cycles = Math.ceil(str_len / cycle_len);

    let result = '';

    for (let y = 0; y < numRows; y++) {
        for (let c = 0; c < cycles; c++) {
            let l = cycle_len * c + y;
            let r = cycle_len * (c + 1) - y;

            if (0 < y && y < max && r < str_len) {
                result = result + s[l] + s[r];
            } else if (l < str_len) {
                result = result + s[l];
            } else {
                // noop
            }
        }
    }

    return result;
};

const tests = [
    {
        test: { string: 'PAYPALISHIRING', rows: 3 },
        expected: 'PAHNAPLSIIGYIR',
    },
    {
        test: { string: 'PAYPALISHIRING', rows: 2 },
        expected: 'PYAIHRNAPLSIIG',
    },
    {
        test: { string: 'PAYPALISHIRING', rows: 1 },
        expected: 'PAYPALISHIRING',
    },
];

let is_ok = true;

for (const {
    test: { string, rows },
    expected,
} of tests) {
    const result = convert(string, rows);
    console.log({ test: { string, rows }, result, expected });
    is_ok = is_ok && result === expected;
}

console.log(is_ok);
