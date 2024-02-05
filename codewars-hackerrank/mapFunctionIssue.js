// https://www.codewars.com/kata/560fbc2d636966b21e00009e

let func = item => parseInt(item) % 2 == 0;
// let func = item => (item & 1) == 0;
  
function map(arr, somefunction){
    if (typeof somefunction != 'function') return "given argument is not a function";
    if (!arr.every(item => item == parseInt(item))) return "array should contain only numbers";
    return arr.map(somefunction);  
}


console.log(map([27, 18, 5,'8', '66'], func) + " >> [ false, true, false, true, true ]");
console.log(map([48, 33, 2, 1],'str') + " >> given argument is not a function");
console.log(map([8, 12, 't'], func) + " >> array should contain only numbers");