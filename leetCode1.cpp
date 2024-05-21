class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::unordered_map<int, int> myMap;
        for (int i = 0; i < nums.size(); i++) {
            int pair = target - nums[i];

            if (myMap.find(pair) != myMap.end()) {
                return {myMap[pair], i};
            }
            myMap[nums[i]] = i;
        }
        return {0, 0};
    }
};
