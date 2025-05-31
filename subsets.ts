function subsets(nums: number[]): number[][] {
    const sol = [];
    function returnSubsets(curr, arr, add) {
        if (add) {
            arr.push(nums[curr]);
        }
        if (curr === nums.length - 1) {
            sol.push(arr);
            return;
        }

        returnSubsets(curr + 1, [...arr], 0);
        returnSubsets(curr + 1, [...arr], 1);
    }

    returnSubsets(-1, [], 0);
    return sol;
};
