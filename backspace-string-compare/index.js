// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var convert = function (s) {
    let t = '';
    let d = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];

        if (c === '#') {
            d = d + 1;
        } else {
            if (d > i) {
                break;
            } else if (d <= 0) {
                t = t + c;
            }

            d = Math.max(0, d - 1);
        }
    }

    return t;
};

function one_pass(max_target, min_target) {
    let p1 = max_target.length - 1;
    let d1 = 0;
    let c1 = '';

    let p2 = min_target.length - 1;
    let d2 = 0;
    let c2 = '';

    while (p1 >= 0 || p2 >= 0) {
        if (p1 >= 0 && d1 < p1 + 1) {
            const char1 = max_target[p1];

            if (char1 === '#') {
                d1 = d1 + 1;
            } else {
                if (d1 === 0) {
                    c1 = c1 + char1;
                }
                d1 = Math.max(0, d1 - 1);
            }

            p1--;
        } else {
            p1 = -1;
        }

        if (p2 >= 0 && d2 < p2 + 1) {
            const char2 = min_target[p2];

            if (char2 === '#') {
                d2 = d2 + 1;
            } else {
                if (d2 === 0) {
                    c2 = c2 + char2;
                }
                d2 = Math.max(0, d2 - 1);
            }
            p2--;
        } else {
            p2 = -1;
        }
    }

    return c1 === c2;
}

var backspaceCompare = function (s, t) {
    if (s === t) {
        return true;
    } else {
        if (s.length >= t.length) {
            return one_pass(s, t);
        } else {
            return one_pass(t, s);
        }
    }
};

console.log(backspaceCompare('##ab#cd##a', 'av##s#'), '===', false);
console.log(backspaceCompare('ab#c####', 'ad#c'), '===', false);
console.log(backspaceCompare('######ab##', 'aaa##c###d#'), '===', true);
console.log(backspaceCompare('a#c', 'b'), '===', false);
console.log(backspaceCompare('a#c#ba#aaa#a', 'baa'), '===', false);
console.log(backspaceCompare('a#c#ba#aaa#a', 'baaa'), '===', true);
console.log(backspaceCompare('aaa###a', 'aaaa###a'), '===', false);
