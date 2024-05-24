class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        std::string word3 = "";
        int current = 0;
        int l1 = word1.length();
        int l2 = word2.length();

        while (word3.length() != word1.length() + word2.length()) {
            if (current <= l1 - 1) {
                word3 += word1[current];
            }
            if (current <= l2 - 1) {
                word3 += word2[current];
            }
            current++;
        }
        return word3;
    }
};
