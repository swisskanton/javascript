function viralAdvertising(n) {
    let sum = 5
    let likes = 0
    for (let i = 0; i < n; i++) {
        likes += parseInt(sum / 2)
        sum = parseInt(sum / 2) * 3
    }
    return likes
}

let n = 5
console.log(viralAdvertising(n))