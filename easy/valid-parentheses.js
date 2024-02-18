/**
 * #20 Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1) Open brackets must be closed by the same type of brackets.
 * 2) Open brackets must be closed in the correct order.
 * 3) Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let ponctuations = [{ "(": ")" }, { "{": "}" }, { "[": "]" }];

  console.log(ponctuations.length);

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // console.log(char);
  }
};

console.log("TEST 1");
isValid("()");
console.log("TEST 2");
isValid("()[]{}");
console.log("TEST 3");
isValid("(]");

// SOLUTION
