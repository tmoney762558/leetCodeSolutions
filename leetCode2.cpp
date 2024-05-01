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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *l3 = new ListNode;
        ListNode *current = l3;

        int carry = 0;

        while (l1 != NULL || l2 != NULL) // We iterate until BOTH lists are empty
        { 
            int sum = 0 + carry; // Carry is carried over from previous iterations

            if (l1 != NULL) // Continue going through list 1 until we reach NULL
            {
                sum += l1->val;
                l1 = l1->next;
            }

            if (l2 != NULL) // Continue going through list 1 until we reach NULL
            {
                sum += l2->val;
                l2 = l2->next;
            }

            carry = sum / 10; // Calculate the carry first
            sum = sum % 10; //Calculating the single digit sum for our current position
            
            current->val = sum;

            if (l1 != NULL || l2 != NULL)
            {
                current->next = new ListNode;
                current = current->next;
            }
        }
        while (carry != 0)
        {
            current->next = new ListNode;
            current = current->next;
            current->val = carry % 10;
            carry /= 10;
        }
        return l3;
    }
};
