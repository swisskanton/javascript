def find_x(n):
    sum_n = int((n - 1) * n / 2)
    sum_2n = (2 * n - 1) * n
    return n * (sum_2n + sum_n * 2)

print('16 > ', find_x(2))
print('63 > ', find_x(3))
print('325 > ', find_x(5))