function maxArea(height: number[]): number {
    let mostWater = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        const newVolume = Math.min(height[l], height[r]) * (r - l);
        mostWater = Math.max(newVolume, mostWater);
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return mostWater;
};
