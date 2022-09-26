function gameOfThrones(s) {
    let letters = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in letters) {
            letters[s[i]]++
        } else {
            letters[s[i]] = 1
        }
    }
    let countOdds = 0
    for (let i in letters) {
        if (letters[i] % 2 != 0)
            countOdds++
    }
    return (countOdds > 1) ? 'NO' : 'YES'
}

console.log('YES > ' + gameOfThrones('aabbccdd'))
console.log('YES > ' + gameOfThrones('aaabbbb'))
console.log('NO > ' + gameOfThrones('cdefghmnopqrstuvw'))
console.log('YES > ' + gameOfThrones('cdcdcdcdeeeef'))