def find_outlier(integers):
    import math
    is_even = True
    even_count = 0
    even, odd = math.inf, math.inf
    for i in range(len(integers)):
        if integers[i] % 2 == 0:
            even_count += 1
            even = integers[i]
        else:
            odd = integers[i]
        if i == 2 and even_count < 2:
            is_even = False
        if i > 1:
            if is_even:
                if odd != math.inf:
                    return odd
            else:
                if even != math.inf:
                    return even

print('11 > ', find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
print('160 > ', find_outlier([160, 3, 1719, 19, 11, 13, -21]))