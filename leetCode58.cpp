class Solution {
public:
    int lengthOfLastWord(string s) {
        int i = s.length() - 1;
        int result = 0;
        while (isspace(s[i]))
        {
            i--;
        }
        while (!isspace(s[i]))
        {
            if (i != 0)
            {
                i--;
                result++;
            }
            else
            {
                result++;
                return result;
            }
        }

    return result;
    }
};
