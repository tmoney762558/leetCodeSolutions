class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int zeroCount = 1;
        int flowers = 0;

        for (int i = 0; i < flowerbed.size(); i++) {
            if (flowerbed[i] == 0) {
                zeroCount++;
            }
            else {
                zeroCount = 0;
            }
            if (zeroCount == 3) {
                flowers++;
                zeroCount = 1;
            }
        }
        if (zeroCount == 2) {
            flowers++;
        }
        return flowers >= n;
    }
};
