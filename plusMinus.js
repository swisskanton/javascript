function plusMinus(arr) {
    // Write your code here
    let numberOfNnegatives = 0
    let numberOfZeros = 0
    arr.sort()
    let i = 0
    while (arr[i] < 1) {
        if (arr[i] < 0)
            numberOfNnegatives++
        else
            numberOfZeros++
        i++
    }
    printValue(arr.length, (arr.length - numberOfNnegatives - numberOfZeros))
    printValue(arr.length, numberOfNnegatives)
    printValue(arr.length, numberOfZeros)
}

function printValue(length, num) {
    if (num == 0)
        console.log(0)
    else
        console.log((num/length).toFixed(6))
}

let arr = [1, 1, 0, -1, -1]
plusMinus(arr)
arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)