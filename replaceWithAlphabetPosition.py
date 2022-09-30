def alphabet_position(text):
    result = ''
    for x in text:
        if x.isalpha() and x !='_':
            result += str(ord(x.lower()) - 96) + ' '
    return result[:-1]

print("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11\n", alphabet_position("The sunset sets at twelve o' clock."))