class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode *list3 = new ListNode;
        ListNode *current = list3;

        while (list1 != NULL && list2 != NULL)
        {
            if (list1->val <= list2->val)
            {   
                current->next = list1;
                list1 = list1->next;
            }
            else
            {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }
        if (list1 != NULL)
        {
            current->next = list1;
        }
        if (list2 != NULL)
        {
            current->next = list2;
        }

        return list3->next;
    }
};
