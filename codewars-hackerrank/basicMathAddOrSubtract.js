/*
https://www.codewars.com/kata/5809b62808ad92e31b000031
*/

function calculate(str) {
    return eval(str.replace(/plus/g,"+").replace(/minus/g,"-"));
}

console.log(calculate("1plus2plus3plus4"), '10')
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');
