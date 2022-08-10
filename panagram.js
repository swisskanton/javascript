function panagram(txt) {
    const letters = [] 

    for (let i = 0; i < txt.length; i++) {
        
        let letter = txt[i].toLowerCase()
        if (letters.indexOf(letter) == -1) {
            letters.push(letter)
        }
    }
    let count = 0
    for (let i = 0; i < letters.length; i++) {
        if ('abcdefghijklmnopqrstuvwxyz'.indexOf(letters[i]) > -1) 
            count++
    }
    if (count >= 26)
        return true
    else
        return false
}


console.log(panagram("The quick brown fox jumped over the lazy sleeping dog"))
console.log(panagram("Bawds jog, flick quartz, vex nymphs"))
console.log(panagram("Bawds jog, flick quartz, vex nmphs"))
console.log(panagram("aaaaaaaaaaaaaaaaaaaa aaaaaaa"))