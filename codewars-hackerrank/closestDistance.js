function closestDistance(arr) {
    if (arr.length < 2)
        return -1
    arr.sort(function(a,b) {return a - b})
    console.log(arr)
    var mins = []
    for (let i = 0; i < arr.length - 1; i++) {
        mins.push(arr[i + 1] - arr[i])
    }
    return Math.min.apply(null, mins)
}

console.log('2: ' + closestDistance([3, 6, 12, 1]))
console.log('1: ' + closestDistance([1, 3, 98, 5, 99]))
console.log('-1: ' + closestDistance([1]))
