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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let curr = head.next;
    let prev = head;
    head.next = null;
    while (curr.next !== null) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    curr.next = prev;
    return curr;
};
