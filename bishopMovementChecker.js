// bishopMovementChecker.js
function bishop (start_pos, end_pos, num_moves) {
    let result = false
    if (num_moves == 0 && start_pos == end_pos)
        result = true
    if (num_moves > 1)
        if (((start_pos.charCodeAt(0) - 96 + parseInt(start_pos[1])) % 2) == ((end_pos.charCodeAt(0) - 96 + parseInt(end_pos[1])) % 2))
            result = true
    if (num_moves == 1)
        if (Math.abs(start_pos.charCodeAt(0) - end_pos.charCodeAt(0)) == Math.abs(parseInt(start_pos[1]) - parseInt(end_pos[1])))
            result = true
    return result
}

console.log(bishop("a1", "b4", 2), 'True')
console.log(bishop("a1", "b5", 5), 'False')
console.log(bishop("f1", "f1", 0), 'True')
console.log(bishop("e6", "a1", 2), 'False')
console.log(bishop("e3", "b4", 1), 'False')
console.log(bishop("e3", "b6", 1), 'True')