function chocolateFeast(n, c, m) {
    let result = parseInt(n / c)
    let rest = result
    while (rest >= m) {
        result += parseInt(rest / m)
        rest = parseInt(rest / m) + rest % m
    }
    return result
}


console.log('9 > ' + chocolateFeast(15, 3, 2))
console.log('6 > ' + chocolateFeast(10, 2, 5))
console.log('3 > ' + chocolateFeast(12, 4, 4))
console.log('5 > ' + chocolateFeast(6, 2, 2))
console.log('3 > ' + chocolateFeast(7, 3, 2))