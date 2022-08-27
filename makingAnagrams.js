function makingAnagrams(s1, s2) {
    if (s1.length > s2.length)
        [s1, s2] = [s2, s1]
    let count = s1.length + s2.length
    for (let i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1.substr(i, 1)) >= 0) {
            count -=2
            let index = s2.indexOf(s1.substr(i, 1))
            s2 = s2.substring(0, index) + s2.substring(index + 1)
        }
    }
    return count
}

console.log('6: ' + makingAnagrams('abc', 'amnop'))
console.log('4: ' + makingAnagrams('cde', 'abc'))