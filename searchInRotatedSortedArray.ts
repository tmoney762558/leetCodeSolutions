function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (nums[m] === target) {
            return m;
        }

        if (nums[l] <= nums[m]) {
            if (nums[l] <= target && nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[r] >= target && nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};
