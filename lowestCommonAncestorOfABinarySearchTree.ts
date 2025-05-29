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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let ans = null;

    function searchForValue(node) {

        if (!node) {
            return false;
        }

        let leftFound = searchForValue(node.left)
        let rightFound = searchForValue(node.right);

        const nodeIsValid = node.val === p.val ? true : node.val === q.val ? true : false;

        if (leftFound || rightFound) {
            if (nodeIsValid || leftFound && rightFound) {
                ans = node;
            }
        }
        if (nodeIsValid) {
            return true;
        }
        else {
            return leftFound || rightFound;
        }
    }

    searchForValue(root);
    return ans;
};
