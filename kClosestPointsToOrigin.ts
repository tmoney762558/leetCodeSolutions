function kClosest(points: number[][], k: number): number[][] {
    if (points.length === k) return points;

    const minHeap = new PriorityQueue<number[]>((a, b) => {
        return a[0] - b[0];
    });

    for (let i = 0; i < points.length; i++) {
        const distance = Math.sqrt((0 - points[i][0]) ** 2 + (0 - points[i][1]) ** 2);
        const heapValue = [distance, points[i][0], points[i][1]];
        minHeap.push(heapValue);
    }

    const result = [];

    while (result.length < k) {
        const [_, x, y] = minHeap.pop()
        result.push([x, y]);
    }

    return result;
};
