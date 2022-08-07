function minimumDistances(a) {
    let dist = Infinity
    for (let i = 0; i < a.length - 1; i++) {
        var index = i
        while (index >= 0) {
            if (index + 1 < a.length) 
                index = a.indexOf(a[i], index + 1)
            else
                index = -1
            if (index > 0) {
                if (dist > index - i)
                    dist = index - i
            }
        }
    }
    if (dist == Infinity)
        dist = -1
    return dist
}


console.log('3: ' + minimumDistances([7, 1, 3, 4, 1, 7]))
console.log('2: ' + minimumDistances([3, 2, 1, 2, 3]))
console.log('-1: ' + minimumDistances([1, 2, 3, 4, 10]))
console.log('1: ' + minimumDistances([1, 1]))