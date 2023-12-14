function fairRations(B) {
    let numOfEven = 0
    let dist = 0
    let check = -1
    for (let i = 0; i < B.length; i++)   {
        if (B[i] % 2 == 1) {
            check *= -1
            numOfEven++
        }
        if (check == 1)
            dist++
    }
    if (numOfEven % 2 == 0)
        return 2 * dist
    else
        return 'NO'
}

console.log('4: ' + fairRations([4, 5, 6, 7]))
console.log('4: ' + fairRations([2, 3, 4, 5, 6]))
console.log('No: ' + fairRations([1,2]))
