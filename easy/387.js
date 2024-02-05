/**
 * @param {string} s
 * @return {number}
 */
const firstUniqCar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let isUnique = true;
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[j] === s[i]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
};

firstUniqCar("leetcode");
console.log("===================");
firstUniqCar("loveleetcode");
console.log("===================");
firstUniqCar("aabb");
