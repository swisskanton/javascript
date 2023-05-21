"""
Given an array, find the duplicates in that array, and return a new array
of those duplicates. The elements of the returned array should appear in
the order when they first appeared as duplicates ("1" != 1).
"""
def duplicates(arr):
    check, result = [], []
    for x in arr:
        if x not in check:
            check.append(x)
        elif x not in result:
                result.append(x)
    return result
    # return [n for i, n in enumerate(arr) if arr[:i].count(n) == 1]

print(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]), '==>  [4, 3, 1]')
print(duplicates([0, 1, 2, 3, 4, 5]), '==>  []')