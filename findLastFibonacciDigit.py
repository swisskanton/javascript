def last_fib_digit(n):
    fib, fib_1 = 0, 1
    for i in range(n % 120):
        fib, fib_1 = fib_1, (fib + fib_1) % 10
    return fib

print(last_fib_digit(1),1)
print(last_fib_digit(21),6)
print(last_fib_digit(302),1)
print(last_fib_digit(4003),7)
print(last_fib_digit(50004),8)
print(last_fib_digit(600005),5)
print(last_fib_digit(7000006),3)
print(last_fib_digit(80000007),8)
print(last_fib_digit(900000008),1)
print(last_fib_digit(1000000009),9)