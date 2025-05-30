class Trie {
    dict = {};
    constructor() {
    }

    insert(word: string): void {
        let curr = this.dict;
        for (let i = 0; i < word.length; i++) {
            if (curr[word[i]]) {
                curr = curr[word[i]];
            } else {
                curr[word[i]] = {};
                curr = curr[word[i]];
            }
        }
        curr["."] = {};
    }

    search(word: string): boolean {
        let curr = this.dict;
        for (let i = 0; i < word.length; i++) {
            if (!curr[word[i]]) {
                return false;
            }
            curr = curr[word[i]];
        }
        if (curr["."]) {
            return true;
        }
        return false;
    }

    startsWith(prefix: string): boolean {
        let curr = this.dict;
        for (let i = 0; i < prefix.length; i++) {
            if (!curr[prefix[i]]) {
                return false;
            }
            curr = curr[prefix[i]];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
