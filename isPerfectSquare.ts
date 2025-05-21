function isPerfectSquare(num: number): boolean {
    let l = 0;
    let m = Math.floor(num / 2);
    let r = num;

    while (r >= l) {
        if (m * m < num) {
            l = m + 1;
        } else if (m * m > num) {
            r = m - 1;
        }
        else {
            return true;
        }
        m = Math.ceil((r + l) / 2);
    }
    return false;
};
