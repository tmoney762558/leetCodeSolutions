function minCostClimbingStairs(cost: number[]): number {
    const map = new Map();

    let dp = new Array(cost.length).fill(0);

    for (let i = 0; i < cost.length; i++) {
        if (i <= 1) {
            dp[i] = cost[i];
        } else {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }
    }

    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);



    /* function findMin(index) {
        if (index === cost.length) {
            return Math.min(map.get(index - 1), map.get(index - 2));
        }
        if (index <= 1) {
            map.set(index, cost[index]);
            return findMin(index + 1);
        }
        const newMin = Math.min(map.get(index - 1), map.get(index - 2));
        map.set(index, newMin + cost[index]);
        return findMin(index + 1, newMin);
    }

    return findMin(0); */
}
