/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const list = lists.flat(2);

    for (let i = 1; i < list.length; i++) {
        let x = list[i];
        let j = i;

        console.log(JSON.stringify(list));
        while (j > 0 && list[j - 1] > x) {
            list[j] = list[j - 1];
            j = j - 1;
        }

        list[j] = x;
    }

    return list;
};

const tests = [
    {
        test: [
            [1, 4, 5],
            [1, 3, 4],
            [2, 6],
        ],
        expected: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    // {
    //     test: [[1], [0]],
    //     expected: [0, 1],
    // },
];

let is_ok = true;

for (const { test, expected } of tests) {
    const result = mergeKLists(test);
    console.log({ test, result, expected });
    // is_ok = is_ok && result === expected;
}

console.log(is_ok);
