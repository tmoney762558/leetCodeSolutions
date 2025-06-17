function networkDelayTime(times: number[][], n: number, k: number): number {
    class MinHeap {
        heap;
        constructor() {
            this.heap = [];
        }

        getParentIndex(i) { return Math.floor((i - 1) / 2); }
        getLeftChildIndex(i) { return 2 * i + 1; }
        getRightChildIndex(i) { return 2 * i + 2; }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        peek() {
            return this.heap[0] ?? null;
        }

        insert(value) {
            this.heap.push(value);
            this.heapifyUp();
        }

        extractMin() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();

            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return min;
        }

        heapifyUp() {
            let index = this.heap.length - 1;

            while (index > 0) {
                const parentIndex = this.getParentIndex(index);
                if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
                this.swap(index, parentIndex);
                index = parentIndex;
            }
        }

        heapifyDown() {
            let index = 0;

            while (this.getLeftChildIndex(index) < this.heap.length) {
                let smallerChildIndex = this.getLeftChildIndex(index);
                const rightChildIndex = this.getRightChildIndex(index);

                if (
                    rightChildIndex < this.heap.length &&
                    this.heap[rightChildIndex][0] < this.heap[smallerChildIndex][0]
                ) {
                    smallerChildIndex = rightChildIndex;
                }

                if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) break;

                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }

        size() {
            return this.heap.length;
        }

        isEmpty() {
            return this.size() === 0;
        }
    }

    const graph = new Map();
    for (const [u, v, time] of times) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        graph.get(u).push([v, time]);
    }

    const minHeap = new MinHeap();
    minHeap.insert([0, k]);
    const minTimes = new Map();

    while (minHeap.size() && minTimes.size !== n) {
        const [currTime, element] = minHeap.extractMin();
        if (minTimes.has(element)) {
            continue;
        }
        minTimes.set(element, currTime);

        if (graph.has(element)) {
            for (const [nei, time] of graph.get(element)) {
                if (!minTimes.has(nei)) {
                    minHeap.insert([time + currTime, nei])
                }
            }
        }
    }

    return minTimes.size === n ? Math.max(...minTimes.values()) : -1;
};
