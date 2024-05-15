class Solution {
public:
    int temp1 = 1;
    int temp2 = 2;
    int current;
    int climbStairs(int n) {
        if (n == 1)
        {
            return 1;
        }
        if (n == 2)
        {
            return 2;
        }
        for (int i = 3; i <= n; i++)
        {
            current = temp1 + temp2;
            if (temp1 < temp2)
            {
                temp1 = current;
            }
            else
            {
                temp2 = current;
            }
        }
        return current;
    }
};
