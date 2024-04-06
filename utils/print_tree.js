function print_tree(root) {
    let s = '';

    if (root == null) {
        return '';
    }

    s = root.val + ' -> ';

    if (root.left != null) s = s + print_tree(root.left);
    if (root.right != null) s = s + print_tree(root.right);

    return s;
}

module.exports = {
    print_tree,
};
