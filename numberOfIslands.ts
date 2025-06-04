function numIslands(grid: string[][]): number {
    let count = 0;

    function backtrack(x, y) {
        if (grid[y] === undefined || grid[y][x] === undefined || grid[y][x] === "0") {
            return;
        }

        grid[y][x] = "0";

        backtrack(x + 1, y);
        backtrack(x - 1, y);
        backtrack(x, y + 1);
        backtrack(x, y - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                backtrack(j, i);
                count++;
            }
        }
    }

    return count;
};
