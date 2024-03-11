/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let v1 = '';
    let v2 = '';
    while (l1 != null || l2 != null) {
        if (l1 != null) {
            v1 = l1.val + v1;
            l1 = l1.next;
        }
        if (l2 != null) {
            v2 = l2.val + v2;
            l2 = l2.next;
        }
    }

    return (Number(v1) + Number(v2)).slice();
};

const v6 = {
    val: 7,
};
const v5 = {
    val: 7,
    next: v6,
};
const v4 = {
    val: 0,
    next: v5,
};
const v3 = {
    val: 12,
    next: v4,
};
const v2 = {
    val: 7,
    next: v3,
};
const v1 = {
    val: 1,
    next: v2,
};

const print = (v) => {
    if (v.next != null) {
        print(v.next);
    }
    console.log(v.val);
};

console.log(print(v1));
