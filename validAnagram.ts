function isAnagram(s: string, t: string): boolean {
    const anagramMap = new Map();

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const mapValue1 = anagramMap.get(s[i]);
        if (mapValue1) {
            anagramMap.set(s[i], mapValue1 + 1);
        } else {
            anagramMap.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        const mapValue2 = anagramMap.get(t[i]);
        if (mapValue2 && anagramMap.get(t[i]) !== 0) {
            anagramMap.set(t[i], mapValue2 - 1);
        } else {
            return false;
        }
    }
    return true;
}
