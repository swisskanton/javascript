def padovan(n):
    pad, pad_1, pad_2 = 1, 1, 1
    for i in range(n):
        pad, pad_1, pad_2 = pad_1, pad_2, pad + pad_1
    return pad


print(padovan(0), 1)
print(padovan(1), 1)
print(padovan(2), 1)
print(padovan(3), 2)
print(padovan(4), 2)
print(padovan(5), 3)
print(padovan(6), 4)
print(padovan(7), 5)
print(padovan(8), 7)
print(padovan(9), 9)