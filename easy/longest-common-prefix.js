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
  for (let i = 0; i < strs.length; i++) {
    let string = strs[i];

    for (let j = 0; j < string.length; j++) {
      char = string.slice(j, j + 1);
      // console.log(char);

      // if (!commonPrefix) {
      //   commonPrefix = char;
      // }

      commonPrefix = commonPrefix + char;
      console.log("common prefix letter : " + commonPrefix[j]);
    }
  }
  // console.log(commonPrefix);
};

console.log("TEST 1");
longestCommonPrefix(["flower", "flow", "flight"]);
// console.log("TEST 2");
// longestCommonPrefix(["dog", "racecar", "car"]);
