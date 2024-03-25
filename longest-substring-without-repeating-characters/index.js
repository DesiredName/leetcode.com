/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    const seen = new Map();
    let longest_sequence = 0;
    let p1 = 0;

    for (let p2 = 0; p2 < s.length; p2++) {
        const currentChar = s[p2];
        const lastCurrentCharIndex = seen.get(currentChar);

        if (lastCurrentCharIndex >= p1) {
            p1 = lastCurrentCharIndex + 1;
        }

        seen.set(currentChar, p2);

        longest_sequence = Math.max(longest_sequence, p2 - p1 + 1);
    }

    return longest_sequence;
};

const tests = [
    {
        test: 'abcabcbb',
        expected: 3,
    },
    {
        test: 'bbbbb',
        expected: 1,
    },
    {
        test: 'pwwkew',
        expected: 3,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = lengthOfLongestSubstring(test);

    console.log({
        test,
        result,
        expected,
    });

    is_ok = is_ok && result === expected;
}

console.log(is_ok);
