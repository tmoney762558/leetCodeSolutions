class Solution {
public:
    string convert(string s, int numRows) {
        int oJump = (numRows - 1) * 2;
        int jump = oJump;
        int currentRow = 1;
        std::string result = "";
        result += s[0];

        while (s.length() != result.length()) {
            int i = 0;
            if (currentRow == 1 || currentRow == s.length() - 1) {
                while (i + oJump <= s.length() - 1) {
                    i += oJump;
                    result += s[i];
                }
                currentRow++;
            } else {
                while (i + jump < s.length() - 1) {
                    result += s[i + jump];
                    jump -= 2;
                }
                if (i + oJump <= s.length() - 1) {
                    result += s[i + oJump];
                } else {
                    currentRow++;
                    i = currentRow;
                    break;
                }
            }
        }
        return result;
    }
};
