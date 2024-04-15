/**
 * #9 Palindrome Number
 *
 * Given an integer x, return true if x is a palindrome and false otherwise
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const NumbersArray = Array.from(String(x), Number);
  let NumberArrayReverse = [];
  for (let i = 0; i < NumbersArray.length; i++) {
    NumberArrayReverse.unshift(NumbersArray[i]);
  }

  for (let j = 0; j < NumbersArray.length; j++) {
    if (NumbersArray[j] !== NumberArrayReverse[j]) {
      console.log(false);
      return;
    }
  }

  console.log(true);
};

console.log("TEST 1");
isPalindrome(121);
console.log("TEST 2");
isPalindrome(-121);
console.log("TEST 3");
isPalindrome(10);

// SOLUTION
var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") == x;
};
