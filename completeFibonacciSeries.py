def fibonacci(n):
    result = []
    if n > 0:
        fib, fib_1 = 0, 1
        for i in range(n):
            result.append(fib)
            fib, fib_1 = fib_1, fib + fib_1
    return result

print(fibonacci(4), [0, 1, 1, 2], 'Should work for 4.')
print(fibonacci(1), [0], 'Should work for 1 element.')
print(fibonacci(0), [], 'Should have 0 elements for 0.')
print(fibonacci(-1), [], 'Should have 0 elements for negative input.')
print(fibonacci(-14), [], 'Should have 0 elements for negative input.')
print(fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], 'Should work for 10.')