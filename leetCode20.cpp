class Solution {
public:
    bool isValid(string s) {

        std::stack<char> stk;

        switch (s.length()) {
        case 1:
            return false;
        }

        for (int i = 0; i < s.length(); i++) {
            switch (s[i]) {
            case '(':
                stk.push(s[i]);
                break;
            case '{':
                stk.push(s[i]);
                break;
            case '[':
                stk.push(s[i]);
                break;
            }

            switch (s[i]) {
            case ')':
                if (stk.empty()) {
                    return false;
                } else if (stk.top() == '(') {
                    stk.pop();
                    break;
                } else {
                    return false;
                }
            case '}':
                if (stk.empty()) {
                    return false;
                }
                if (stk.top() == '{') {
                    stk.pop();
                    break;
                } else {
                    return false;
                }
            case ']':
                if (stk.empty()) {
                    return false;
                }
                if (stk.top() == '[') {
                    stk.pop();
                    break;
                } else {
                    return false;
                }
            }
        }
        return stk.empty();
    }
};
