function beautifulDays(i, j, k) {
    let count = 0
    for (let index = i; index < j + 1; index++) {
        let str = index + ''
        let pos = str.length - 1
        let newValue = ''
        while (pos >= 0) {
            newValue += str[pos]
            pos--
        }
        newValue = parseInt(newValue)
        if (!(Math.abs(index - newValue) % k)) 
            count++
    }
    return count
}

let i = 20
let j = 23
let k = 6
console.log('2: ' + beautifulDays(i, j, k))
