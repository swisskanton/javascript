def binomial(n):
    if n == 0:
        return 1
    else:
        coefficient = pascals_triangle(abs(n))
        binom = ''
        for i in range(abs(n) + 1):
            binom += str(coefficient[i]) if coefficient[i] > 1 else ''
            binom += 'a^' + str((abs(n) - i)) if abs(n) - i > 1 else 'a' if abs(n) - i == 1 else ''
            binom += 'b^' + str(i) if i > 1 else 'b' if i == 1 else ''
            binom += '+'
        return binom[:-1] if n > 0 else '1/('+binom[:-1]+')'

def pascals_triangle(n):
    result = [1, 1]
    while len(result) <= abs(n):
        arr = [1]
        for i in range(len(result) - 1):
            arr.append(result[i] + result[i + 1])
        arr.append(1)
        result = arr
    return result

print(binomial(0))
print(pascals_triangle(1))
print(binomial(1))
print(pascals_triangle(2))
print(binomial(-2))
print(pascals_triangle(3))
print(binomial(3))
print(pascals_triangle(4))
print(binomial(-4))
print(pascals_triangle(20))
print(binomial(20))