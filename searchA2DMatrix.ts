function searchMatrix(matrix: number[][], target: number): boolean {
    const arrLength = matrix[0].length;
    let totalIndexes =  matrix.length * arrLength;
    let l = 0;
    let m = Math.floor(totalIndexes / 2);
    let r = totalIndexes - 1;

    while (r >= l) {
        const mIndex = Math.floor(m / arrLength);
        const arrIndex = m % arrLength;
        if (matrix[mIndex][arrIndex] < target) {
            l = m + 1;
        } else if (matrix[mIndex][arrIndex] > target) {
            r = m - 1;
        }
        else {
            return true;
        }
        m = Math.ceil((l + r) / 2);
    }
    return false;
};
