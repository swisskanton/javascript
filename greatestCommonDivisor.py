def gcd(x, y):
    #return [y - i for i in range(y) if x % (y - i) == 0 and y % (y - i) == 0][0]
    """
    for i in range(y):
        if x % (y - i) == 0 and y % (y - i) == 0:
            result = y - i
            break
    return result
    """
    if x % y == 0:
        return y
    else:
        return gcd(y, x % y)

print('2 : ', gcd(6, 4))
print('1 : ', gcd(100, 17))
print('3 : ', gcd(9, 6))
print('4 : ', gcd(24, 4))