function numJewelsInStones(jewels: string, stones: string): number {

    let result = 0;

    const jewelsMap = new Map();

    for (let i:number = 0; i < jewels.length; i++) {
        jewelsMap.set(jewels[i], i);
    }

    for (let i:number = 0; i < stones.length; i++) {
        if (jewelsMap.has(stones[i])) {
            result++;
        }
    }

    return result;
};
