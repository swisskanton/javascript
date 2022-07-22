// subarrayDivision.js
function birthday(s, d, m) {
    // Write your code here
    let result = 0
    for (let i = 0; i < s.length - m + 1; i++) {
        let sum = 0
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum == d) result++
    }
    return result
}

let s = [1, 2, 1, 3, 2]
let d = 3
let m = 2
console.log(birthday(s, d, m))
s = [1, 1, 1, 1, 1, 1]
d = 3
m = 2
console.log(birthday(s, d, m))
s = [4]
d = 4
m = 1
console.log(birthday(s, d, m))