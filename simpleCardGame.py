def winner(deck_steve, deck_josh):
    deck = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    points_s, points_j = 0, 0
    for i in range(len(deck_steve)):
        if deck.index(deck_steve[i]) > deck.index(deck_josh[i]):
            points_s +=1
        elif deck.index(deck_josh[i]) > deck.index(deck_steve[i]):
                points_j += 1
    if points_s > points_j:
        return f"Steve wins {points_s} to {points_j}"
    elif points_j > points_s:
        return f"Josh wins {points_j} to {points_s}"
    else:
        return "Tie"


print(winner(["A", "7", "8"], ["K", "5", "9"]), "Steve wins 2 to 1")