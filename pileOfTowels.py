def sort_the_pile(pile_of_towels, weekly_used_towels):
    last = len(pile_of_towels) - 1
    for x in weekly_used_towels:
        i = last - x + 1
        j = last
        while i < j:
            while pile_of_towels[i] == 'red' and i < j:
                i += 1
            while pile_of_towels[j] == 'blue' and i < j:
                j -= 1
            if i < j:
                pile_of_towels[i], pile_of_towels[j] = pile_of_towels[j], pile_of_towels[i]
                i += 1
                j -= 1
    return pile_of_towels

weekly_used_towels = [3]
pile_of_towels = ['blue', 'red', 'blue', 'red', 'blue']
print('blue, red, red, blue, blue >', sort_the_pile(pile_of_towels, weekly_used_towels))
weekly_used_towels = [2, 1, 4, 2]
print('blue, red, red, blue, blue >', sort_the_pile(pile_of_towels, weekly_used_towels))