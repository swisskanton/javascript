function marcsCakewalk(calorie) {
    calorie.sort(function(a, b){return b - a})
    let result = 0
    for (let i = 0; i < calorie.length; i++) {
        result += Math.pow(2, i) * calorie[i]
    }
    return result
}

console.log('44: ' + marcsCakewalk([5, 10, 7]))
console.log('11: ' + marcsCakewalk([1, 3, 2]))
console.log('79: ' + marcsCakewalk([7, 4, 9, 6]))