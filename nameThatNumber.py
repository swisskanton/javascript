def name_that_number(x):
    name = ''
    numbers = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
               9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 15: 'fifteen', 18: 'eighteen',
            20: 'twenty',30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    }
    if x in numbers.keys():
        name = numbers.get(x)
    else:
        if x < 20:
            name = numbers.get(x % 10) + 'teen'
        else:
            name = numbers.get(x - x % 10) + ' ' + numbers.get(x % 10)
    return name

print('four > ', name_that_number(4))
print('nineteen > ', name_that_number(19))
print('ninety nine > ', name_that_number(99))
print('fourty one > ', name_that_number(41))
print('sixty > ', name_that_number(60))