def row_sum_odd_numbers(n):
    # return n ** 3
    currentNumber = n * (n - 1) + 1
    sum = 0
    for i in range(n):
        sum += currentNumber
        currentNumber += 2
    return sum

print('1: ', row_sum_odd_numbers(1))
print('8: ', row_sum_odd_numbers(2))
print('27: ', row_sum_odd_numbers(3))
print('64: ', row_sum_odd_numbers(4))
print('125: ', row_sum_odd_numbers(5))