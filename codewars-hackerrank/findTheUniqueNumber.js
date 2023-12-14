function find_uniq(arr) {
    let unique = Math.min.apply(null, arr)
    if (unique == arr[0]) {
        if (unique == arr[1]) {
            unique = Math.max.apply(null, arr)
        } else {
            if (unique == arr[2]) {
                unique = Math.max.apply(null, arr)
            }
        }
    } else {
        if (unique == arr[1]) {
            if (unique == arr[2]) {
                unique = Math.max.apply(null, arr)
            }
        } 
    }
    return unique
}

console.log('2: ' + find_uniq([ 1, 1, 1, 2, 1, 1 ]))
console.log('0.55: ' + find_uniq([ 0, 0, 0.55, 0, 0 ]))
console.log('10: ' + find_uniq([ 3, 10, 3, 3, 3 ]))
console.log('1: ' + find_uniq([ 3, 1, 3, 3, 3 ]))
console.log('0: ' + find_uniq([ 0, 1, 1, 1, 1, 1 ]))
