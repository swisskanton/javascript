function hackerrankInString(s) {
    const hacker = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k']
    let index = 0
    for (let i = 0; i < s.length; i++) {
        if (hacker[index] == s.substr(i, 1)) {
            index++
        }
        if (index == 10)
            break
    }
    return index == 10 ? 'YES' : 'NO'
}


console.log('Yes: ' + hackerrankInString('haacckkerrannkk'))
console.log('No: ' + hackerrankInString('haacckkerannkk'))
console.log('No: ' + hackerrankInString('hccaakkerrannkk'))
console.log('Yes: ' + hackerrankInString('hereiamstackerrank'))
console.log('No: ' + hackerrankInString('hackerworld'))
console.log('Yes: ' + hackerrankInString('hhaacckkekraraannk'))
console.log('No: ' + hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'))