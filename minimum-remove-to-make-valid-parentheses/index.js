/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const ss = Array.from(s);
    const found = [];

    for (let i = 0; i < ss.length; i++) {
        const c = ss[i];

        if (c === '(') {
            found.push(i);
        } else if (c === ')') {
            if (found.length > 0) {
                found.pop();
            } else {
                ss[i] = '';
            }
        }
    }

    while (found.length) {
        ss[found.pop()] = '';
    }

    return ss.join('');
};

const tests = [
    {
        test: 'lee(t(c)o)de)',
        expected: 'lee(t(c)o)de',
    },
    {
        test: 'ab(c)d(',
        expected: 'ab(c)d',
    },
    {
        test: '))((',
        expected: '',
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = minRemoveToMakeValid(test);

    console.log({
        test,
        result,
        expected,
    });

    is_ok = is_ok && result === expected;
}

console.log(is_ok);
