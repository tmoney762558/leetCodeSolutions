function lastStoneWeight(stones: number[]): number {
    class MaxHeap {
        data;
        constructor() {
            this.data = [];
        }

        push(val) {
            this.data.push(val);
            let i = this.data.length - 1;
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (this.data[i] > this.data[p]) {
                    [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
                    i = p;
                } else break;
            }
        }

        pop() {
            if (this.data.length === 0) return null;
            const top = this.data[0];
            const last = this.data.pop();
            if (this.data.length === 0) return top;
            this.data[0] = last;

            let i = 0;
            const n = this.data.length;
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2, max = i;
                if (l < n && this.data[l] > this.data[max]) max = l;
                if (r < n && this.data[r] > this.data[max]) max = r;
                if (max === i) break;
                [this.data[i], this.data[max]] = [this.data[max], this.data[i]];
                i = max;
            }

            return top;
        }

        peek() {
            return this.data[0] ?? null;
        }

        size() {
            return this.data.length;
        }
    }

    const maxHeap = new MaxHeap();

    for (let i = 0; i < stones.length; i++) {
        maxHeap.push(stones[i]);
    }

    while(maxHeap.size() > 1) {
        const y = maxHeap.pop();
        const x = maxHeap.pop();

        if (x !== y) {
            maxHeap.push(y - x);
        }
    }

    return maxHeap.peek() || 0;
};
