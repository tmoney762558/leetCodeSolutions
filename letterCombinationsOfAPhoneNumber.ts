function letterCombinations(digits: string): string[] {
    if (!digits) {
        return [];
    }

    const letterMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let sol = [];
    const ans = [];

    function backtrack(d) {
        if (d === digits.length) {
            ans.push(sol.join(""));
            return;
        }

        for (let i = 0; i < letterMap[digits[d]].length; i++) {
            sol.push(letterMap[digits[d]][i]);
            backtrack(d + 1);
            sol.pop();
        }
    }

    backtrack(0);
    return ans;
};
