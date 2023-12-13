function countTriples(txt) {
    if (txt.length < 3)
        return 0
    let count = 0
    for (let i = 0; i < txt.length - 2; i++) {
        if (txt[i] == txt[i + 1] && txt[i] == txt[i + 2])
        count++
    }
    return count
}

console.log('2: ' + countTriples("abcXXXaabacaaa"))
console.log('4: ' + countTriples("oohhpppppklllra"))
