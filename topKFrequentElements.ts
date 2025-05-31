function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    const arr = new Array(nums.length + 1).fill(null).map(() => []);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const inMap = map.get(nums[i]);
        if (inMap) {
            map.set(nums[i], inMap + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    map.forEach((value, key) => {
        arr[value].push(key);
    });
    
    let i = arr.length - 1;
    while (result.length < k) {
        for (let j = 0; j < arr[i].length; j++) {
            if (result.length !== k) {
                result.push(arr[i][j]);
            }
            else {
                break;
            }
        }
        i--;
    };

    return result;
};
