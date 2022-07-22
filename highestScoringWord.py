def high(x):
    value = 0
    result = ''
    words = x.split(' ')
    for word in words:
        sum = 0
        for letter in word:
           sum += ord(letter) - 96
        if value < sum:
            value = sum
            result = word
    return result

if __name__ == '__main__':
    print(high('man i need a taxi up to ubud'), 'taxi')
    print(high('what time are we climbing up the volcano'), 'volcano')
    print(high('take me to semynak'), 'semynak')
    print(high('aa b'), 'aa')
    print(high('b aa'), 'b')
    print(high('bb d'), 'bb')
    print(high('d bb'), 'd')
    print(high("aaa b"), "aaa")

