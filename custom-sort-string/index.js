// var customSortString = function (order, s) {
//     const ss = new Map();

//     for (const c of s) {
//         if (ss.has(c)) {
//             ss.set(c, ss.get(c) + 1);
//         } else {
//             ss.set(c, 1);
//         }
//     }

//     let output = '';

//     for (const t of order) {
//         const tt = ss.get(t);
//         if (tt != null) {
//             output = output + t.repeat(tt);
//             ss.delete(t);
//         }
//     }

//     ss.forEach((tt, t) => {
//         output = output + t.repeat(tt);
//     });

//     return output;
// };

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const ss = new Map();

    for (const c of s) {
        if (ss.has(c)) {
            ss.set(c, ss.get(c) + 1);
        } else {
            ss.set(c, 1);
        }
    }

    let s_start = '';

    for (const t of order) {
        const tt = ss.get(t);
        if (tt != null) {
            s_start = s_start + t.repeat(tt);
            s = s.replaceAll(t, '');
        }
    }

    return s_start + s;
};

const tests = [
    {
        test: ['cba', 'abcd'],
        expected: 'cbad',
    },
    {
        test: ['cba', 'aertghnabmbcerefddcc'],
        expected: 'cccbbaaddeeefghmnrrt',
    },
];

let is_ok = true;

const compare = (a, b) => {
    return a.split('').every((v) => b.includes(v)) && a.length === b.length;
};

for (const {
    test: [order, s],
    expected,
} of tests) {
    console.log({
        order,
        s,
        result: customSortString(order, s),
        expected,
    });

    is_ok = is_ok && compare(customSortString(order, s), expected);
}

console.log(is_ok);
