// rossz
function makeAnagram(a, b) {
    // Write your code here
    var letters = {}
    letters = countLetters(a, 1, letters)
    letters = countLetters(b, -1, letters)
    var sum = getSum(a, b, letters)
    return sum
}

function countLetters(str, add, letters) { 
    for (let i = 0; i < str.length; i++) {
        letters[str[i]] = (letters[str[i]] || 0) + add
    }
    return letters
}

function getSum(a, b, letters) {
    let sum = 0
    for (var i in letters) {
        sum += Math.abs(letters[i])
    }
    return sum
}

let a = 'cde'
let b = 'dcf'
console.log(makeAnagram(a, b))
a = 'cde'
b = 'abc'
console.log(makeAnagram(a, b))
a = 'fcrxzwscanmligyxyvym'
b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
console.log(makeAnagram(a, b))
a = 'showman'
b = 'woman'
console.log(makeAnagram(a, b))