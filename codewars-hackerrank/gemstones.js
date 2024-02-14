function gemstones(arr) {
    // Write your code here
    let shortestIndex = getShortest(arr)
    let letters = getLetters(arr[shortestIndex])
    let result = getNumberOfGemstones(arr, letters)
    return result
}

function getNumberOfGemstones(arr, letters) {
    let counter = 0
    for (let i = 0; i < letters.length; i++) {
        let contains = true
        for (let j = 0; j < arr.length; j++) {
            if (!arr[j].includes(letters[i])) {
                contains = false
                break
            }
        }
        if (contains) counter++
    }
    return counter
}

function getLetters(str) {
    let letters = []
    for (let i = 0; i < str.length; i++) {
        if (!letters.includes(str[i]))
            letters.push(str[i])
    }
    return letters
}

function getShortest(arr) {
    let shortest = Infinity
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (shortest > arr[i].length)
        shortest = arr[i].length
        index = i
    }
    return index
}

let arr = ['abc', 'abc', 'bc']
console.log('2: ' + gemstones(arr))
arr = ['abcdde', 'baccd', 'eeabg']
console.log('2: ' + gemstones(arr))
