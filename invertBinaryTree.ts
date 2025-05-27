function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root || !root.left && !root.right) {
        return root
    }

    function swapNodes(parentNode) {
        let temp = parentNode.left;
        parentNode.left = parentNode.right;
        parentNode.right = temp;
        if (parentNode.left) {
            swapNodes(parentNode.left);
        }
        if (parentNode.right) {
            swapNodes(parentNode.right);
        }
    }
    swapNodes(root);
    return root;
};
