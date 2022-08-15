function caesarCipher(s, k) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let msg = ''
    for (let i = 0; i < s.length; i++) {
        let index = letters.indexOf(s.substr(i,1).toLowerCase())
        if (index >= 0) {
            if (s.charCodeAt(i) < 97) {
                msg += letters.substr((index + k) % 26,1).toUpperCase()
            }
            else
                msg += letters.charAt((index + k) % 26)
        } else 
            msg += s.substr(i,1)
    }
    return msg
}

console.log('defghijklmnopqrstuvwxyzabc: \n' + caesarCipher('abcdefghijklmnopqrstuvwxyz', 3))
console.log('okffng-Qwvb: \n' + caesarCipher('middle-Outz', 2))