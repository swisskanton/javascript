def SumEvenFibonacci(limit):
    sum = 0
    fib_1, fib = 1, 2
    for i in range(limit):
        if fib > limit:
            break
        if fib % 2 == 0:
            sum += fib
        fib_1, fib = fib, fib_1 + fib
    return sum

print(SumEvenFibonacci(1), 0)
print(SumEvenFibonacci(2), 2)
print(SumEvenFibonacci(8), 10)
print(SumEvenFibonacci(111111), 60696)