function twoStrings(s1, s2) {
    // Write your code here
    const letters1 = makeSetfromString(s1)
    const letters2 = makeSetfromString(s2)
    let result = checkSubstring(letters1, letters2)
    if (result)
        return 'YES'
    else
        return 'NO'
}

function makeSetfromString(str) {
    let letters = new Set()
    for (let i = 0; i < str.length; i++) {
        letters.add(str[i])
    }
    return letters
}

function checkSubstring(set1, set2) {
    for(let element of set2.values()) {
        if (set1.has(element)) return true
    }
    return false
}

let s1 = 'hello'
let s2 = 'word'
console.log(twoStrings(s1, s2))
s1 = 'hi'
s2 = 'word'
console.log(twoStrings(s1, s2))