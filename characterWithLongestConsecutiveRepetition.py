def longest_repetition(chars):
    letter = ''
    longest = 0
    if len(chars) != 0:
        long = 0
        previous = chars[0]
        for x in chars:
            if previous == x:
                long += 1
                if long > longest:
                    longest = long
                    letter = x
            else:
                long = 1
            previous = x
    return (letter, longest)

print(4, longest_repetition('it is my stringggg'))
print(3, longest_repetition('ma abbahagyom a maaars csoki evest'))
print(1, longest_repetition('teszt szoveg'))
print(0, longest_repetition(''))