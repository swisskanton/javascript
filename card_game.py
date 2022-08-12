def card_game(n):
    number_of_cards = 0
    receiver = 1
    while n > 0:
        if n % 4 == 0 and n // 4 > 1:
            if receiver > 0:
                number_of_cards += 1
            n -= 1
        elif n % 2 == 0:
            if receiver > 0:
                number_of_cards += n // 2
            n = n // 2
        else:
            if receiver > 0:
                number_of_cards += 1
            n -= 1
        receiver *= -1
    return number_of_cards

print(card_game(10), 8)
print(card_game(4), 3)
print(card_game(5), 2)
print(card_game(12), 9)
print(card_game(100000000000), 99999999950)