var sumOfLeftLeaves = function (root) {
    const sum = (node, left) => {
        if (node == null) {
            return 0;
        } else if (node.left == null && node.right == null) {
            return left === 1 ? node.val : 0;
        } else {
            return sum(node.left, 1) + sum(node.right, 0);
        }
    };

    return sum(root, 0);
};
