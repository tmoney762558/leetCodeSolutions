function generateParenthesis(n: number): string[] {
    const ans = [];

    function backtrack(open, close, sol) {
        if (sol.length === n * 2) {
            ans.push(sol.join(""));
            return;
        }

        if (open > close) {
            sol.push(")");
            backtrack(open, close + 1, sol);
            sol.pop();
        }

        if (open < n) {
            sol.push("(");
            backtrack(open + 1, close, sol);
            sol.pop();
        }
    }

    backtrack(1, 0, ["("]);
    return ans;
};
