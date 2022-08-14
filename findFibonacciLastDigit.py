def get_last_digit(index):
    fib, fib_1 = 0, 1
    for i in range(index):
        fib, fib_1 = fib_1, fib_1 + fib
    return fib % 10

print(get_last_digit(10), 5)

print(get_last_digit(193150), 5)
print(get_last_digit(300), 0)
print(get_last_digit(20001), 6)
print(get_last_digit(800), 5)
print(get_last_digit(1001), 1)
print(get_last_digit(100), 5)
print(get_last_digit(260), 5)
print(get_last_digit(1111), 9)
print(get_last_digit(1234), 7)
print(get_last_digit(99999), 6)
print(get_last_digit(10), 5)
print(get_last_digit(234), 2)
print(get_last_digit(193241), 1)
print(get_last_digit(79), 1)
print(get_last_digit(270), 0)