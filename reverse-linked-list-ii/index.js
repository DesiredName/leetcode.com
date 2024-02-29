/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head == null || head.next == null) {
        return head;
    }

    if (left - right === 0 || right < left) {
        return head;
    }

    let index = 1;
    let current = head;
    let start = head;

    while (index < left) {
        start = current;
        current = current.next;
        index++;
    }

    let prev = null;
    let tail = current;

    while (index >= left && index <= right) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        index++;
    }

    start.next = prev;
    tail.next = current;

    if (left === 1) {
        return prev;
    } else {
        return head;
    }
};

function get_list(n) {
    const n5 = {
        value: 5,
        next: null,
    };
    const n4 = {
        value: 4,
        next: n5,
    };
    const n3 = {
        value: 3,
        next: n4,
    };
    const n2 = {
        value: 2,
        next: n3,
    };
    const n1 = {
        value: 1,
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

const tests = [
    {
        test: [get_list(1), 2, 4],
        expected: '1, 4, 3, 2, 5',
    },
    {
        test: [get_list(5), 1, 1],
        expected: '5',
    },
    {
        test: [get_list(1), 3, 4],
        expected: '1, 2, 4, 3, 5',
    },
    {
        test: [get_list(4), 1, 2],
        expected: '5, 4',
    },
    {
        test: [get_list(0), 0, 1],
        expected: '',
    },
];

function print(n) {
    const str = [];
    while (n) {
        str.push(n.value);
        n = n.next;
    }

    return str.join(', ');
}

let is_ok = true;

for (const { test, expected } of tests) {
    const computed = reverseBetween(...test);

    // console.dir({
    //     the_case: print(test[0]),
    //     computed: print(computed),
    //     expected,
    // });

    is_ok = is_ok && print(computed) === expected;
}

console.log(is_ok);
