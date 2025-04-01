function maxNumberOfBalloons(text: string): number {
    const charMap = new Map();

    for (let i = 0; i < text.length; i++) {
        charMap.set(text[i], charMap.get(text[i]) ? charMap.get(text[i]) + 1 : 1);
    }

    const b = charMap.get("b") || 0;
    const a = charMap.get("a") || 0;
    const l = Math.floor(charMap.get("l") / 2) || 0;
    const o = Math.floor(charMap.get("o") / 2) || 0;
    const n = charMap.get("n") || 0;

    return Math.min(b, a, l, o, n);

};
