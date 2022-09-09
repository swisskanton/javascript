function findMedian(arr) {
    arr.sort(function(a, b) { return a - b})
    return arr[parseInt((arr.length - 1) / 2)]
}

console.log('3: ' + findMedian([5, 3, 1, 2, 4]))
console.log('3: ' + findMedian([0, 1, 2, 4, 6, 5, 3]))