function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const p = Array.from({ length: m }, () => new Array(n).fill(false));
    const a = Array.from({ length: m }, () => new Array(n).fill(false));
    const pQ = [];
    const aQ = [];
    const ans = [];

    for (let i = 0; i < n; i++) {
        p[0][i] = true;
        pQ.unshift({ y: 0, x: i });
        a[m - 1][i] = true;
        aQ.unshift({ y: m - 1, x: i })
    }

    for (let i = 0; i < m; i++) {
        p[i][0] = true;
        pQ.unshift({ y: i, x: 0 });
        a[i][n - 1] = true;
        aQ.unshift({ y: i, x: n - 1 });
    }

    function checkFlow(y, x, queue, dp) {
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        for (let i = 0; i < dirs.length; i++) {
            const newY = y + dirs[i][0];
            const newX = x + dirs[i][1];
            if (newY >= 0 && newY < m && newX >= 0 && newX < n && !dp[newY][newX] && heights[newY][newX] >= heights[y][x]) {
                queue.unshift({ y: newY, x: newX });
                dp[newY][newX] = true;
            }
        }
    }

    while (pQ.length) {
        const { y, x } = pQ.pop();
        checkFlow(y, x, pQ, p);
    }

    while (aQ.length) {
        const { y, x } = aQ.pop();
        checkFlow(y, x, aQ, a);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (p[i][j] && a[i][j]) {
                ans.push([i, j]);
            }
        }
    }

    return ans;
};
