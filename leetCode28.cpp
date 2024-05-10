class Solution {
public:
    int strStr(string haystack, string needle) {
        if (haystack == "")
        {
            return 0;
        }
        for (int i = 0; i < haystack.length(); i++)
        {
            for (int j = 0; j < needle.length(); j++)
            {
                if (needle[j] != haystack[i + j])
                {
                    break;
                }
                if (j == needle.length() - 1)
                {
                    return i;
                }
            }
        }
        return -1;
    }
};
