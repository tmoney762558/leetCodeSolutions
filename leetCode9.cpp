class Solution {
public:
    bool isPalindrome(int x) {
        std::string stringX = std::to_string(x);
        if(stringX.length() == 1) {
            return 1;
        }

        for(int i = 0; i < (stringX.length() / 2) + 1; i++) {
            if(stringX[i] != stringX[stringX.length() - 1 - i]) {
                return 0;
            }
        }
    return 1;
    }
};
