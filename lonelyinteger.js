function lonelyinteger(a) {
    if (a.length == 1)
        return a[0]
    let occurs = []
    let result = a[a.length - 1]
    for (let i = 0; i < a.length - 1; i++) {
        if (occurs.indexOf(a[i]) == -1) {
            if (a.indexOf(a[i], i + 1) > -1)
                occurs.push(a[i])
            else {
                result = a[i]
                break
            }
        }
    }
    return result
}

console.log('4: ' + lonelyinteger([1,2,3,4,3,2,1]))
console.log('1: ' + lonelyinteger([1]))
console.log('2: ' + lonelyinteger([1,1,2]))
console.log('2: ' + lonelyinteger([0,0,1,2,1]))