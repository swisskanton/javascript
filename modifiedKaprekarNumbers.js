function kaprekarNumbers(p, q) {
    let result = []
    for (let i = p; i <= q; i++) {
        let len = (i + '').length
        let str = i ** 2 + ''
        if (str.length == 2 * len || str.length == 2 * len - 1) {
            let rightSide = str.slice(-len) * 1
            let leftSide = str.slice(0, -len) * 1
            if (leftSide + rightSide == i)
                result.push(i)
        }    
    }
    return result.length == 0 ? "INVALID RANGE" : result.join(' ')
}

console.log('1 9 45 55 99: ' + kaprekarNumbers(1, 100))
console.log('INVALID RANGE: ' + kaprekarNumbers(10, 40))