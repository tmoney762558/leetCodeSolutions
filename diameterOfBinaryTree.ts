/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let max = 0;

    function searchTree(node) {
        let maxLeft = 0;
        let maxRight = 0;

        if (node.left) {
            maxLeft = searchTree(node.left);
        }
        if (node.right) {
            maxRight = searchTree(node.right);
        }
        max = Math.max(max, maxLeft + maxRight);
        return Math.max(maxLeft, maxRight) + 1;
    }
    searchTree(root);
    return max;
};
