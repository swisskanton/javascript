// I used BigInt because factorial can be too long

function pascals_triangle(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            result.push(BigInt(binomial(i, j)))
        }
    }
    return result
}

function binomial(n, k) {
    return BigInt(factor(n) / (factor(k) * factor(n-k)) )
}

function factor(n) {
    factorial = 1n
    for (let i = 1; i < n + 1; i++) {
        factorial *= BigInt(i)
    }
    return factorial
}

console.log(pascals_triangle(1), [1],"1 level triangle incorrect")
console.log(pascals_triangle(2), [1,1,1],"2 level triangle incorrect")
console.log(pascals_triangle(3), [1,1,1,1,2,1],"3 level triangle incorrect")
console.log(pascals_triangle(5), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1],"5 level triangle incorrect")

//console.log(pascals_triangle(60))