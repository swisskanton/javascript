function findDigits(n) {
    // Write your code here
    let result = 0
    let str = n + ''
    //console.log(typeof str)
    for (let i = 0; i < str.length; i++) {
        //console.log(str[i] + ' : ' + typeof parseInt(str[i]))
        if (n % parseInt(str[i]) == 0)
            result++
    }
    return result
}


let n = 12
console.log('2: ' + findDigits(n))
n = 1012
console.log('3: ' + findDigits(n))
