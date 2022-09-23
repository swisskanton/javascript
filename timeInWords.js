function timeInWords(h, m) {
    if (m > 30)
        h++
    let hour = getInWord(h)
    let minutes = getInWord(m)
    let result = ''
    if (m <= 30) {
        if (m == 0) 
            result = hour + ' ' + minutes
        else if (m == 1)
            result = minutes + ' minute past ' + hour
        else if (m == 15 || m == 30)
            result = minutes + ' past ' + hour
        else
            result = minutes + ' minutes past ' + hour
    } else {
        if (m == 59)
            result = minutes + ' minute to ' + hour
        else if (m == 45 || m == 30)
            result = minutes + ' to ' + hour
        else
            result = minutes + ' minutes to ' + hour
    }
    return result
}

function getInWord(number) {
    if (number > 30)
        number = 60 - number
    let time = ''
    switch (number) {
        case 0: time = "o' clock"
        break
        case 1: time = 'one'
        break
        case 2: time = 'two'
        break
        case 3: time = 'three'
        break
        case 4: time = 'four'
        break
        case 5: time = 'five'
        break
        case 6: time = 'six'
        break
        case 7: time = 'seven'
        break
        case 8: time = 'eigth'
        break
        case 9: time = 'nine'
        break
        case 10: time = 'ten'
        break
        case 11: time = 'eleven'
        break
        case 12: time = 'twelve'
        break
        case 13: time = 'thirteen'
        break
        case 15: time = 'quarter'
        break
        case 20: time = 'twenty'
        break
        case 30: time = 'half'
        break
        default: if (number < 20) {
                    time = getInWord(number % 10) + 'teen'
                } else {
                    time = 'twenty ' + getInWord(number % 10)
                }
    }
    return time
}

console.log("five o' clock > " + timeInWords(5, 00))
console.log("one minute past five > " + timeInWords(5, 01))
console.log("ten minutes past five > " + timeInWords(5, 10))
console.log("quarter past five > " + timeInWords(5, 15))
console.log("half past five > " + timeInWords(5, 30))
console.log("twenty minutes to six > " + timeInWords(5, 40))
console.log("quarter to six > " + timeInWords(5, 45))
console.log("thirteen to six > " + timeInWords(5, 47))
console.log("twenty eight minutes past five > " + timeInWords(5, 28))
console.log("one minute to six > " + timeInWords(5, 59))
console.log("three o' clock > " + timeInWords(3, 00))