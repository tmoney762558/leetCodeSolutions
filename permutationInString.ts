function checkInclusion(s1: string, s2: string): boolean {
    let l = 0;
    let tLength = 0;
    let charMap = new Map();

    for (let i = 0; i < s1.length; i++) {
        tLength++;
        const result = charMap.get(s1[i]);
        if (result) {
            charMap.set(s1[i], result + 1);
        } else {
            charMap.set(s1[i], 1);
        }
    }

    for (let r = 0; r < s2.length; r++) {
        const result = charMap.get(s2[r]);
        if (result === undefined) { // Character is not in the map
            while (l <= r) {
                const mapResult = charMap.get(s2[l]);
                if (mapResult !== undefined) {
                    charMap.set(s2[l], mapResult + 1);
                }
                l++;
            }
        } else if (result === 0) { // Character is in the map but it has been used up
            while (s2[l] !== s2[r]) {
                const mapResult = charMap.get(s2[l]);
                if (mapResult !== undefined) {
                    charMap.set(s2[l], mapResult + 1);
                }
                l++;
            }
            l++;
        } else if (result) { // Character is in the map and can be used
            charMap.set(s2[r], result - 1);
            if (r - l + 1 === tLength) {
                return true;
            }
        }
    }
    return false;
};
