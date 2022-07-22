function diagonalDifference(arr) {
    // Write your code here
    var difference = 0
    var arrSize = arr.length - 1
    for (let i = 0; i <= arrSize; i++) {
        difference += arr[i][i] - arr[i][arrSize - i]; 
    }
    return Math.abs(difference)
}

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
console.log(diagonalDifference(arr))
arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
console.log(diagonalDifference(arr))