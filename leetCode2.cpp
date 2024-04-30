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
        ListNode* current = l1;
        ListNode* l3 = NULL;
        int l1Val = 0;
        int l2Val = 0;
        long long mult = 1;
        std::stack<int> stk;

        if (l1->val == 0) {
            l1Val = 0;
        } else {

            while (current != NULL) {
                stk.push(current->val);
                current = current->next;
            }

            while (!stk.empty()) {
                l1Val += stk.top() * mult;
                stk.pop();
                mult *= 10;
            }
        }
        if (l2->val == 0) {
            l2Val = 0;
        } else {
            current = l2;
            while (current != NULL) {
                stk.push(current->val);
                current = current->next;
            }

            while (!stk.empty()) {
                l2Val += stk.top() * mult;
                stk.pop();
                mult *= 10;
            }
            
            int l3Val = l1Val + l2Val;

            while (l3Val != 0)
            {   
                if (l3 == NULL)
                {
                    l3 = new ListNode;
                    l3->val = l3Val % 10;
                    l3->next = NULL;
                    current = l3;
                }

                else
                {
                    ListNode* newNode = new ListNode;
                    newNode->val = l3Val % 10;
                    newNode->next = NULL;
                    current->next = newNode;
                    current = current->next;
                    current->next = NULL;
                }

                l3Val /= 10;
            }
        }
        return l3;
    }
};
