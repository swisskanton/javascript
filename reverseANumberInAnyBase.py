"""
Write a function which when given a non-negative integer n and an arbitrary
base b, returns the number reversed in that base.

Examples
n=12 and b=2 return 3, because 12 in binary is "1100",
    which reverses to "0011", equivalent to 3 in decimal.
n=10 and b=5 return 2, because 10 in base-5 is "20",
    which reverses to "02", equivalent to 2 in decimal.
n=45 and b=30 return 451, because 45 in base-30 is "1F",
    which reverses to "F1", equivalent to 451 in decimal.
n=3 and b=4 return 3, because 3 in base-4 is "3",
    which reverses to "3", equivalent to 3 in decimal.

Solution
def reverse_number(n, b):
    if b == 1: return n
    res = 0
    while n > 0:
        res *= b
        res += n % b
        n //= b
    return res
"""

def digit_to_char(digit):
    if digit < 10:
        return str(digit)
    return chr(ord('a') + digit - 10)

def str_base(number, base):
    while number > 0:
        number, digit = divmod(number, base)
        yield digit_to_char(digit)

def reverse_number(n, b):
    if n < b or b == 1:
        return n
    else:
        code = list(str_base(n, b))[::-1]
        print(code)
        result = 0
        for i in range(len(code)):
            result += (b ** i) * (int(code[i]) if code[i].isdigit() else ord(code[i]) - ord('a') + 10)
        return result

print(reverse_number(12, 2), '> 0011 --> 3')
print(reverse_number(10, 5), '> 02 --> 2')
print(reverse_number(45, 30), '> 154 --> 451')
print(reverse_number(3, 4), '> 3 --> 3')
print(reverse_number(5, 1), '> ||||| --> 5')
print(reverse_number(3855501, 1275), '> ... --> 1912338077')