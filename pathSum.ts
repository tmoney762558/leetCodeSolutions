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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let sumFound = false;

    if (!root) {
        return false;
    }

    function checkPath(node, sum) {
        const newSum = sum + node.val;

        if (newSum === targetSum && !node.left && !node.right) {
            sumFound = true;
        }

        if (node.left) {
            checkPath(node.left, newSum);
        }
        if (node.right) {
            checkPath(node.right, newSum);
        }
    }
    checkPath(root, 0);
    return sumFound;
};
