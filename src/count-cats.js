const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let cat = 0;
  array.forEach(element => {
    element.forEach(el =>{
      if(el == '^^'){
        cat = cat + 1;
      }
    })
  });
  return cat;
}

module.exports = {
  countCats
};
