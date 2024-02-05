/**
 * @param {string} s
 * @return {number}
 */
const firstUniqCar = function (s) {
  for (let i = 0; i < s.length; i++) {
    console.log("TOUR : " + i);
    console.log("i : " + s[i]);

    for (let j = i + 1; j <= s.length - 1; j++) {
      console.log("j : " + s[j]);

      if (s[j] === s[i]) {
        break;
      }
    }

    console.log("------------");
  }
};

firstUniqCar("leetcode");
// console.log("===================");
// firstUniqCar("loveleetcode");
// console.log("===================");
// firstUniqCar("aabb");
