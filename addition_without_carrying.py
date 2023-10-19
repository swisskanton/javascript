"""
A little boy is studying arithmetics. He has just learned how to add two integers,
written one below another, column by column.
But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.
"""

def addition_without_carrying(a, b):
    result = 0
    multyp = 1
    while a or b:
        result += (a+b) % 10 * multyp
        a //= 10
        b //= 10
        multyp *= 10
    return result


print(addition_without_carrying(456,1734), 1180)
print(addition_without_carrying(99999,0), 99999)
print(addition_without_carrying(999,999), 888)
print(addition_without_carrying(0,0), 0)