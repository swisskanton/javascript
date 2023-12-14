// fractionToPeriodicDecimal.js
function fraction(n, d) {
    let result = '';
    let rest = [];
    result += parseInt(n / d).toString();
    let modulo = n % d;
    while (modulo != 0) {
        if (result.indexOf('.') == -1)
            result += '.';
        rest.push(modulo);
        n = 10 * modulo;
        modulo = n % d;
        result += parseInt(n / d).toString();
        if (rest.indexOf(modulo) > -1) {
            result = result.substring(0, result.indexOf('.') + rest.indexOf(modulo) + 1) + '(' + result.substring(result.indexOf('.') + rest.indexOf(modulo) + 1) + ')';
            break;
        }
    }
    return result;
}

console.log(fraction(8, 4), '2');
console.log(fraction(1, 2), '0.5');
console.log(fraction(1, 3), '0.(3)');
console.log(fraction(5, 7), '0.(714285)');
console.log(fraction(123, 65), '1.8(923076)');
console.log(fraction(10, 3), '3.(3)');
console.log(fraction(325310, 86341));
