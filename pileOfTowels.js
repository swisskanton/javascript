// pileOfTowels.js
function sort_the_pile(pile_of_towels, weekly_used_towels) {
    var last = pile_of_towels.length - 1
    for (x of weekly_used_towels) {
        let i = last - x + 1
        let j = last
        while (i < j) {
            while (pile_of_towels[i] == 'red' && i < j) 
                i++
            while (pile_of_towels[j] == 'blue' && i < j)
                j--
            if (i < j) {
                [pile_of_towels[i], pile_of_towels[j]] = [pile_of_towels[j], pile_of_towels[i]]
                i++
                j--
            }
        }
    }
    return pile_of_towels
}

weekly_used_towels = [3]
pile_of_towels = ['blue', 'red', 'blue', 'red', 'blue']
console.log('blue, red, red, blue, blue >', sort_the_pile(pile_of_towels, weekly_used_towels))
weekly_used_towels = [2, 1, 4, 2]
console.log('blue, red, red, blue, blue >', sort_the_pile(pile_of_towels, weekly_used_towels))