def card_game(card_1, card_2, trump):
    if card_1 == card_2:
        return 'Someone cheats.'
    elif card_1 == 'joker' or card_2 == 'joker':
        return 'The first card won.' if card_1 == 'joker' else 'The second card won.'
    elif card_1[-1] == trump or card_2[-1] == trump:
        if card_1[-1] == trump and card_2[-1] == trump:
            return 'The first card won.' if deck.index(card_1) > deck.index(card_2) else 'The second card won.'
        else:
            return 'The first card won.' if card_1[-1] == trump else 'The second card won.'
    elif card_1[-1] == card_2[-1]:
        return 'The first card won.' if deck.index(card_1) > deck.index(card_2) else 'The second card won.'
    else:
        return 'Let us play again.'


deck = ['joker', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣',
                    '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦',
                    '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥',
                    '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠']
print(card_game("3♣", "Q♣", "♦"), "The second card won.")
print(card_game("5♥", "A♣", "♦"), "Let us play again.")
print(card_game("8♠", "8♠", "♣"), "Someone cheats.")
print(card_game("2♦", "A♠", "♦"), "The first card won.")
print(card_game("joker", "joker", "♦"), "Someone cheats.")
print(card_game("10♣", "joker", "♠"), "The second card won.")