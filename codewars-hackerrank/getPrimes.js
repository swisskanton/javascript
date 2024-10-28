function isPrime(number) {
    if (number == 2 || number == 3) return true
    if (number < 2 || number % 2 == 0) return false
    for (let i = 3; i < number ** 0.5 + 1; i++)
      if (number % i == 0) return false
    return true
}

function getPrimes(start, finish) {
    const [s, f, result] = [Math.min(start, finish), Math.max(finish, start), []]
    for (let i = s; i < f + 1; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result
}

console.log(isPrime(0) == false);
console.log(isPrime(1) == false);
console.log(isPrime(2) == true);
console.log(isPrime(3) == true);
console.log(isPrime(4) == false);
console.log(isPrime(5) == true);
console.log(getPrimes(0, 0).join() == '');
console.log(getPrimes(0, 30).join() == '2,3,5,7,11,13,17,19,23,29');
console.log(getPrimes(30, 0).join() == '2,3,5,7,11,13,17,19,23,29');
