def fib(n):
    fib, fib_1 = 0, 1
    for i in range(n - 1):
        fib, fib_1 = fib_1, fib + fib_1
    return fib

print(fib(1), 0)
print(fib(2), 1)
print(fib(3), 1)
print(fib(4), 2)
print(fib(5), 3)