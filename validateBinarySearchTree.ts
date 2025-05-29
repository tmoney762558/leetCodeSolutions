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

function isValidBST(root: TreeNode | null): boolean {
    let last = null;
    let validBST = true;

    function checkTree(node) {
        if (node) {
            checkTree(node.left);
            if (last !== null) {
                if (node.val <= last) {
                    validBST = false;
                }
            }
            last = node.val;
            checkTree(node.right);
        }
    }

    checkTree(root);
    return validBST;
};
