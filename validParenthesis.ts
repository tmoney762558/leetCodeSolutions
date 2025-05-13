function isValid(s: string): boolean {
    const seen: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const lastSeen = seen.length - 1;
        switch (s[i]) {
            case ")": {
                if (seen[lastSeen] !== "(") {
                    return false;
                }
                seen.pop();
                break;
            }
            case "}": {
                if (seen[lastSeen] !== "{") {
                    return false;
                }
                seen.pop();
                break;
            }
            case "]": {
                if (seen[lastSeen] !== "[") {
                    return false;
                }
                seen.pop();
                break;
            }
            default: {
                seen.push(s[i]);
                break;
            }
        }
    }
    return seen.length === 0 ? true : false;
};
