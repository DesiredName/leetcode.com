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
    let k = 0;
    let head = null;
    let last = null;

    while (l1 != null || l2 != null) {
        let v1 = 0;
        let v2 = 0;

        if (l1 != null) {
            v1 = l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            v2 = l2.val;
            l2 = l2.next;
        }

        let v = k + (v1 + v2);

        if (v > 9) {
            k = Math.floor(v / 10);
            v = v - k * 10;
        } else {
            k = 0;
        }

        if (head == null) {
            head = { val: v, next: null };
            last = head;
        } else {
            last.next = { val: v, next: null };
            last = last.next;
        }
    }

    if (k > 0) {
        last.next = { val: k, next: null };
    }

    return head;
};

const to_list = (arr) => {
    let last = null;
    let head = null;

    if (arr.length > 0) {
        head = { val: arr[0] };
        last = head;
    }

    for (let i = 1; i < arr.length; i++) {
        last.next = { val: arr[i] };
        last = last.next;
    }

    return head;
};

const print_list = (head) => {
    let v = '';
    while (head != null) {
        v = v + head.val;
        head = head.next;
    }
    return v;
};

const tests = [
    {
        test: { l1: to_list([9, 9, 9, 9, 9, 9, 9]), l2: to_list([9, 9, 9, 9]) },
        expected: to_list([8, 9, 9, 9, 0, 0, 0, 1]),
    },
    // {
    //     test: { l1: to_list([5, 0, 7]), l2: to_list([1, 1, 1]) },
    //     expected: to_list([6, 1, 8]),
    // },
    // {
    //     test: { l1: to_list([2, 4, 3]), l2: to_list([5, 6, 4]) },
    //     expected: to_list([7, 0, 8]),
    // },
    // {
    //     test: {
    //         l1: to_list([
    //             1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //             0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    //         ]),
    //         l2: to_list([5, 6, 4]),
    //     },
    //     expected: to_list([
    //         6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 1,
    //     ]),
    // },
];

for (let {
    test: { l1, l2 },
    expected,
} of tests) {
    console.log({
        l1: print_list(l1),
        l2: print_list(l2),
        result: print_list(addTwoNumbers(l1, l2)),
        expected: print_list(expected),
    });
}
