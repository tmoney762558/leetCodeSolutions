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
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == nullptr) {
            return head;
        }

        ListNode* prev = nullptr;
        ListNode* current = head;
        ListNode* next = nullptr;
        int currentValue = head->val;

        while (current != NULL) {
            currentValue = current->val;

            prev = current;

            while (current != nullptr && current->val == currentValue) {
                current = current->next;
            }

            prev->next = current;
        }
        return head;
    }
};
