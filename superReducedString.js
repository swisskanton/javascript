function superReducedString(s) {
    // Write your code here
    let i = 1
    while (i < s.length) {
        if (s[i - 1] == s[i]) {
            s = s.replace(s.substr(i - 1, 2), '')
            if (i > 1) i--
        } else {
            i++
        }
    }
    if (s == '') s = 'Empty String'
    return s
}

let s = 'aab'
console.log('b: ' + superReducedString(s))
s = 'abba'
console.log(' : ' + superReducedString(s))
s = 'aa'
console.log(' : ' + superReducedString(s))
s = 'aaabccddd'
console.log('abd: ' + superReducedString(s))