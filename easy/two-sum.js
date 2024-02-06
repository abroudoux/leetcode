/**
 * #1 Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log("tour : " + i);
    console.log(nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[j]);
      let totalSum = nums[j] + nums[i];
      if (totalSum === target) {
        let indicesResponses = [i, j];
        console.log("Target : " + indicesResponses);
      }
    }
    console.log("=========");
  }
};

console.log("TEST 1");
twoSum([2, 7, 11, 15], 9);
console.log("TEST 2");
twoSum([3, 2, 4], 6);
console.log("TEST 3");
twoSum([[3, 3], 6]);

// BEST SOLUTION

var twoSum = function (nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in numIndices) {
      return [numIndices[complement], i];
    }
    numIndices[num] = i;
  }
  return null;
};
