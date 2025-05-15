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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const d = new ListNode();
    let curr = d;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            curr = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            curr = list2;
            list2 = list2.next;
        }
    }
    curr.next = list1 ? list1 : list2;

    return d.next;
};
