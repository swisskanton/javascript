function sumXor(n) {
    return n == 0 ? 1 : 2 ** n.toString(2).replaceAll('1', '').length
}

console.log('5 -> 2: ' + sumXor(5))
console.log('4 -> 4: ' + sumXor(4))
console.log('10 -> 4: ' + sumXor(10))
console.log('0 -> 1: ' + sumXor(0))