/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let curr = m + n - 1;

    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[curr] = nums1[m - 1];
            m--;
        } else {
            nums1[curr] = nums2[n - 1];
            n--;
        }
        curr--;
    }

    while (n > 0) {
        nums1[curr] = nums2[n - 1];
        curr--;
        n--;
    }
};
