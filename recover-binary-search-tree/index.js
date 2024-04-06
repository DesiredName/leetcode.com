const { print_tree } = require('../utils/print_tree.js');

var recoverTree = function (root) {
    function depth_search(node) {
        if (node == null) {
            return;
        } else {
            node.left != null && depth_search(node.left);

            if (prev != null && prev.val > node.val) {
                if (first == null) {
                    first = prev;
                }

                second = node;
            }

            prev = node;

            node.right != null && depth_search(node.right);
        }
    }

    let prev = null;
    let first = null;
    let second = null;

    depth_search(root);

    [first.val, second.val] = [second.val, first.val];

    return root;
};

const n7 = {
    val: 3,
};
const n6 = {
    val: 3,
};
const n5 = {
    val: 43,
    right: n7,
};
const n4 = {
    val: 3,
};
const n3 = {
    val: 43,
    left: n6,
};
const n2 = {
    val: 10,
    left: n4,
    right: n5,
};
const n1 = {
    val: 40,
    left: n2,
    right: n3,
};

const tests = [
    {
        root: n2,
        expected: n2,
    },
];

let is_ok = true;

for (let { root, expected } of tests) {
    const result = recoverTree(root);

    console.log({
        result: print_tree(result),
        expected: print_tree(expected),
    });

    is_ok = is_ok && result === expected;
}

console.log(is_ok);
