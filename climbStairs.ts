function climbStairs(n: number): number {
    const map = new Map();

    function climb(s) {
        if (s === 1) {
            return 1;
        }
        if (s === 2) {
            return 2;
        }

        if (map.has(s)) {
            return map.get(s);
        }

        const result = climb(s - 1) + climb(s - 2);
        map.set(s, result);
        return result;
    }

    return climb(n);
};
