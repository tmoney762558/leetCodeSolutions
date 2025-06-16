function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const rotten = [];
    let time = 0;
    let freshAmount = 0;
    let queue = 0;
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let valid = false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                if (grid[i][j] === 1) {
                    freshAmount++;
                } else if (grid[i][j] === 2) {
                    rotten.push({ y: i, x: j });
                }
            }
        }
    }

    if (!freshAmount) {
        return 0;
    }

    while (rotten.length) {
        queue = rotten.length;
        for (let i = 0; i < queue; i++) {
            const { y, x } = rotten.shift();
            for (let j = 0; j < dir.length; j++) {
                const newY = dir[j][0] + y;
                const newX = dir[j][1] + x;
                if (grid[newY] && grid[newY][newX] === 1) {
                    grid[newY][newX] = 2;
                    freshAmount--;
                    rotten.push({ y: newY, x: newX });
                }
            }
        }
        time++;
    }
    if (freshAmount) {
        return -1;
    }

    return time - 1;
};
