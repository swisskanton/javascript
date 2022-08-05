// sherlockAndSquares.js
function squares(a, b) {
    let count = 0
    let i = parseInt(Math.sqrt(a))
    let power = 0
    while (power <= b) {
        power = Math.pow(i, 2)
        if (power >= a && power <= b)
            count++
        i++
    }
    return count
}

console.log('2: ' + squares(3, 9))
console.log('0: ' + squares(17, 24))