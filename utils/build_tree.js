function build_node(value, left, right) {
    return {
        val: value == null ? 0 : value,
        left,
        right,
    };
}

function build_bin_tree(nodes_arr) {}

module.exports = {
    build_bin_tree,
};
