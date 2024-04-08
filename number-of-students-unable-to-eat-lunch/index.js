/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    const s = [0, 0];

    for (const student of students) {
        s[student]++;
    }

    for (const sandwich of sandwiches) {
        if (s[sandwich] === 0) {
            return s[sandwich ? 0 : 1];
        } else {
            s[sandwich]--;
        }
    }

    return 0;
};

const tests = [
    {
        students: [1, 1, 1, 0, 0, 1],
        sandwiches: [1, 0, 0, 0, 1, 1],
        expected: 3,
    },
    {
        students: [1, 1, 0, 0],
        sandwiches: [0, 1, 0, 1],
        expected: 0,
    },
];

let is_ok = true;

for (const { students, sandwiches, expected } of tests) {
    const result = countStudents(students, sandwiches);

    console.log({
        students,
        sandwiches,
        result,
        expected,
    });

    is_ok = is_ok && result === expected;
}

console.log(is_ok);
