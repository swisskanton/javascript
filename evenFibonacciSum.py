def even_fib(m):
    sum = 0
    fib, fib_1 = 0, 1
    while fib < m:
        if fib % 2 == 0:
            sum += fib
        fib, fib_1 = fib_1, fib + fib_1
    return sum


print(even_fib(1), 0)
print(even_fib(10), 10)
print(even_fib(5), 2)
print(even_fib(0), 0)
print(even_fib(33), 10)
print(even_fib(25997544), 19544084)