/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let closestNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closestNumber)) {
            closestNumber = nums[i];
        }
        else if (Math.abs(nums[i]) === Math.abs(closestNumber)) {
            closestNumber = nums[i] > closestNumber ? nums[i] : closestNumber;
        }
    }
    return closestNumber;
}
