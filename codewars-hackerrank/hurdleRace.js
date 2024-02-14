function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max.apply(null, height)
    if (max - k < 0) return 0
    return max - k
}

let k = 4
let height = [1, 6, 3, 5, 2]
console.log('2: ' + hurdleRace(k, height))
k = 7
height = [2, 5, 4, 5, 2]
console.log('0: ' + hurdleRace(k, height))
k = 1
height = [1, 2, 3, 3, 2]
console.log('2: ' + hurdleRace(k, height))
