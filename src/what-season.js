const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof date == "undefined"){
    return'Unable to determine the time of year!';
  }
  try{
    date.getTime();
  }catch(error){
    throw new Error('Invalid date!');
  }


  let season;
   
    if(date.getMonth()>=0 && date.getMonth()<2 || date.getMonth() == 11){
    season = 'winter';
  }else if(date.getMonth()>=2 && date.getMonth()<5){
    season = 'spring';
  }else if(date.getMonth()>=5 && date.getMonth()<8){
    season = 'summer';
  }else if(date.getMonth()>=8 && date.getMonth()<11){
    season = 'autumn'
  }
  
  return season;
  
}

module.exports = {
  getSeason
};
