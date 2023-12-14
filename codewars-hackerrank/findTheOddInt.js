function find_it(seq) {
    let result = []
    for (let i = 0; i < seq.length; i++) {
        if (result.indexOf(seq[i]) < 0)
            result.push(seq[i])
        else
            result.splice(result.indexOf(seq[i]), 1)   
    }
    return result[0]
}

console.log(7, find_it([7]))
console.log(0, find_it([0]))
console.log(2, find_it([1, 1, 2]))
console.log(0, find_it([0, 1, 0, 1, 0]))
console.log(4, find_it([1,2,2,3,3,3,4,3,3,3,2,2,1]))
