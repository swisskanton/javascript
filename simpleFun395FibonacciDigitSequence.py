def find(a,b,n):
    if a == b == 0:
        return 0
    sequence = str(a) + str(b)
    first, second = '1123581347', '1459'
    while len(sequence) <= n:
        next = a + b
        if next == 11:
            index = (n - len(sequence)) % 10
            return int(first[index])
        if next == 14:
            index = (n - len(sequence)) % 4
            return int(second[index])
        sequence += str(next)
        if len(str(next)) == 1:
            a, b = b, next
        else:
            a, b = 1, next % 10
    return int(sequence[n])

print(find(7,8,9), 5)
print(find(7,8,2), 1)
print(find(7,8,11), 1)
print(find(0,0,1000000),0)
