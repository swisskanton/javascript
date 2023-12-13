function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0)
                result++
        }
    }
    return result
}

let k = 3
let ar = [1, 3, 2, 6, 1, 2]
console.log('5 : ' + divisibleSumPairs(ar.length, k, ar))
