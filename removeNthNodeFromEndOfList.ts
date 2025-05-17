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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let c = head;
    let arr = [];

    while (c) {
        arr.push(c);
        c = c.next;
    }

    if (n > arr.length) {
        return null;
    }

    let indexToRemove = (arr.length - n);

    if (indexToRemove === 0) {
        head = head.next;
        return head;
    }
    
    if (indexToRemove === arr.length - 1) {
        arr[indexToRemove - 1].next = null;
    } else {
        arr[indexToRemove - 1].next = arr[indexToRemove + 1];
    }

    return head;
};
