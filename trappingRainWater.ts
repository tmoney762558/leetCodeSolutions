function trap(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let maxL = 0;
    let maxR = 0;
    let water = 0;
    

    while (l < r) {
        if (height[l] <= height[r]) {
            water += Math.max(maxL - height[l], 0);
            maxL = Math.max(maxL, height[l]);
            l++;
        }
        else {
            water += Math.max(maxR - height[r], 0); 
            maxR = Math.max(maxR, height[r]);
            r--;
        }
    }
    return water;
};
