function strangeCounter(t) {
    let time = 1
    let value = 3
    while (time + value <= t) {
        time += value
        value *= 2
    }
    return (t == time) ? value : value - (t - time)
}


console.log('6: ' + strangeCounter(4))
console.log('11: ' + strangeCounter(11))
console.log('23: ' + strangeCounter(23))
console.log('12: ' + strangeCounter(10))
console.log('9: ' + strangeCounter(13))