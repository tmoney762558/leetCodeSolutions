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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    let balanced = true;

    function searchTree(node) {
        let maxLeft = 0;
        let maxRight = 0;

        if (node.left) {
            maxLeft = searchTree(node.left);
        }
        if (node.right) {
            maxRight = searchTree(node.right);
        }

        if (Math.abs(maxLeft - maxRight) > 1) {
            balanced = false;
        }
        return Math.max(maxLeft, maxRight) + 1;
    }
    searchTree(root);
    return balanced;
};
