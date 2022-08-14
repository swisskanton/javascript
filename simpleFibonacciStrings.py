def solve(n):
    fib, fib_1 = '0', '01'
    for i in range(n):
        fib, fib_1 = fib_1, fib_1 + fib
    return fib

print(solve(0), '0')
print(solve(1), '01')
print(solve(2), '010')
print(solve(3), '01001')
print(solve(5),'0100101001001')