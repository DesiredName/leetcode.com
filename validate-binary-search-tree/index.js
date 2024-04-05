/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (root == null) {
        return true;
    } else if (root.left == null && root.right == null) {
        return true;
    } else {
        return check_valid(
            root,
            Number.NEGATIVE_INFINITY,
            Number.POSITIVE_INFINITY,
        );
    }
};

function check_valid(node, min, max) {
    if (node == null) {
        return true;
    } else if (node.val <= min || node.val >= max) {
        return false;
    } else {
        if (check_valid(node.left, min, node.val) === false) {
            return false;
        }
        if (check_valid(node.right, node.val, max) === false) {
            return false;
        }
    }

    return true;
}

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
        expected: false,
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
for (let { root, expected } of tests) {
    const result = isValidBST(root);

    console.log({
        tree: printTree(root),
        result,
        expected,
    });

    is_ok = is_ok && isValidBST(root) === expected;
}

console.log(is_ok);
