const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1 = `${str}`;
  if( typeof options == 'undefined'){
    return str1;
  }
  
  
  if(options.hasOwnProperty('addition')){
    let addition1 = `${options['addition']}`;
    
    if(options.hasOwnProperty('additionRepeatTimes') && options.hasOwnProperty('additionSeparator')){
      let addition2 = ((addition1 + options['additionSeparator']).repeat((options['additionRepeatTimes'])-1)) + addition1;
      str1 += addition2;
    }else if(options.hasOwnProperty('additionRepeatTimes') && !options.hasOwnProperty('additionSeparator')){
      let addition3 = ((addition1 + '|').repeat(options['additionRepeatTimes'] - 1)) + addition1;
      str1 += addition3 ;
    }else{
      str1 += addition1;
    }
    }

    if(options.hasOwnProperty('separator') && options.hasOwnProperty('repeatTimes')){
      return ((str1 + options['separator']).repeat(options['repeatTimes']-1)) + str1;
    }else if(options.hasOwnProperty('separator') && !options.hasOwnProperty('repeatTimes')){
      return str1;
    }
    if(options.hasOwnProperty('repeatTimes')){
      return ((str1 + '+').repeat(options['repeatTimes']-1)) + str1;
    }
 
  
}

module.exports = {
  repeater
};
