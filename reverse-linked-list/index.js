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
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
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

function print(n) {
    const str = [];
    while (n) {
        str.push(n.value);
        n = n.next;
    }

    return str.join(', ');
}

console.dir({
    the_case: print(get_list(1)),
    computed: print(reverseList(get_list(1), 2, 4)),
    expected: '5, 4, 3, 2, 1',
});

console.dir({
    the_case: print(get_list(4)),
    computed: print(reverseList(get_list(4), 1, 1)),
    expected: '5, 4',
});

console.dir({
    the_case: print(get_list(0)),
    computed: print(reverseList(get_list(0), 0, 1)),
    expected: '',
});
