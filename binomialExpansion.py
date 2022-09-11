def expand(expr):
    import re
    numbers = re.findall("\d+", expr)
    n = int(numbers[-1])
    b = int(numbers[-2])
    if len(numbers) == 2:
        a = 1
        if expr[expr.index(numbers[-2]) - 1] == '-':
            b *= -1
        x = expr[expr.index(numbers[0]) - 2]
    else:
        a = int(numbers[0])
        if expr[expr.index(numbers[0]) + len(numbers[0]) + 1] == '-':
            b *= -1
        x = expr[expr.index(numbers[0]) + len(numbers[0])]
    if expr[1] == '-':
        a *= -1
    #print(f'({a}{x}+{b})^{n}', end=' > ')
    if n == 0:
        return '1'
    if b == 0:
        return f'{x}^{n}' if a ** n == 1 else f'-{x}^{n}' if a ** n == -1 else f'{a ** n}{x}^{n}'
    result = ''
    for i in range(n + 1):
        coeficient = binom(n, i) * a ** (n - i) * b ** i
        if coeficient == - 1:
            result += '-'
        elif coeficient > 0 and coeficient == 1:
            result += '+'
        elif coeficient > 0 and coeficient != 1:
            result += f'+{coeficient}'
        else:
            result += f'{coeficient}'
        if n - i == 1:
            result += f'{x}'
        elif n - i == 0:
            if abs(b) == 1:
                result += '1'
        else:
            result += f'{x}^{n - i}'
    return result if result[0] == '-' else result[1:]

def binom(n, k):
    result = 1
    for i in range(2, n + 1):
        result *= i
    for i in range(2, k + 1):
        result //= i
    for i in range(2, n - k + 1):
        result //= i
    return result

print(expand("(x+1)^0"), "1")
print(expand("(x+1)^2"), ' > returns x^2+2x+1')
print(expand("(p-1)^3"), ' > returns p^3-3p^2+3p-1')
print(expand("(2f+4)^6"), ' > returns 64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096')
print(expand("(-2a-4)^0"), ' > returns 1')
print(expand("(-12t+43)^2"), ' > returns 144t^2-1032t+1849')
print(expand("(r+0)^203"), ' > returns r^203')
print(expand("(-x-1)^2"), ' > returns x^2+2x+1')