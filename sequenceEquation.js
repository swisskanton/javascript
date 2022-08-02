function permutationEquation(p) {
    // Write your code here
    let result = []
    for (let i = 0; i < p.length; i++) {
        let index = p.indexOf(i + 1)
        result.push(p.indexOf(index + 1) + 1)
    }
    return result
}

let p = [5, 2, 1, 3, 4]
console.log('[4, 2, 5, 1, 3] :' + permutationEquation(p))
p = [4, 3, 5, 1, 2]
console.log('[1, 3, 5, 4, 2] :' + permutationEquation(p))