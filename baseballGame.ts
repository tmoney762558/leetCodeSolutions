function calPoints(operations: string[]): number {
    const record: number[] = [];
    let sum: number = 0;
    for (let i = 0; i < operations.length; i++) {
        const recordLength = record.length;
        switch (operations[i]) {
            case "+": {
                sum += record[recordLength - 2] + record[recordLength - 1];
                record.push(record[recordLength - 2] + record[recordLength - 1]);
                break;
            }
            case "D": {
                sum += record[recordLength - 1] * 2;
                record.push(record[recordLength - 1] * 2)
                break;
            }
            case "C": {
                sum -= record[recordLength - 1];
                record.pop();
                break;
            }
            default: {
                sum += parseInt(operations[i]);
                record.push(parseInt(operations[i]));
                break;
            }
        }
    }
    return sum;
};
