class MinStack {
    private stack: number[];
    private min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val: number): void {
        if (val < this.min[this.min.length - 1] || this.min.length === 0) {
            this.min.push(val);
        } else {
            this.min.push(this.min[this.min.length - 1])
        }
        this.stack.push(val);
    }

    pop(): void {
        const stackLen = this.stack.length - 1;
        const minLen = this.min.length - 1;
        this.stack.length = stackLen;
        this.min.length = minLen;
        delete this.stack[stackLen];
        delete this.min[minLen]
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
