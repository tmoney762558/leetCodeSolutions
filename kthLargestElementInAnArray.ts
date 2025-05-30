function findKthLargest(nums: number[], k: number): number {
    let maxHeap = new MaxPriorityQueue<number>();

    for (let i = 0; i < nums.length; i++) {
        maxHeap.enqueue(nums[i]);
    }

    for (let i = 0; i < k - 1; i++) {
        maxHeap.dequeue();
    }
    return maxHeap.front();
};
