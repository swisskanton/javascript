def solution(number):
    sum = 0
    if number > 0:
        for i in range(number):
            if i % 3 == 0 or i % 5 == 0:
                sum += i
    return sum

print(23, solution(10))
print(3, solution(4))