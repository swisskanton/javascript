//betweenTwoSets.js
function getTotalX(a, b) {
    // Write your code here
    let result = betweenNumbers(a, b)
    result = correctNumbersFromArrayB(result, b)
    return result.length
}

function betweenNumbers(a, b){
    let result = []
    let maxOfA = Math.max.apply(null, a)
    let minOfB = Math.min.apply(null, b)
    let i = 1;
    while (maxOfA * i  <= minOfB) {
        let isCorrect = true
        for (let j = 0; j < a.length; j++) {
            if ((maxOfA * i) % a[j] != 0) {
                isCorrect = false
                break
            }        
        }
        if (isCorrect) result.push(maxOfA * i)
        i++
    }
    return result
}

function correctNumbersFromArrayB(numbers, b) {
    let result = []
    let i = 1;
    for (let i = 0; i < numbers.length; i++) {
        let isCorrect = true
        for (let j = 0; j < b.length; j++) {
            if (b[j] % numbers[i] != 0) {
                isCorrect = false
                break
            }        
        }
        if (isCorrect) result.push(numbers[i])
    }
    return result
}

let a = [2, 4]
let b = [16, 32, 96]
console.log('3 : ' + getTotalX(a, b))
a = [2, 6]
b = [24, 36]
console.log('2 : '+ getTotalX(a, b))
