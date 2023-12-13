function circularArrayRotation(a, k, queries) {
    // Write your code here
    let len = a.length
    let start = len - (k % len)
    let result = []
    for (let i = 0; i < queries.length; i++) {
        result.push(a[(queries[i] + start) % len]);
    }
    return result
}

let a = [3, 4, 5]
let k = 2
let queries = [1, 2]
console.log('5, 3: ' + circularArrayRotation(a, k, queries))
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
k = 12
//queries = [1, 2]
console.log('5, 3: ' + circularArrayRotation(a, k, queries))
