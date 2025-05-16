/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let c = head;
    let t = head;

    while (c && t) {
        c = c.next;
        t = t.next ? t.next.next : null;
        if (c === t && c && t) {
            return true;
        }
    }
    return false;
};
