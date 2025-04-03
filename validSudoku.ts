function isValidSudoku(board: string[][]): boolean {

    const map = new Map();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const match = map.get(board[i][j]);
            if (match) {
                for (let k = 0; k < match.length; k += 2) {
                    if (match[k] === i || match[k + 1] === j || Math.floor(match[k] / 3) === Math.floor(i / 3) && Math.floor(match[k + 1] / 3) === Math.floor(j / 3)) {
                        return false;
                    }
                }
            }

            if (board[i][j] !== ".") {
                const existingCoords = map.get(board[i][j]);
                if (existingCoords) {
                    map.set(board[i][j], [...existingCoords, i, j]);
                }
                else {
                    map.set(board[i][j], [i, j]);
                }
            }
        }
    }
    return true;
};
