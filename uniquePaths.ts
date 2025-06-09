function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) {
        return 1;
    }

    // const map = new Map();
    let uniquePaths = 0;
    let dp = new Array(m * n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let paths = 0;
            if (i <= 1) {
                paths++;
            } else {
                paths += dp[((i - 1) * n) + j];
            }
            if (j <= 1) {
                paths++;
            } else {
                paths += dp[(i * n) + (j - 1)];
            }
            dp[(i * n) + j] = paths;
            uniquePaths = paths;
        }
    }

    return uniquePaths;
};
