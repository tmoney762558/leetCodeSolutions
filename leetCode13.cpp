class Solution {
public:
    int romanToInt(string s) {
        char prev;
        int total = 0;
        for(int i = s.length() - 1; i >= 0; i--) {
            switch(s[i]) {
                case 'I':
                if (prev == 'V' || prev == 'X') {
                    prev = 'I';
                    total+= -1;
                    break;
                }
                else {
                    prev = 'I';
                    total+= 1;  
                    break;
                }
                case 'V':
                prev = 'V';
                total+= 5;
                break;
                case 'X':
                if (prev == 'L' || prev == 'C') {
                    prev = 'X';
                    total+= -10;
                    break;
                }
                else {
                    prev = 'X';
                    total+= 10;
                    break;
                }
                case 'L':
                prev = 'L';
                total+= 50;
                break;
                case 'C':
                if (prev == 'D' || prev == 'M') {
                    prev = 'C';
                    total+= -100;
                    break;
                }
                else {
                prev = 'C';
                total+= 100;
                break;
                }
                case 'D':
                prev = 'D';
                total+= 500;
                break;
                case 'M':
                prev = 'M';
                total+= 1000;
                break;
                default:
                return 0;
            }
        }
    return total;
    }
};
