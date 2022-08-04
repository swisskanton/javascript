function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 - y2 > 0)
        return 10000
    else if (y1 < y2)
        return 0
    if (m1 - m2 > 0)
        return 500 * (m1 - m2)
    else if ( m1 < m2)
        return 0
    if (d1 - d2 > 0)
        return 15 * (d1 - d2)
    return 0
}


let d1 = 14
let m1 = 7
let y1 = 2018
let d2 = 5
let m2 = 7
let y2 = 2018
console.log('135 >' + libraryFine(d1, m1, y1, d2, m2, y2))
d1 = 9, m1 = 6, y1 = 2015
d2 = 6, m2 = 6, y2 = 2015
console.log('45 >' + libraryFine(d1, m1, y1, d2, m2, y2))
d1 = 15, m1 = 7, y1 = 2014
d2 = 1, m2 = 7, y2 = 2015
console.log('45 >' + libraryFine(d1, m1, y1, d2, m2, y2))