function maxAreaOfIsland(grid: number[][]): number {
    let result = 0;
    let sol = 0;

    function backtrack(y, x) {
        if (!grid[y] || !grid[y][x]) {
            return;
        }

        grid[y][x] = 0;
        sol++;

        backtrack(y + 1, x);
        backtrack(y - 1, x);
        backtrack(y, x + 1);
        backtrack(y, x - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                backtrack(i, j);
                result = Math.max(result, sol);
                sol = 0;
            }
        }
    }
    return result;
};
