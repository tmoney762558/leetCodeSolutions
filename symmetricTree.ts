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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root || !root.left && !root.right) {
        return true;
    }

    let symmetric = true;

    function checkTree(left, right) {
        if (left.val !== right.val) {
            symmetric = false;
        }

        if (left.left || right.right) {
            if (!left.left || !right.right) {
                symmetric = false;
            } else {
                checkTree(left.left, right.right);
            }
        }

        if (left.right || right.left) {
            if (!left.right || !right.left) {
                symmetric = false;
            } else {
                checkTree(left.right, right.left)
            }
        }
    }

    if (root.left && root.right) {
        checkTree(root.left, root.right);
    } else {
        return false;
    }

    return symmetric;
};
