/**
 * #238 Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let answers = [];
  for (let i = 0; i < nums.length; i++) {
    let arrayProduct = [];
    let product;

    for (let j = i; j < nums.length; j++) {
      if (j !== i) {
        arrayProduct.push(nums[j]);
      }

      if (j === nums.length - 1) {
        j = -1;
      }

      if (j === i - 1) {
        break;
      }
    }

    for (let y = 0; y < arrayProduct.length; y++) {
      if (arrayProduct[y] === 0) {
        product = 0;
        break;
      }

      if (!product) {
        product = arrayProduct[y];
      } else {
        product = product * arrayProduct[y];
      }
    }
    answers.push(product);
  }
  console.log(answers);
};

console.log("TEST 1");
productExceptSelf([1, 2, 3, 4]);
console.log("TEST 2");
productExceptSelf([-1, 1, 0, -3, 3]);

// SOLUTION
var productExceptSelf = function (nums) {
  const n = nums.length;
  const leftProducts = new Array(n);
  const rightProducts = new Array(n);
  const result = new Array(n);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    leftProducts[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    rightProducts[i] = rightProduct;
    rightProduct *= nums[i];
  }

  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};
