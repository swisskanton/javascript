def do_math(s):
    numbers = get_numbers(s)
    #print(numbers)
    return computation(numbers)

def get_numbers(s):
    values = []
    num = ''
    letter = ''
    for x in s:
        if x == ' ':
            values.append([letter, int(num)])
            num = ''
            letter = ''
        elif x.isdigit():
            num += x
        else:
            letter += x
    values.append([letter, int(num)])
    for i in range(len(values) - 1):
        change = 0
        for j in range(len(values) - 1):
            if values[j][0] > values[j + 1][0]:
                values[j], values[j + 1] = values[j + 1], values[j]
                change = 1
        if change == 0:
            break
    #print(values)
    return [x[1] for x in values]

def computation(numbers):
    result = numbers[0]
    for i in range(1, len(numbers)):
        if (i - 1) % 4 == 0:
            result += numbers[i]
        elif (i - 1) % 4 == 1:
            result -= numbers[i]
        elif (i - 1) % 4 == 2:
            result *= numbers[i]
        elif (i - 1) % 4 == 3:
            result /= numbers[i]
    return int(result) if abs(result - int(result)) < 0.5 else int(result + 1) if result > 0 else int(result)

print(do_math("24z6 1x23 y369 89a 900b"), 1299)
print(do_math("24z6 1z23 y369 89z 900b"), 1414)
print(do_math("10a 90x 14b 78u 45a 7b 34y"), 60)