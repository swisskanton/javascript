function alternate(s) {
    let letters = []
    for (let i = 0; i < s.length; i++) {
        if (letters.indexOf(s[i]) == -1)
            letters.push(s[i])
    }
    
    let result = 0
    for (let i = 0; i < letters.length - 1; i++) {
        for (let j = i + 1; j < letters.length; j++) {
            let a = letters[i]
            let b = letters[j]
            let maxLength = 0
            let lastChar = ''
            for (let i = 0; i < s.length; i++) {
                if (s[i] == a)
                    if (lastChar == b || lastChar == "") {
                        lastChar = a
                        maxLength++
                    } else if (lastChar == a) {
                        maxLength = 0
                        break
                    }
                if (s[i] == b)
                    if (lastChar == a || lastChar == "") {
                        lastChar = b
                        maxLength++
                    } else if (lastChar == b){
                        maxLength = 0
                        break
                    }
            }
            if (result < maxLength)
                result = maxLength
        }
    }
    return result
}

console.log('4 > ' + alternate('abaacdabd'))
console.log('5 > ' + alternate('beabeefeab'))
console.log('0 > ' + alternate('asvkugfiugsalddlasguifgukvsa'))