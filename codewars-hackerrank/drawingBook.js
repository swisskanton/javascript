function pageCount(n, p) {
    // Write your code here
    if (parseInt(p / 2) <= parseInt((n - p) / 2))
        return parseInt(p / 2)
    else
        if (n % 2 == 0)
            return parseInt((n - p + 1) / 2)
        else
            return parseInt((n - p) / 2)
}

let n = 6
let p = 4
console.log('1 - 1: ' + pageCount(n, p))
n = 6
p = 3
console.log('2 - 1: ' + pageCount(n, p))
n = 6
p = 5
console.log('3 - 1: ' + pageCount(n, p))
n = 2
p = 1
console.log('4 - 0: ' + pageCount(n, p))
n = 5
p = 4
console.log('5 - 0: ' + pageCount(n, p))
