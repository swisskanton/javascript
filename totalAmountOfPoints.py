def points(games):
    return sum([3 if x[0] > x[2] else 1 if x[0] == x[2] else 0 for x in games])


print('4 > ', points(["3:1", "2:2", "0:1"]))