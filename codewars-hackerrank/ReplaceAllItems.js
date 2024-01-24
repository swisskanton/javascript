/*
https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a
*/
function replaceAll(seq, find, replace) {
    return (Array.isArray(seq)) ? seq.map((item) => (item == find) ? replace: item) : seq.replaceAll(find, replace);
}

console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1,2,2], 1, 2), [2,2,2]);
console.log(replaceAll([1, 1, 2], 1, 2), [2, 2, 2]);
console.log(replaceAll([1, 2, 1, 2, 1], 1, 2), [2, 2, 2, 2, 2]);
console.log(replaceAll("Hello World", 'o', '0'), "Hell0 W0rld");