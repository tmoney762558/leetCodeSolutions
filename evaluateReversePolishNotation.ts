function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (let i = 0; i < tokens.length; i++) {
        const sIndex = stack.length - 1;
        let solution = 0;
        switch (tokens[i]) {
            case "+": {
                solution = stack[sIndex - 1] + stack[sIndex];
                stack.pop();
                stack.pop();
                stack.push(solution)
                break;
            }
            case "-": {
                solution = stack[sIndex - 1] - stack[sIndex];
                stack.pop();
                stack.pop();
                stack.push(solution);
                break;
            }
            case "*": {
                solution = stack[sIndex - 1] * stack[sIndex];
                stack.pop();
                stack.pop();
                stack.push(solution);
                break;
            }
            case "/": {
                solution = stack[sIndex - 1] / stack[sIndex];
                if (solution < 0) {
                    solution = Math.ceil(solution);
                } else {
                    solution = Math.floor(solution);
                }
                stack.pop();
                stack.pop();
                stack.push(solution);
                break;
            }
            default: {
                stack.push(parseInt(tokens[i]));
            }
        }
    }
    return stack[0];
};
