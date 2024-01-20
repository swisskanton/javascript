// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
    /*
    if (n < 0) return -reverseNumber(-n);
    return parseInt(n.toString().split("").reverse().join(""));
    */
   return (n < 0 ? -1 : 1) * parseInt(Math.abs(n).toString().split("").reverse().join(""));
}

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321)
console.log(reverseNumber(1000), 1)
console.log(reverseNumber(-1000), -1)