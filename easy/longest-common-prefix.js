/**
 * #14 Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let lastCharCommonPrefix = commonPrefix.slice(
    commonPrefix.length - 1,
    commonPrefix.length
  );
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; strs[i].slice(j, j + 1) !== lastCharCommonPrefix; j++) {
      let char = strs[i].slice(j, j + 1);
      commonPrefix = commonPrefix + char;
      console.log(char);
    }
    console.log("Tour : ", i);
  }
  console.log(commonPrefix);
};

console.log("TEST 1");
longestCommonPrefix(["flower", "flow", "flight"]);
// console.log("TEST 2");
// longestCommonPrefix(["dog", "racecar", "car"]);
