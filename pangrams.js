function pangrams(s) {
    let letters = []
    for (let i = 0; i < s.length; i++) {
        if (s[i].search(/[a-zA-Z]/) >= 0 && letters.indexOf(s[i].toLowerCase()) < 0)
            letters.push(s[i].toLowerCase())
    }
    return letters.length == 26 ? 'pangram' : 'not pangram'
}

let s = 'We promptly judged antique ivory buckles for the next prize'
console.log('pangram: ' + pangrams(s))
s = 'We promptly judged antique ivory buckles for the prize'
console.log('not pangram: ' + pangrams(s))