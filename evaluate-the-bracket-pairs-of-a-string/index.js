var evaluate = function (s, knowledge) {
    const k = new Map(knowledge);
    const l = s.length;

    let o = '';

    for (let i = 0; i < l; i++) {
        const char = s[i];

        if (char === '(') {
            let key = '';

            i++;

            while (s[i] !== ')') {
                key = key + s[i];
                i++;
            }

            o = o + (k.get(key) ?? '?');
        } else {
            o = o + char;
        }
    }

    return o;
};

/** Regexp solution
    const k = new Map(knowledge);
    const l = s.length;

    while (true) {
        const target = /\(\w*\)/g.exec(s);
        if (target == null) break;
        const template = target[0];
        const key = template.slice(1, template.length - 1);
        const val = k.get(key) ?? '?';

        s =
            s.slice(0, target.index) +
            val +
            s.slice(target.index + template.length);
    }

    return s;
 */

const tests = [
    {
        test: '(name)is(age)yearsold',
        k: [
            ['name', 'bob'],
            ['age', 'two'],
        ],
        expected: 'bobistwoyearsold',
    },
    {
        test: 'hi(name)',
        k: [['a', 'b']],
        expected: 'hi?',
    },
    {
        test: '(a)(a)(a)aaa',
        k: [['a', 'yes']],
        expected: 'yesyesyesaaa',
    },
];

let is_ok = true;

for (const { test, k, expected } of tests) {
    // console.log({ test, k, result: evaluate(test, k), expected });
    is_ok = is_ok && evaluate(test, k) === expected;
}

console.log(is_ok);
