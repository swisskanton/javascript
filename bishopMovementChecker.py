def bishop (start_pos, end_pos, num_moves):
    result = False
    if (num_moves == 0 and start_pos == end_pos):
        result = True
    if num_moves > 1:
        if ((ord(start_pos[0]) - 96 + int(start_pos[1])) % 2) == ((ord(end_pos[0]) - 96 + int(end_pos[1])) % 2):
            result = True
    if num_moves == 1:
        if abs(ord(start_pos[0]) - ord(end_pos[0])) == abs(int(start_pos[1]) - int(end_pos[1])):
            result = True
    return result

print(bishop("a1", "b4", 2), True)
print(bishop("a1", "b5", 5), False)
print(bishop("f1", "f1", 0), True)
print(bishop("e6", "a1", 2), False)
print(bishop("e3", "b4", 1), False)
print(bishop("e3", "b6", 1), True)