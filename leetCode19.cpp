/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* prev = nullptr;
        ListNode* current = head;
        ListNode* next = nullptr;
        int listLength = 0;
        int target = 0;

        while (current->next != nullptr) {
            current = current->next;
            listLength++;
        }
        
        target = listLength - n + 1;
        current = head;

        for (int i = 0; i <  target; i++) {
            
            if (i == target - 1) {
                prev = current;
            }
            current = current->next;
        }
        if (current == head) {
            head = head->next;
            return head;
        }

        if (current->next != nullptr) {
            next = current->next;
            prev->next = next;           
        }
        else {
            prev->next = nullptr;
        }
        return head;
    }
};
