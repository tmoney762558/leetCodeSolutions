function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0;
    let min = null;
    let sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        if (sum > target) {
            while (sum >= target) {
                sum -= nums[l];
                l++;
            }
            l--;
            sum += nums[l];
        }
        if (sum >= target) {
            min = min === null ? r - l + 1 : Math.min(r - l + 1, min);
        }
    }
    return min || 0;
};
