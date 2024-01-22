/*
https://www.codewars.com/kata/5a34f087c5e28462d9000082
*/

function swapHeadAndTail(arr) {
    let i = arr.length / 2;
    return [...arr.slice(-i), ...arr.slice(i, -i), ...arr.slice(0, i)]
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
