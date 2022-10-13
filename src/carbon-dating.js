const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  if (typeof str !== 'string'){
    return false;
  }
let activityNow = Number(str);
if(isNaN(activityNow) || activityNow <= 0 || activityNow >= 15.1){
  return false;
}
 let years;
 years = Math.log(MODERN_ACTIVITY/activityNow)/(Math.LN2/HALF_LIFE_PERIOD);
 return Math.ceil(years);
}

module.exports = {
  dateSample
};
