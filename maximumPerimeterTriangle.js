function maximumPerimeterTriangle(sticks) {
    sticks.sort(function(a,b) {return (b - a)})
    let i = 0
    let result = []
    while (i < sticks.length - 2) {
        if (sticks[i] < sticks[i + 1] + sticks[i + 2]){
            result.push(sticks[i + 2])
            result.push(sticks[i + 1])
            result.push(sticks[i])
            break
        }
        i++
    }
    return (result.length > 0) ? result : [-1]
}

console.log('3, 4, 5: ' + maximumPerimeterTriangle([1,2,3,4,5,10]))
console.log('1, 3, 3: ' + maximumPerimeterTriangle([1,1,1,3,3]))
console.log('-1: ' + maximumPerimeterTriangle([1,2,3]))
console.log('1, 1, 1: ' + maximumPerimeterTriangle([1,1,1,2,3,5]))