function quickSort(arr) {
    let result = []
    result.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            result.push(arr[i])
        } else if (arr[i] < arr[0]) {
            result.unshift(arr[i])
        } else {
            result.splice(i, 0, arr[i])
        }
    }
    return result
}

console.log('3 2 4 5 7: ' + quickSort([4, 5, 3, 7, 2]))