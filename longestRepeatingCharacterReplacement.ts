function characterReplacement(s: string, k: number): number {
    const characters = new Array(26).fill(0);
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        characters[s[r].charCodeAt(0) - 65]++;
        while (r - l + 1 - Math.max(...characters) > k) {
            characters[s[l].charCodeAt(0) - 65]--;
            l++;
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
};
