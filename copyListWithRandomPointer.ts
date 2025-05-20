/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    const newList = [];
    const indexMap = new Map();
    let c = head;
    let i = 0;

    while (c) {
        indexMap.set(c, i);
        newList.push(new _Node(c.val, null, c.random));
        c = c.next;
        i++;
    }

    for (let i = 0; i < newList.length; i++) {
        const randomIndex = indexMap.get(newList[i].random);
        newList[i].random = newList[randomIndex];
        newList[i].next = i < newList.length - 1 ? newList[i + 1] : null;
    }

    return newList[0]
};
