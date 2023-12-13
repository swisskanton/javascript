function dayOfProgrammer(year) {
    // Write your code here
    let result = '.09.'+year
    if (year < 1918)
        if (year % 4 == 0)
            result = 12 + result
        else
            result = 13 + result
    if (year == 1918)
        result = '26' + result
    if (year > 1918)
        if (year % 4 == 0 && year % 100 != 0 || year % 4 == 0 && year % 400 == 0)
            result = 12 + result
        else
            result = 13 + result
    return result
}

let year = 1984
console.log('12.09.1984 : ' + dayOfProgrammer(year))
year = 2017
console.log('13.09.2017 : ' + dayOfProgrammer(year))
year = 2016
console.log('12.09.2016 : ' + dayOfProgrammer(year))
year = 1800
console.log('12.09.1800 : ' + dayOfProgrammer(year))
