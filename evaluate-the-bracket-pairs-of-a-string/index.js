var evaluate = function (s, knowledge) {
    const regexp = /\(\w*\)/gi;
    const k = new Map(knowledge);

    let output = s.slice();
    let target;
    while ((target = regexp.exec(s)) !== null) {
        const template = target[0];
        const key = template.slice(1, template.length - 1);

        output = output.replace(template, k.get(key) ?? '?');
    }

    return output;
};

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
