//bitwiseOperators.js
function getMaxLessThanK(n, k) {
    let maximum = -Infinity
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let bwo = i & j
            if (bwo < k && bwo > maximum)
                maximum = bwo
        }
    }
    return maximum
}

console.log('1: ' + getMaxLessThanK(5, 2))
console.log('4: ' + getMaxLessThanK(8, 5))
console.log('0: ' + getMaxLessThanK(2, 2))
