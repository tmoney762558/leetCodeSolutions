function findMin(nums: number[]): number {
    let l = 0;
    let m = Math.floor(nums.length / 2);
    let r = nums.length - 1;

    while (l < r) {
        if (nums[m] < nums[r]) {
            r = m;
        } else if (nums[m] > nums[r]) {
            l = m + 1;
        }
        m = Math.floor((l + r) / 2)
    }
    return nums[m];
};
