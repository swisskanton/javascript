function compareTriplets(a, b) {
    // Write your code here
    let result = new Array(2).fill(0)
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) 
            result[0]++
         
        if (a[i] < b[i])
            result[1]++
         
    }
    return result
}

let a = [1, 2, 3]
let b = [3, 2, 1]
console.log(compareTriplets(a, b).toString())
a = [5, 6, 7]
b = [3, 6, 10]
console.log(compareTriplets(a, b).toString())
a = [17, 28, 30]
b = [99, 16, 8]
console.log(compareTriplets(a, b).toString())
