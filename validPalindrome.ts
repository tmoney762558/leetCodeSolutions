function isPalindrome(s: string): boolean {
    let l = 0; // Left
    const us = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let r = us.length - 1; // Right

    while (l <= r) {
        if (us[l] === us[r]) {
            l++;
            r--;
        }
        else {
            return false;
        }
    }

    return true;
};
