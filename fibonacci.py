def fibonacci(n: int) -> int:
    """Given a positive argument n, returns the nth term of the Fibonacci Sequence.

    if n == 1 or n == 2:
        return 1
    elif n == 0:
        return 0
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
    """
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        fib_2 = 0
        fib_1 = 1
        for i in range(2, n + 1):
            fib = fib_2 + fib_1
            fib_2 = fib_1
            fib_1 = fib
        return fib

print(fibonacci(0), 0)
print(fibonacci(1), 1)
print(fibonacci(2), 1)
print(fibonacci(3), 2)
print(fibonacci(4), 3)
print(fibonacci(5), 5)
print(fibonacci(6), 8)
print(fibonacci(34), 5702887)
print(fibonacci(299), 137347080577163115432025771710279131845700275212767467264610201)