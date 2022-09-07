def wave(people):
    result = []
    if len(people) > 0:
        for i in range(len(people) - 1):
            if people[i].isalpha():
                result.append(people[:i] + people[i].upper() + people[i+1:])
        if people[-1].isalpha():
            result.append(people[:-1] + people[-1].upper())
    return result

print(wave("hello"), '=> ["Hello", "hEllo", "heLlo", "helLo", "hellO"]')
print(wave(" "), '=> [" "]')
print(wave("a"), '=> ["A"]')
print(wave(""), '=> [""]')
print(wave("two words"), '=> ["Two words, tWo words, twO words, two Words, two wOrds, two woRds, two worDs, two wordS"]')