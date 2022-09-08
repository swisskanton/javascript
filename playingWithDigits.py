def dig_pow(n, p):
    txt = str(n)
    sum = 0
    for x in txt:
        sum += int(x) ** p
        p += 1
    return sum // n if sum % n == 0 else -1

print('1 -> ', dig_pow(89, 1))
print('-1 -> ', dig_pow(92, 1))
print('2 -> ', dig_pow(695, 2))
print('51 -> ', dig_pow(46288, 3))