function twoSum(numbers: number[], target: number): number[] {
    let i = 0;
    let j = numbers.length - 1
    while (i < numbers.length - 1) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }
        if (numbers[i] + numbers[j] > target) {
            j--;
        }
        else {
            i++;
        }
    }
}
