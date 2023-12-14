function getMoneySpent(keyboards, drives, b) {
    
    let max = -Infinity
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let result = keyboards[i] + drives[j]
            if (result > max && result <= b)
                max = result
        }
    }
    if (max == -Infinity) max = -1
    return max
}

let b = 10
let keyboards = [3, 1]
let drives = [5, 2, 8]
console.log('9: ' + getMoneySpent(keyboards, drives, b))
b = 5
keyboards = [4]
drives = [5]
console.log('-1: ' + getMoneySpent(keyboards, drives, b))
