def shifted_diff(first, second):
    if len(first) != len(second):
        return -1
    if first == second:
        return 0
    for i in range(len(first)):
        first = first[1:] + first[0]
        if first == second:
            return len(first) - i - 1
    return -1

print(shifted_diff("eecoff","coffee"), 4)
print(shifted_diff("Moose","moose"), -1)
print(shifted_diff("isn't","'tisn"), 2)
print(shifted_diff("Esham","Esham"), 0)
print(shifted_diff(" "," "), 0)
print(shifted_diff("hoop","pooh"), -1)
print(shifted_diff("  "," "), -1)