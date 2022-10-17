def sort_dict(d):
    lst = [(x, y) for x, y in d.items()]
    lst.sort(key = mysort, reverse = True)
    return lst

def mysort(x):
    return x[1]

print(sort_dict({3:1, 2:2, 1:3}), [(1,3), (2,2), (3,1)])
print(sort_dict({1:2, 2:4, 3:6}), [(3,6), (2,4), (1,2)])