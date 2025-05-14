function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            answer[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }

    return answer;
};
