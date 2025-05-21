function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let m = Math.floor(nums.length / 2);
    let r = nums.length - 1;

    while (r >= l) {
        if (nums[m] < target) {
            l = m + 1;
            m = Math.floor((l + r) / 2);
        } else if (nums[m] > target) {
            r = m - 1;
            m = Math.floor((l + r) / 2);
        }
        if (nums[m] === target) {
            return m;
        }
    }
    return r < l ? l : r;
};
