/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return null;
    }

    const map = new Map();
    const stk = [node];
    const seen = new Set();

    while (stk.length) {
        const curr = stk.pop();
        map.set(curr, new _Node(curr.val, []));
        for (let i = 0; i < curr.neighbors.length; i++) {
            if (!seen.has(curr.neighbors[i])) {
                stk.push(curr.neighbors[i]);
                seen.add(curr.neighbors[i])
            }
        }
    }
    
    for (const [oldNode, newNode] of map.entries()) {
        for (const neighbor of oldNode.neighbors) {
            newNode.neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};
