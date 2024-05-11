class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int i = digits.size() - 1;
        bool carry = true;

        while (i >= 0)
        {
            digits[i]++;
            if (digits[i] == 10)
            {
                digits[i] = 0;
                i--;
            }
            else 
            {
              break;
            }
        }
        if (digits[0] == 0)
        {
            digits.insert(digits.begin(), 1);
        }
        return digits;
    }
};
