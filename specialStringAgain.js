//int n: the length of string s
//string s: a string
function substrCount(n, s) {
    let result = n
    if (n > 1) {
        let substrings = getSubStrings(n, s)
        result += numberOfPalindroms(substrings)
    }
    return result
}

function getSubStrings(n, s) {
    let subStr = []
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= n - i; j++) {
            let substring = s.substr(j, i)
            if (substring[0] == substring[substring.length - 1]) 
                subStr.push(substring)
        }
    }
    return subStr
}

function numberOfPalindroms(strings) {
    let count = 0
    for (let i = 0; i < strings.length; i++) {
        let isSimmetric = true
        for (let j = 0; j < parseInt(strings[i].length / 2); j++) {
            if (strings[i][j] != strings[i][strings[i].length - j - 1] || strings[i][j] != strings[i][0] ) {
                isSimmetric = false
                break
            }
        }
        if (isSimmetric) count++
    }
    return count
}

let s = 'mnonopoo'
console.log('12: ' + substrCount(s.length, s))
s = 'asasd'
console.log('7: ' + substrCount(s.length, s))
s = 'abcbaba'
console.log('10: ' + substrCount(s.length, s))
s = 'aaaa'
console.log('10: ' + substrCount(s.length, s))
s = ''
console.log('0: ' + substrCount(s.length, s))
s = 'a'
console.log('1: ' + substrCount(s.length, s))