function maxSubArray(nums: number[]): number {
    let currSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};
