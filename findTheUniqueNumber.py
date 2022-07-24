def find_uniq(arr):
    unique = min(arr)
    if unique == arr[0] and unique == arr[1]:
        unique = max(arr)
    elif unique != arr[0] and unique == arr[1]:
        if unique == arr[2]:
            unique = max(arr)
    elif unique == arr[0] and unique != arr[1]:
        if unique == arr[2]:
            unique = max(arr)
    return unique

print(find_uniq([ 1, 1, 1, 2, 1, 1 ]), 2)
print(find_uniq([ 0, 0, 0.55, 0, 0 ]), 0.55)
print(find_uniq([ 3, 10, 3, 3, 3 ]), 10)
print(find_uniq([ 3, 1, 3, 3, 3 ]), 1)
print(find_uniq([ 0, 1, 1, 1, 1, 1 ]), 0)