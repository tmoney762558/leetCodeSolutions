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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const result = [];

    function traverseTree(node, level) {
        if (level === result.length) {
            result.push([node.val]);
        } else {
            result[level].push(node.val);
        }
        if (node.left) {
            traverseTree(node.left, level + 1);
        }
        if (node.right) {
            traverseTree(node.right, level + 1);
        }
    }

    traverseTree(root, 0);

    return result;
};
