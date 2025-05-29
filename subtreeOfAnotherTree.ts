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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }
        if (p.val === q.val) {
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }
    }

    function helper(p, q) {
        if (!p ) {
            return false;
        }
        if (isSameTree(p, q)) {
            return true;
        }
        return helper(p.left, q) || helper(p.right, q);
    }

    return helper(root, subRoot);
};
