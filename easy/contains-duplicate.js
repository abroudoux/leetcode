/**
 * #217 Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return true;
    }
  }
  return false;
};

console.log("TEST 1");
containsDuplicate([1, 2, 3, 1]); // expect true
console.log("TEST 2");
containsDuplicate([1, 2, 3, 4]); // expect false
console.log("TEST 3");
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // expect true
