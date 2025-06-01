function permute(nums: number[]): number[][] {
    let ans = [];
    const sol = [];

    function backtrack() {
        if (sol.length === nums.length) {
            ans = [...ans, [...sol]];
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!sol.includes(nums[i])) {
                sol.push(nums[i]);
                backtrack();
                sol.pop();
            }
        }
    }

    backtrack();
    return ans;
};
