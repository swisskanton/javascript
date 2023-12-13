function anagram(s) {
    let result
    if (s.length % 2 == 0) {
        let first = s.substr(0, parseInt(s.length / 2))
        let second = s.substr(parseInt(s.length / 2), parseInt(s.length / 2))
        for (let i = 0; i < first.length; i++) {
            if (second.includes(first[i])) {
                if (second.indexOf(first[i]) < first.length - 1)
                    second = second.substring(0, second.indexOf(first[i])) + second.substring(second.indexOf(first[i]) + 1)
                else
                    second = second.substring(0, second.indexOf(first[i]))
            }
        }
        result = second.length
    } else
        result = -1
    return result

}

console.log('3 > ' + anagram('aaabbb'))
console.log('1 > ' + anagram('ab'))
console.log('-1 > ' + anagram('abc'))
console.log('2 > ' + anagram('mnop'))
console.log('0 > ' + anagram('xyyx'))
console.log('1 > ' + anagram('xaxbbbxx'))
