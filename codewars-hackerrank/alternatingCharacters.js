function alternatingCharacters(s) {
    // Write your code here
    let numberOfDeletions = deleteDoubles(s, 'AA')
    numberOfDeletions += deleteDoubles(s, 'BB')
    return numberOfDeletions
}

function deleteDoubles(sub, letters) {
    let count = 0
    let index = sub.indexOf(letters)
    while (index > -1) {
        sub = sub.substr(index + 1)
        //s = s.replace(letters, letters.substring(1))
        count++
        index = sub.indexOf(letters)
    }
    return count
}

s = 'AAAA'
console.log(alternatingCharacters(s))
s = 'BBBBB'
console.log(alternatingCharacters(s))
s = 'ABABABAB'
console.log(alternatingCharacters(s))
s = 'BABABA'
console.log(alternatingCharacters(s))
s = 'AAABBB'
console.log(alternatingCharacters(s))
