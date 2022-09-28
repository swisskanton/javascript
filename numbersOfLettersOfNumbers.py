def numbers_of_letters(n):
    numbers = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
               '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'}
    num = str(n)
    result = []
    name = ''
    while name != 'four':
        name = ''
        for x in num:
            name += numbers[x]
        result.append(name)
        num = str(len(name))
    return result

print(["sixzero", "seven", "five", "four"], '\n', numbers_of_letters(60))
print(["one", "three", "five", "four"], '\n', numbers_of_letters(1))
print(["four"], '\n', numbers_of_letters(4))