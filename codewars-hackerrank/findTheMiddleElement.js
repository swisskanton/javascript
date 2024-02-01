/**
 * Returns the index of the middle value from three integers;
 * [2, 3, 1] => 0
 * @param {*} arr triplet of integers
 * @returns index of middle value
 */
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(arr) {
    return arr.indexOf([...arr].sort((a, b) => a - b)[1])
}


console.log(gimme([2, 3, 1]) + " => 0");
console.log(gimme([5, 10, 14]) + " => 1");