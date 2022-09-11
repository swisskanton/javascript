function balancedSums(arr) {
    let leftSums = [0]
    let rightSums = [0]
    for (let i = 0; i < arr.length; i++) {
        leftSums.push(leftSums[i] + arr[i])
        rightSums.unshift(rightSums[0] + arr[arr.length - i - 1])
    }
    rightSums.shift(0)
    //leftSums.pop(-1)
    let result = 'NO'
    for (let i = 0; i < arr.length; i++) {
        if (leftSums[i] == rightSums[i]) {
            result = 'YES'
            break
        }
    }
    return result
}

console.log('YES: ' + balancedSums([5, 6, 8, 11]))
console.log('NO:  ' + balancedSums([1, 2, 3]))
console.log('YES: ' + balancedSums([1, 2, 3, 3]))
console.log('YES: ' + balancedSums([1, 1, 4, 1, 1]))
console.log('YES: ' + balancedSums([2, 0, 0, 0]))
console.log('YES: ' + balancedSums([0, 0, 2, 0]))