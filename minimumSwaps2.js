function minimumSwaps(arr) {
    
    var countSwap = 0
    for (let i = 0; i < arr.length; i++) {
        while (i + 1 != arr[i]) {
            var temp = arr[i]
            var pos = arr[i] - 1
            arr[i] = arr[pos]
            arr[pos] = temp
            countSwap++
        }
    }
    return countSwap
}

arr = [4, 3, 1, 2]
console.log(minimumSwaps(arr))
arr = [2, 3, 4, 1, 5]
console.log(minimumSwaps(arr))
arr = [1, 3, 5, 2, 4, 6, 7]
console.log(minimumSwaps(arr))
arr = [1, 4, 3, 2]
console.log(minimumSwaps(arr))