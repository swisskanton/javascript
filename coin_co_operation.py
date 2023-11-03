"""
Let's say that there exists a machine that gives out free coins, but with a twist!

Separating two people is a wall, and this machine is placed in such a way that both people are able to access it.
Spending a coin in this machine will give the person on the other side 3 coins and vice versa.

If both people continually spend coins for each other (SHARING),
then they'll both gain a net profit of 2 coins per turn.
However, there is always the possibility for someone to act selfishly (STEALING):
they spend no coins, yet they still receive the generous 3 coin gift from the other person!

The Challenge
Assuming that both people start with 3 coins each,
create a function that calculates both people's final number of coins.
You will be given two arrays of strings, with each string being the words "share" or "steal".

Examples
["share"], ["share"] ➞ (5, 5)
// Both people spend one coin, and receive 3 coins each.

["steal"], ["share"] ➞ (6, 2)
// Person 1 gains 3 coins, while person 2 loses a coin.

["steal"], ["steal"] ➞ (3, 3)
// Neither person spends any coins and so no one gets rewarded.

["share", "share", "share"], ["steal", "share", "steal"] ➞ (3, 11)
"""

def get_coin_balances(lst1, lst2):
    x, y = 3, 3
    for i in range(len(lst1)):
        if lst1[i] == lst2[i]:
            if lst1[i] == 'share':
                x += 2
                y += 2
        elif lst1[i] == 'share':
            x -= 1
            y += 3
        else:
            x += 3
            y -= 1
    return (x, y)

"""
def get_coin_balances(lst1, lst2):
    x, y = lst1.count("share"), lst2.count("share")
    return 3 - x + 3 * y, 3 - y + 3 * x
"""

print(get_coin_balances(['share'], ['share']) == (5, 5))
print(get_coin_balances(['steal'], ['share']) == (6, 2))
print(get_coin_balances(['share'], ['steal']) == (2, 6))
print(get_coin_balances(['steal'], ['steal']) == (3, 3))
print(get_coin_balances(['share', 'share', 'share'], ['steal', 'share', 'steal']) == (3, 11))
print(get_coin_balances(['share', 'share', 'steal', 'share'], ['steal', 'steal', 'steal', 'steal']) == (0, 12))
print(get_coin_balances(['steal', 'steal', 'steal'], ['share', 'share', 'share']) == (12, 0))
print(get_coin_balances(['share', 'share'], ['share', 'share']) == (7, 7))
print(get_coin_balances(['share', 'steal', 'steal', 'steal'], ['share', 'share', 'steal', 'share']) == (11, 3))
print(get_coin_balances(['share', 'share', 'steal', 'share'], ['steal', 'share', 'steal', 'steal']) == (3, 11))
print(get_coin_balances(['steal', 'steal', 'steal', 'steal'], ['steal', 'steal', 'steal', 'steal']) == (3, 3))
print(get_coin_balances(['steal', 'share', 'steal', 'steal'], ['share', 'share', 'steal', 'steal']) == (8, 4))
print(get_coin_balances(['steal', 'steal'], ['share', 'share']) == (9, 1))
print(get_coin_balances(['steal', 'share'], ['share', 'steal']) == (5, 5))