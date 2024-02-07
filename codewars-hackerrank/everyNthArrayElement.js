// https://www.codewars.com/kata/5753b987aeb792508d0010e2

function every(...args){
  if (args.length == 1)
    return args[0]
  let arr = args[0];
  let start = 0;
  let step = args[1];
  if (args.length == 3)
    start = args[2];
  let res = [];
  for (let i = start; i < arr.length; i += step)
    res.push(arr[i]);
  return res;
}

  console.log(every([0,1,2,3,4]) + " [0,1,2,3,4]");
  console.log(every([0,1,2,3,4],1), [0,1,2,3,4]);
  console.log(every([0,1,2,3,4],2), [0,2,4]);
  console.log(every([0,1,2,3,4],3), [0,3]);
  console.log(every([0,1,2,3,4],3,1), [1,4]);