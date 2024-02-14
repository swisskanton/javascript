// halloweenSale.js
function howManyGames(p, d, m, s) {
    let numberOfGames = 0
    while (s > 0 && s >= p) {
        numberOfGames++
        s -= p
        p -= d
        if (p < m)
            p = m
    }
    return numberOfGames
}

console.log('6: ' + howManyGames(20, 3, 6, 80))
console.log('7: ' + howManyGames(20, 3, 6, 85))
console.log('5: ' + howManyGames(20, 3, 6, 70))
