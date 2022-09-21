def get_participants(handshakes):
    import math
    return math.ceil((1 + (1 + 8 * handshakes) ** 0.5) / 2) if handshakes > 0 else 0


print('7 > ', get_participants(21))
print('8 > ', get_participants(22))
print('0 > ', get_participants(0))