function canConstruct(ransomNote: string, magazine: string): boolean {
    const letters = new Map();

    for (let i = 0; i < magazine.length; i++) {
        if (!letters.get(magazine[i])) {
            letters.set(magazine[i], 1);
        }
        else {
            letters.set(magazine[i], letters.get(magazine[i]) + 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (letters.get(ransomNote[i])) {
            letters.set(ransomNote[i], letters.get(ransomNote[i]) - 1);
            if (letters.get(ransomNote[i]) === 0) {
                letters.delete(ransomNote[i]);
            }
        }
        else {
            return false;
        }
    }

    return true;
};
