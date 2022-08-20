function runningTime(arr) {
    let result = 0
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
            result++
        }
        arr[j + 1] = temp
    }
    return result
}

console.log('4: ' + runningTime([2, 1, 3, 1, 2]))