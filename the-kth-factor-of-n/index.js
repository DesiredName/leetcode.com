// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// var kthFactor = function(n, k) {
//     if (k === 1) {
//         return 1;
//     } else if (k > n) {
//         return -1;
//     } else {
//         const is_odd = n % 2 !== 0;
//         const s = new Set();

//         for (let i = Number(is_odd); i <= n; i = i + 2) {
//             const v = n / i;
//             Number.isInteger(v) && s.add(v).add(i);
//         }

//         s.add(n);

//         return Array.from(s).sort((a, b) => a - b)[k - 1] ?? -1;
//     }
// };

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    if (k === 1) {
        return 1;
    } else if (k > n) {
        return -1;
    } else {
        const is_odd = n % 2 !== 0;
        const c = new Set();
        let s = [1, n];

        function add(v) {
            c.add(v);

            let l = s.length;

            if (v > s[l - 1]) {
                s.push(v);
            } else if (v < s[0]) {
                s = [v].concat(s);
            } else {
                for (let i = 0; i < l; i++) {
                    if (s[i] === v) break;
                    if (s[i] > v) {
                        s.splice(i, 0, v);
                        break;
                    }
                }
            }
        }

        for (let i = Number(is_odd); i <= n; i = i + 2) {
            if (c.has(i)) {
                // noop
            } else {
                const v = n / i;
                if (c.has(v)) {
                    // noop
                } else {
                    if (Number.isInteger(v)) {
                        add(v);
                        add(i);
                    }
                }
            }
        }

        return s[k - 1] ?? -1;
    }
};

const tests = [
    {
        test: [100, 1],
        expected: 1,
    },
    {
        test: [16, 6],
        expected: -1,
    },
    {
        test: [99, 5],
        expected: 33,
    },
    {
        test: [12, 3],
        expected: 3,
    },
    {
        test: [7, 2],
        expected: 7,
    },
    {
        test: [4, 4],
        expected: -1,
    },
    {
        test: [155, 3],
        expected: 31,
    },
];

for (const {
    test: [n, k],
    expected,
} of tests) {
    // kthFactor(n, k);
    console.log([n, k], kthFactor(n, k), expected);
}

// const n = 156;
// const k = 3;
// const is_even = n % 2 === 0;
// let s;
// if (is_even) {
//     s = new Set([n]);
//     for (let i = 0; i <= n; i = i + 2) {
//         const v = n / i;
//         Number.isInteger(v) && s.add(v).add(i);
//     }
// } else {
//     s = new Set([n]);
//     for (let i = 1; i <= n; i = i + 2) {
//         const v = n / i;
//         Number.isInteger(v) && s.add(v).add(i);
//     }
// }

// console.log(s);
// console.log(Array.from(s).sort((a, b) => a - b)[k - 1] ?? -1);
