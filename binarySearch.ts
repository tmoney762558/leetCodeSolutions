function search(nums: number[], target: number): number {
    let i = Math.floor(nums.length / 2);
    let range = i;

    
    while(nums[i] !== target) {
        if (nums[i] < target) {
            range = Math.ceil(range / 2);
            i += range;
        }
        else if (nums[i] > target) {
            range = Math.ceil(range / 2);
            i -= range;
        }
        if (range <= 1 && nums[i] !== target) {
            return -1;
        }
    }
    return i;
};
