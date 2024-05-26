// https://www.codewars.com/kata/6630da20f925eb3007c5a498/

function blowCandles(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0')
            continue
        else {
            let newStr = '0'.repeat(i + 1)
            count += +str[i]
            newStr += (i + 1 < str.length) ? Math.max(+str[i + 1] - +str[i], 0) : ''
            newStr += (i + 2 < str.length) ? Math.max(+str[i + 2] - +str[i], 0) : ''
            newStr += str.substring(i + 3)
            str = newStr
        }
    }
    return count
}

  
console.log(blowCandles("1321"), 3)
console.log(blowCandles("0323456"), 9)
console.log(blowCandles("2113"), 5)
console.log(blowCandles("1110"), 1)
console.log(blowCandles("121"), 2)