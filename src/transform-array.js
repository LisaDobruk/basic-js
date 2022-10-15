const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
   }
   if(arr.length == 0){
    return [];
   }
   let arr2 =[];
   for(let i = 0; i < arr.length; ){
    if(arr[i] == '--discard-next'){
      if(i+1>=arr.length){
        arr2 = arr2;
        break
       }
       arr2.push('free');
       i=i+2;
   }
   if(arr[i] == '--discard-prev'){
    if(i==0){
            arr2=arr2;
            i = i + 1;
    }else{
        arr2.pop();
        i = i + 1;
    }
  }
  if(arr[i] == '--double-next'){
    if((i + 1) >= arr.length){
      arr2 = arr2;
      break
    }else{
      arr2.push(arr[i+1]);
      i= i + 1;
    }
  }
  if(arr[i] == '--double-prev'){
    if(i==0){
      arr2=arr2;
      i = i + 1;
}else if(typeof (arr2[arr2.length - 1]) !== 'number'){
  arr2.pop();
  i= i + 1;
}else{
       arr2.push(arr2[arr2.length - 1]);
    i= i + 1;
  }
}
arr2.push(arr[i]);
    i = i + 1;
}

return arr2;
}

module.exports = {
  transform
};
