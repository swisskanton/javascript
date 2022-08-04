def makePlural(options, number):
    if number % 10 >= 5 or number % 10 == 0 or (number % 100 > 10 and number % 100 <= 14):
        return options[2]
    elif (number % 10 > 1 and number % 10 <= 4) and not(number % 100 > 10 and number % 100 <= 14):
        return options[1]
    else:
        return options[0]


print(makePlural(['день', 'дня', 'дней'], 0), ' => 0 дней')
print(makePlural(['день', 'дня', 'дней'], 1), ' => 1 день')
print(makePlural(['день', 'дня', 'дней'], 2), ' => 2 дня')
print(makePlural(['день', 'дня', 'дней'], 3), ' => 3 дня')
print(makePlural(['день', 'дня', 'дней'], 4), ' => 4 дня')
print(makePlural(['день', 'дня', 'дней'], 5), ' => 5 дней')
print(makePlural(['день', 'дня', 'дней'], 11), ' => 11 дней')
print(makePlural(['день', 'дня', 'дней'], 20), ' => 20 дней')
print(makePlural(['день', 'дня', 'дней'], 21), ' => 21 день')
print(makePlural(['день', 'дня', 'дней'], 22), ' => 22 дня')
print(makePlural(['день', 'дня', 'дней'], 111), ' => 111 дней')
print(makePlural(['день', 'дня', 'дней'], 13), ' => 12 дней')