function shifted_diff(first, second) {
    if (first.length != second.length) return -1
    if (first === second) return 0
    for (let i = 0; i < first.length; i++) {
        first = first.substr(1) + first.substr(0, 1)
        if (first == second)
            return first.length - i - 1
    }
    return -1
}

console.log(shifted_diff("eecoff","coffee"), 4)
console.log(shifted_diff("Moose","moose"), -1)
console.log(shifted_diff("isn't","'tisn"), 2)
console.log(shifted_diff("Esham","Esham"), 0)
console.log(shifted_diff(" "," "), 0)
console.log(shifted_diff("hoop","pooh"), -1)
console.log(shifted_diff("  "," "), -1)
