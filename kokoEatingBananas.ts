function minEatingSpeed(piles: number[], h: number): number {
    const maxK = Math.max(...piles);
    let l = 1
    let r = maxK;
    let k = 1;

    function kCheck(kValue) {
        let neededHours = 0;
        for (let i = 0; i < piles.length; i++) {
            neededHours += Math.ceil(piles[i] / kValue);
        }
        if (neededHours <= h) {
            k = kValue;
            return true;
        }
        return false;
    }

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const result = kCheck(m);
        
        if (result) {
            r = m - 1;
        } else {
            l = m  + 1;
        }
    }

    return k;
};
