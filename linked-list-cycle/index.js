/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    } else if (head == head.next) {
        return true;
    } else {
        let p1 = head;
        let p2 = head.next;

        do {
            if (p1 === p2) {
                return true;
            } else {
                p1 = p1.next;
                p2 = p2?.next?.next;
            }
        } while (p1 != null && p2 != null);

        return false;
    }
};

const v6 = { v: 1 };
const v5 = { v: 1, next: v6 };
const v4 = { v: 1, next: v5 };
const v3 = { v: 1 };
const v2 = { v: 1, next: v3 };
const v1 = { v: 1, next: v2 };

v6.next = v4;

const tests = [
    {
        test: v1,
        expected: false,
    },
    {
        test: v3,
        expected: false,
    },
    {
        test: v4,
        expected: true,
    },
];

let is_ok = true;

for (const { test, expected } of tests) {
    // console.log(hasCycle(test), expected);

    is_ok = is_ok && hasCycle(test) === expected;
}

console.log(is_ok);
