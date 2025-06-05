function fib(n: number): number {
    const map = new Map();

    function calculate(f) {
        if (f === 0) {
            return 0;
        }
        if (f === 1) {
            return 1;
        }

        if (!map.has(f + 1)) {
            const result = calculate(f - 1) + calculate(f - 2)
            map.set(f + 1, result);
            return result;
        }

        return map.get(f + 1);
    }

    return calculate(n);
};
