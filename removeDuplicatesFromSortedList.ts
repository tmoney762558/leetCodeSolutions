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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    let temp = head;
    while (curr !== null) {
        if (curr.val !== temp.val) {
            temp.next = curr;
            temp = curr;
        } else if (curr.next === null) {
            temp.next = null;
        }
        curr = curr.next;
    }
    return head;
};
