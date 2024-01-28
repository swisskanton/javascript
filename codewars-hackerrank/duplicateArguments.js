/*
https://www.codewars.com/kata/520d9c27e9940532eb00018e
*/
 solution = (...args) => args.length != new Set(args).size


console.log(solution(1, 2, 3) + " false");
console.log(solution(1, 2, 3, 2) + " true");
console.log(solution('1', '2', '3', '2') + " true");