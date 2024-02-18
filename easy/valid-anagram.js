/**
 * #242 Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arrayS = s.split("");
  let arrayT = t.split("");

  if (arrayS.length !== arrayT.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (arrayT.includes(arrayS[i])) {
      arrayT.splice(arrayT.indexOf(arrayS[i]), 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log("TEST 1");
isAnagram("anagram", "nagaram");
console.log("TEST 2");
isAnagram("rat", "car");

// SOLUTION
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};
