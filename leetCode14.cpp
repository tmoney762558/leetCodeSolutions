// Bad solution

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        std::string result = "";
        std::string temp = "";
        bool cont = false;

        for (int i = 0; i < strs[0].length(); i++) {
            result += std::string() + strs[0][i];
        }

        for (int i = 1; i < strs.size(); i++) {
            for (int j = 0; j < strs[i].length(); j++) {
                if (strs[i][j] == result[j] && j < result.length()) {
                    temp += std::string() + strs[i][j];
                }
                else {
                    cont = false;
                    break;
                }
            }
            if (cont == false || temp != "")
            {
                result = temp;       
            }

            temp = "";
        }
        std::cout << result;
        return result;
    }
    
};
