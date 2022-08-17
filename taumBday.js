function taumBday(b, w, bc, wc, z) {
    let sum = 0n
    let bn = BigInt(b)
    let wn = BigInt(w)
    let bcn = BigInt(bc)
    let wcn = BigInt(wc)
    let zn = BigInt(z)
    if (bcn < wcn) {
        if (bcn + zn < wcn)
            sum = BigInt(bn * bcn + wn * (bcn + zn))
        else
            sum = BigInt(bn * bcn + wn * wcn)
    } else {
        if (wcn + zn < bcn)
            sum = BigInt(wn * wcn + bn * (wcn + zn))
        else
            sum = BigInt(bn * bcn + wn * wcn)
    }
    return sum.toString()
}


console.log('29: ' + taumBday(3, 5, 3, 4, 1))
console.log('20: ' + taumBday(10, 10, 1, 1, 1))
console.log('37: ' + taumBday(5, 9, 2, 3, 4))
console.log('12: ' + taumBday(3, 6, 9, 1, 1))
console.log('35: ' + taumBday(7, 7, 4, 2, 1))
console.log('12: ' + taumBday(3, 3, 1, 9, 2))
console.log('617318315833461267: \n' + taumBday(742407782, 90529439, 847666641, 8651519, 821801924))
console.log('1306346564995590229: \n' + taumBday(736418699, 754161925, 912285746, 841360803, 736841333))