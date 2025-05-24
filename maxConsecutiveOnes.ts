function longestOnes(nums: number[], k: number): number {
    let window = [];
    let l = 0;
    let r = 0;
    let flips = k;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            r++;
        } else if (flips > 0) {
            r++;
            flips--;
        } else {
            while (nums[l] > 0 && r - l > 0) {
                l++;
            }
            l++;
            r++;
        }
        max = Math.max(max, r - l);
    }
    return max;
};
