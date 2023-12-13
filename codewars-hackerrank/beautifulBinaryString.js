function beautifulBinaryString(b) {
    let count = 0
    while (b.indexOf('010') > -1) {
        count ++
        if (b.indexOf('010') == 0) {
            b = '011' + b.slice(3, b.length)
            //count ++
        } else if (b.indexOf('010') == b.length - 3) {
            b = b.slice(0, -4) + '110'
            //count ++
        } else {
            b = b.slice(0, b.indexOf('010') - 1) + ' 011' + b.slice(b.indexOf('010') + 3)
            //count ++
        }
        //console.log(count, b)
    }
    return count
}

console.log('2 : ' + beautifulBinaryString('0101010'))
console.log('0 : ' + beautifulBinaryString('01100'))
console.log('3 : ' + beautifulBinaryString('0100101010'))
console.log('0 : ' + beautifulBinaryString('0000'))
console.log('0 : ' + beautifulBinaryString('0000'))
console.log('10 : ' + beautifulBinaryString('0100101010100010110100100110110100011100111110101001011001110111110000101011011111011001111100011101'))
console.log('7 : ' + beautifulBinaryString('1110011110001100010100000011011101100001101010001111101101000010111111001110110000010110010011100010'))
console.log('6 : ' + beautifulBinaryString('10110101101010001111011100100001010001111010110000111100110110111110011011000111100010011100111'))
