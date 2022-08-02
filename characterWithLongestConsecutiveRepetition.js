//characterWithLongestConsecutiveRepetition
function longest_repetition(chars) {
    let letter = ''
    let longest = 0
    if (chars.length != 0) {
        let long = 0
        let previous = chars[0]
        for (x of chars) {
            if (previous == x) {
                long += 1
                if (long > longest) {
                    longest = long
                    letter = x
                }
            } else {
                long = 1
            }
            previous = x
        }
    }
    return [letter, longest]
}

console.log(4, longest_repetition('it is my stringggg'))
console.log(3, longest_repetition('ma abbahagyom a maaars csoki evest'))
console.log(1, longest_repetition('teszt szoveg'))
console.log(0, longest_repetition(''))