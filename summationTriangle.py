def get_sum(n):
    summ = 0
    for i in range(n + 1):
        """
        line = 0
        for j in range(i, n + 1):
            line += 2 * i + j + 1
            print(2 * i + j + 1 , end=' ')
        print('| ', line, ' > ', ( (n + 1 + i * 2) * (n + 2 + i * 2) - (3 * i) * (3 * i + 1) ) // 2)
        summ += line
        """
        summ += ((n + 1 + i * 2) * (n + 2 + i * 2) - (3 * i) * (3 * i + 1)) // 2
    return summ


print(get_sum(2))
print()
print(get_sum(3))
print()
print(get_sum(5))