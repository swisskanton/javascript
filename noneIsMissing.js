function noneIsMissing(arr) {
    result = true
    for (let i = 1; i <= arr.length; i++) {
        if (arr.indexOf(i) < 0) {
            result = false
            break
        }
    }
    return result
}


console.log('true: ' + noneIsMissing([4,1,3,2]))
console.log('false: ' + noneIsMissing([1,4,2,2]))
console.log('false: ' + noneIsMissing([1,6]))