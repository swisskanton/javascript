function serviceLane(n, width, cases) {
    let result = []
    for (let i = 0; i < cases.length; i++) {
        let min = Infinity
        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            if (min > width[j])
                min = width[j]
        }    
        result.push(min)
    }
    return result
}

let width = [2, 3, 1, 2, 3, 2, 3, 3]
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
console.log('1, 2, 3, 2, 1 > ' + serviceLane(width.length, cases))