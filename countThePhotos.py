def count_photos(road):
    count = [0, 0, 0, 0, 0]
    for i in range(len(road)):
        if road[i] == '>':
            count[1] += 1
        if road[i] == '<':
            count[2] += 1
            count[0] += count[4]
        if road[i] == '.':
            count[0] += count[1]
            count[4] += 1
            count[3] += 1 if count[1] > 0 else 1
    return count[0]



print(count_photos(">.>..<"), 8)
print(count_photos(".><.>>.<<"), 11)
print(count_photos(".>>>"), 0)
print(count_photos(">..<<.>.<."), 15)
print(count_photos(".<>>..><.<<<<<."), 34)
print(count_photos("<..>>..>>.><.<.><..<"), 57)
print(count_photos("<<."), 0)
print(count_photos(">>><<<"), 0)
print(count_photos("..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>."), 248)