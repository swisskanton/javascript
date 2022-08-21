def fib_digits(n):
    fib, fib_1 = 0, 1
    for i in range(n):
        fib, fib_1 = fib_1, fib + fib_1
    nums = {}
    for i in range(10):
        nums[i] = 0
    numbers = str(fib)
    for x in numbers:
        nums[int(x)] += + 1
    result = []
    for i in range(10):
        max, value = -1, -1
        for x, y in nums.items():
            if y >= value:
                value = y
                max = x
        if value > 0:
            result.append((nums[max], max))
        nums.pop(max)
    return result

print(fib_digits(10), '\n',[(2, 5)])
a = [(254, 3),(228, 2),(217, 6),(217, 0),(202, 5),(199, 1),(198, 7),(197, 8),(194, 4),(184, 9)]
print(fib_digits(10000), '\n',a)
a = [(2149, 2), (2135, 1), (2131, 8), (2118, 9), (2109, 0), (2096, 3), (2053, 5), (2051, 6), (2034, 7), (2023, 4)]
print(fib_digits(100000), '\n',a)