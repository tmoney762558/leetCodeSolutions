function combinationSum(candidates: number[], target: number): number[][] {
    const ans = [];

    candidates.sort((a, b) => a - b);

    function findCombinations(start, current, sum) {
        if (sum === target) {
            ans.push([...current]);
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            findCombinations(i, current, sum + candidates[i]);
            current.pop();
        }
    }
    findCombinations(0, [], 0);
    return ans;
};
