function maximizingXor(l, r) {
    let max = l ^ r
    for (let i = l; i < r; i++) {
        for (let j = i + 1; j <= r; j++) {
            if (max < (i ^ j))
                max = i ^ j
        }
    }
    return max
}

console.log('7: ' + maximizingXor(11, 12))
console.log('7: ' + maximizingXor(10, 15))
console.log('127: ' + maximizingXor(11, 100))