class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        set<char> set;
        int l = 0;
        int res = 0;

        for (int i = 0; i < s.length(); i++)
        {
            while (set.count(s[i]) > 0)
            {
                set.erase(s[l]);
                l++;

            }                
            set.insert(s[i]);
            res = max(res, i - l + 1);
        }
    return res;
    }
};
