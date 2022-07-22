function camelcase(s) {
    // Write your code here
    let result = 0
    let i = 0
    while (i >=0) {
        i = s.search(/[ABCDEFGHIJKLMNOPQRSTUWVXYZ]/)
        result++
        s = s.replace(s.substr(i,1), s.substr(i,1).toLowerCase())
    }
    return result
}

let s = 'oneTwoThree'
console.log(camelcase(s))
s = 'saveChangesInTheEditor'
console.log(camelcase(s))