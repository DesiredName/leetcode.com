/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

const tests = [
    {
        t1: {
            val: 1,
            left: {
                val: 2,
                left: { val: 6 },
                right: { val: 7 },
            },
            right: {
                val: 3,
                left: { val: 5 },
                right: { val: 4 },
            },
        },
        t2: {
            val: 1,
            left: {
                val: 2,
                left: { val: 6 },
                right: { val: 7 },
            },
            right: {
                val: 3,
                left: { val: 5 },
                right: { val: 4 },
            },
        },
        expected: true,
    },
    {
        t1: {
            val: 1,
            left: {
                val: 2,
                left: { val: 6 },
                right: { val: 7 },
            },
        },
        t2: {
            val: 1,
            right: {
                val: 3,
                left: { val: 5 },
                right: { val: 4 },
            },
        },
        expected: false,
    },
    {
        t1: {
            val: 1,
            left: {
                val: 0,
                left: { val: 6 },
                right: { val: 2 },
            },
        },
        t2: {
            val: 0,
            left: {
                val: 0,
                left: { val: 6 },
                right: { val: 2 },
            },
        },
        expected: false,
    },
    {
        t1: null,
        t2: { val: 1 },
        expected: false,
    },
    {
        t1: {
            val: 1,
            left: { val: 2 },
            right: { val: 3 },
        },
        t2: {
            val: 1,
            left: { val: 2 },
            right: { val: 3 },
        },
        expected: true,
    },
];

function printTree(t) {
    if (t == null) {
        return '';
    }

    s = t.val + ' -> ';

    if (t.left != null) s = s + printTree(t.left);
    if (t.right != null) s = s + printTree(t.right);

    return s;
}

let is_ok = true;

for (let { t1, t2, expected } of tests) {
    // console.log({
    //     t1: printTree(t1),
    //     t2: printTree(t2),
    //     computed: isSameTree(t1, t2),
    //     expected,
    // });
    is_ok = is_ok && isSameTree(t1, t2) === expected;
}

console.log(is_ok);
