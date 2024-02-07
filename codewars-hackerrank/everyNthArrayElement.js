// https://www.codewars.com/kata/5753b987aeb792508d0010e2

function every(...args){
  let res = [];
  for (let i = args[2] || 0; i < args[0].length; i += args[1] || 1)
    res.push(args[0][i]);
  return res;
}

  console.log(every([0,1,2,3,4]) + " [0,1,2,3,4]");
  console.log(every([0,1,2,3,4],1), [0,1,2,3,4]);
  console.log(every([0,1,2,3,4],2), [0,2,4]);
  console.log(every([0,1,2,3,4],3), [0,3]);
  console.log(every([0,1,2,3,4],3,1), [1,4]);