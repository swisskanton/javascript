function migratoryBirds(arr) {
    // Write your code here
    let occur = getOccur(arr)
    let maxBirdType = getMinimunKey(occur)
    return maxBirdType
}

function getOccur(arr) {
    let occur = {}
    for (let i = 0; i < arr.length; i++) {
        occur[arr[i]] = (occur[arr[i]] || 1) + 1
    }
    return occur
}

function getMinimunKey(occur) {
    let firstOccur = -Infinity
    let max = -Infinity
    for (var key in occur) {
        if (occur[key] > max) {
            firstOccur = key
            max = occur[key]
        } else if (occur[key] == max) {
            if (firstOccur > key)
            firstOccur = key
        }
    }
    return firstOccur
}

let arr = [1, 1, 2, 2, 3]
console.log('1: ' + migratoryBirds(arr))
arr = [1, 4, 4, 4, 5, 3]
console.log('4: ' + migratoryBirds(arr))
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
console.log('3: ' + migratoryBirds(arr))