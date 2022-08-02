function pig_it(text) {
    result = []
    let words = text.split(" ")
    for (x of words) {
        //console.log(x)
        if (x.length == 1 && x.match(/['".,?!:;]/)) {
            result.push(x)
        } else {
            result.push(x.substr(1) + x.substr(0, 1) + 'ay')
        }
    }
    return result.join(' ')
}

console.log(pig_it('Pig latin is cool'))
console.log(pig_it('This is my string'))
console.log(pig_it("Thoms' bike, car and my toy"))
console.log(pig_it(' This. '))
console.log(pig_it('Big D'))

console.log(pig_it("You should 'pig' "))
console.log(pig_it('O tempora o mores !'))
console.log(pig_it('Quis custodiet ipsos custodes ?'))