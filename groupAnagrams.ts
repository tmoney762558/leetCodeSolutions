function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    const result = [];
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split("").sort().join("");
        const mapRetrieval = map.get(sortedString);
        
        if (mapRetrieval === undefined) {
            map.set(sortedString, result.length);
            result.push([strs[i]])
        }
        else {
            result[mapRetrieval] = [...result[mapRetrieval], strs[i]];
        }
    }

    return result;
};
