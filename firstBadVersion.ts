/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let l = 0;
        let m = Math.floor(n / 2);
        let r = n;

        while (l + 1 !== r) {
            if (isBadVersion(m)) {
                r = m;
            } else {
                l = m;
            }
            m = Math.ceil((l + r) / 2);
        }
        return r;
    };
};
