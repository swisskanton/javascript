function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    printNumberOfFruits(s, t, a, apples)
    printNumberOfFruits(s, t, b, oranges)
}

function printNumberOfFruits(from, to, tree, fruits) {
    let count = 0
    for (let i = 0; i < fruits.length; i++) {
        if (from <= fruits[i] + tree && fruits[i] + tree <= to)
            count ++
    }
    console.log(count)
}

let s =  7
let t = 10
let a = 4
let b = 12
let apples = [2, 3, -4]
let oranges = [3, -2, -4]
countApplesAndOranges(s, t, a, b, apples, oranges)
s =  7
t = 11
a = 5
b = 15
apples = [-2, 2, 1]
oranges = [5, -6]
countApplesAndOranges(s, t, a, b, apples, oranges)
