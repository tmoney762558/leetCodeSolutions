function lengthOfLIS(nums: number[]): number {
    const list = [];

    for (const num of nums) {
        let left = 0;
        let right = list.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (list[mid] < num) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }

        if (left === list.length) {
            list.push(num);
        } else {
            list[left] = num;
        }
    }

    return list.length;
};
