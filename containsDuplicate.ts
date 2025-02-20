function containsDuplicate(nums: number[]): boolean {
    const numMap = new Map();

    for (let i:number = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            return true;
        }
        numMap.set(nums[i], i);
    }

    return false;    
};
