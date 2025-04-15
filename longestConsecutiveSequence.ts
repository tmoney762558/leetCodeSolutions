function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let sequence = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentSequence = 0;

            while (numSet.has(num + currentSequence)) {
                currentSequence++;
            }
            sequence = Math.max(currentSequence, sequence);
        }
    }

    return sequence;
};
