function check(node) {
    if (node == null || (node.left == null && node.right == null)) {
        return { h: 0, diam: 0 };
    } else if (node.left == null) {
        const r_result = check(node.right);

        return {
            h: 1 + r_result.h,
            diam: Math.max(1 + r_result.h, r_result.diam),
        };
    } else if (node.right == null) {
        const l_result = check(node.left);

        return {
            h: 1 + l_result.h,
            diam: Math.max(1 + l_result.h, l_result.diam),
        };
    } else {
        const l_result = check(node.left);
        const r_result = check(node.right);
        const h_l = 1 + l_result.h;
        const h_r = 1 + r_result.h;

        return {
            h: Math.max(h_l, h_r),
            diam: Math.max(h_l + h_r, l_result.diam, r_result.diam),
        };
    }
}

console.error('CHeck the Thompsons threaded algorythm');

var diameterOfBinaryTree = function (root) {
    return check(root).diam;
};

const tests = [
    {
        tree: {
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
        expected: 4,
    },
    {
        tree: {
            val: 1,
            left: {
                val: 2,
                left: { val: 6 },
                right: {
                    val: 7,
                    right: { val: 11 },
                },
            },
        },
        expected: 3,
    },
    {
        tree: {
            val: 1,
            right: {
                val: 3,
                left: { val: 5 },
                right: { val: 4 },
            },
        },
        expected: 2,
    },
    {
        tree: {
            val: 1,
            left: {
                val: 2,
                left: { val: 6 },
                right: {
                    val: 7,
                    right: { val: 11 },
                },
            },
            right: {
                val: 3,
                left: { val: 5 },
                right: {
                    val: 4,
                    right: { val: 12, left: { val: 13, left: { val: 14 } } },
                },
            },
        },
        expected: 8,
    },
    {
        tree: null,
        expected: 0,
    },
    {
        tree: { val: 1 },
        expected: 0,
    },
    {
        tree: {
            val: 1,
            left: { val: 2 },
            right: { val: 3 },
        },
        expected: 2,
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

for (const { tree, expected } of tests) {
    const computed = diameterOfBinaryTree(tree);
    // console.log({
    //     tree: printTree(tree),
    //     computed,
    //     expected,
    // });

    is_ok = is_ok && computed === expected;
}

console.log(is_ok);
