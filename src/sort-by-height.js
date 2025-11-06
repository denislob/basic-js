const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = [];
  let index = 0;
  const arrWithoutMinus = arr.filter((num) => num !== -1).sort((a, b) => a - b);  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sortedArr.push(arrWithoutMinus[index]);
      index += 1;
    } else sortedArr.push(-1);        
  }
  return sortedArr;
}

module.exports = {
  sortByHeight
};
