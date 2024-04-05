/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    const dummy = new Map([[0, head]]);
    const last = new Map();

    let s = 0;
    for (let cur = dummy; cur; cur = cur.next) {
        s += cur.val;
        last.set(s, cur);
    }

    s = 0;
    for (let cur = dummy; cur; cur = cur.next) {
        s += cur.val;
        cur.next = last.get(s).next;
    }

    return dummy.next;
};

function get_list(n) {
    const n5 = {
        val: 1,
        next: null,
    };
    const n4 = {
        val: 3,
        next: n5,
    };
    const n3 = {
        val: -3,
        next: n4,
    };
    const n2 = {
        val: 2,
        next: n3,
    };
    const n1 = {
        val: 1,
        next: n2,
    };

    if (n === 5) {
        return n5;
    }
    if (n === 4) {
        return n4;
    }
    if (n === 3) {
        return n3;
    }
    if (n === 2) {
        return n2;
    }
    if (n === 1) {
        return n1;
    }
    if (n === 0) {
        return null;
    }
}

function print(n) {
    const str = [];

    while (n) {
        str.push(n.val);
        n = n.next;
    }

    return str.join(', ');
}

const tests = [
    {
        test: get_list(1),
        expected: '5, 4, 3, 2, 1',
    },
    {
        test: get_list(4),
        expected: '5, 4',
    },
    {
        test: get_list(0),
        expected: '',
    },
];

// let is_ok = true;

for (const { test, expected } of tests) {
    const result = removeZeroSumSublists(test);

    console.dir({
        the_case: print(test),
        result: print(result),
        expected,
    });

    // is_ok = is_ok && print(result) === expected;
}

// console.log(is_ok);
