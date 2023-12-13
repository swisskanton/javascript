function breakingRecords(scores) {
    // Write your code here
    let result = new Array(2).fill(0)
    let highest = scores[0]
    let lowest = scores[0]
    for (let i = 0; i < scores.length; i++) {
        if (highest < scores[i]) {
            result[0]++
            highest = scores[i]
        }
        if (lowest > scores[i]) {
            result[1]++
            lowest = scores[i]
        }
    }
    return result
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log('2 4 :' + breakingRecords(scores))
scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
console.log('4 0 :' + breakingRecords(scores))
