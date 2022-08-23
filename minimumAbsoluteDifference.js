function minimumAbsoluteDifference(arr) {
    let min = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let diff = Math.abs(arr[i] - arr[j])
            if (diff < min)
                min = diff
        }
    }
    return min
}

console.log('3: ' + minimumAbsoluteDifference([3, -7, 0]))
console.log('1: ' + minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
console.log('3: ' + minimumAbsoluteDifference([1, -3, 71, 68, 17]))