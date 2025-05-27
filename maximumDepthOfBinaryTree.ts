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

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 1;

    if (!root) {
        return 0;
    } else if (!root.left && !root.right) {
        return 1;
    }

    function searchTree(node, depth) {
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) {
            searchTree(node.left, depth + 1);
        }
        if (node.right) {
            searchTree(node.right, depth + 1);
        }
    }

    searchTree(root, 1);
    return maxDepth;
};
