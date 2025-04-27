function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let num1 = nums[i];
        let l = i + 1;
        let r = nums.length - 1;

        if (num1 !== nums[i - 1]) {
            while (l < r) {
                const targetCheck = nums[i] + nums[l] + nums[r];

                if (targetCheck === 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    while (nums[i] + nums[l] + nums[r] === 0) {
                        r--;
                    }
                }
                else if (targetCheck < 0) {
                    l++;
                }
                else if (targetCheck > 0) {
                    r--;
                }
            }
        }
    }
    return result;
};
