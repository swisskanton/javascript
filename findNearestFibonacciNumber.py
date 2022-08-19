def nearest_fibonacci(number):
    fib, fib_1 = 0, 1
    while fib_1 < number:
        fib, fib_1 = fib_1, fib + fib_1
    if abs(number - fib) <= abs(number - fib_1):
        return fib
    else:
        return fib_1


numbers = [1,2,9,17,54]
nearest = [1,2,8,13,55]
for i in range(len(numbers)):
    print(nearest_fibonacci(numbers[i]), nearest[i])