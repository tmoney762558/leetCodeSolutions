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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }

    let same = true;

    function checkTrees(tree1, tree2) {
        if (tree1.val !== tree2.val) {
            same = false;
        }

        if (tree1.left || tree2.left) {
            if (!tree1.left || !tree2.left) {
                same = false;
            } else {
                checkTrees(tree1.left, tree2.left);
            }
        }
        if (tree1.right || tree2.right) {
            if (!tree1.right || !tree2.right) {
                same = false;
            } else {
                checkTrees(tree1.right, tree2.right);
            }
        }
    }

    if (p && q) {
        checkTrees(p, q);
    } else {
        return false;
    }

    return same;
};
