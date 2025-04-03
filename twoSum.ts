function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const matchingNum = numMap.get(target - nums[i]);
        numMap.set(nums[i], i);

        if (matchingNum !== undefined) {
            return [i, matchingNum];
        }
    }
};
