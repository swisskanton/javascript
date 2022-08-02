def find_it(seq):
    result = []
    for i in seq:
        result.remove(i) if (i in result) else result.append(i)
    return result[0]

print(7, find_it([7]))
print(0, find_it([0]))
print(2, find_it([1, 1, 2]))
print(0, find_it([0, 1, 0, 1, 0]))
print(4, find_it([1,2,2,3,3,3,4,3,3,3,2,2,1]))