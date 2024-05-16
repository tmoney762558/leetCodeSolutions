class Solution {
public:
    string longestPalindrome(string s) {
        int l = 0;
        int r = 0;
        std::string res = "";
        int resLen = 0;
        if (s.length() == 1)
        {
            return s;
        }
        for (int i = 0; i < s.length() - 1; i++)
        {
            l = i;
            r = i;
            while (l >= 0 && r < s.length() && s[l] == s[r])
            {
                if (r - l + 1 > resLen)
                {
                    res = s.substr(l, r - l + 1);
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }

            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length() && s[l] == s[r])
            {
                if (r - l + 1 > resLen)
                {
                    res = s.substr(l, r - l + 1);
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }
        }
        return res;
    }
};
