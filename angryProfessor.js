function angryProfessor(k, a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) count++
    }
    console.log(count)
    return count < k ? 'YES' : 'NO'

}

let k = 3
let a = [-2, -1, 0, 1, 2]
console.log('No:' + angryProfessor(k, a))
k = 3
a = [-1, -3, 4, 2]
console.log('Yes:' + angryProfessor(k, a))
k = 2
a = [0, -1, 2, 1]
console.log('No:' + angryProfessor(k, a))