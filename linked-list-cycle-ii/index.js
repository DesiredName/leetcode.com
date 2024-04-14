/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) {
        return null;
    } else if (head == head.next) {
        return head;
    } else {
        let p1 = head;
        let p2 = head;

        while (true) {
            p1 = p1.next;
            p2 = p2.next;

            if (p2 == null || p2.next == null) {
                return null;
            } else {
                p2 = p2.next;
            }

            if (p1 === p2) {
                break;
            }
        }

        p1 = head;

        while (p1 !== p2) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p2;
    }
};

const v6 = { v: 6 };
const v5 = { v: 5, next: v6 };
const v4 = { v: 4, next: v5 };
const v3 = { v: 3, next: v4 };
const v2 = { v: 2, next: v3 };
const v1 = { v: 1, next: v2 };

v6.next = v2;

console.log(detectCycle(v1));
