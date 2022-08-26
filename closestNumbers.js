function closestNumbers(arr) {
    arr.sort(function(a, b) {return a - b})
    let result = []
    result = arr.slice(0, 2)
    for (let i = 1; i < arr.length - 1; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) == Math.abs(result[1] - result[0])) {
            result.push(arr[i])
            result.push(arr[i + 1])
        } else if (Math.abs(arr[i + 1] - arr[i]) < Math.abs(result[1] - result[0])) {
            result = []
            result.push(arr[i])
            result.push(arr[i + 1])
        }
    }
    return result
}

console.log('[1,2,2,3,3,4,4,5]' + closestNumbers([5,4,3,2,1]))
console.log('[-20,30]' + closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]))
console.log('[-520, -470, -20, 30]' + closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]))