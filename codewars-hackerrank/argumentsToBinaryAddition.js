/*
Given an array add all the number elements and return the binary equivalent of that sum; 
to make the code bullet proof anything else than a number should be addeded as 0 
since it can't be addeded.

If your language can handle float binaries assume the array 
won't contain float or doubles.

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
*/

function arr2bin(arr){
    let sum = arr.reduce((acc, val) => {
      let num = typeof val === 'number' ? val : 0;
      return acc + num;
    }, 0);
  
    return Number.isNaN(sum) ? 'NaN' : sum.toString(2);
  }


  console.log(arr2bin([1,2]) + " == '11'")
  console.log(arr2bin([1,2,'a']) + " == '11'")
  console.log(arr2bin([]) + " == '0'")