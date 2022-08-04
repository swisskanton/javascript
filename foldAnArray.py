def fold_array(array, runs):
    result = add_pairs(array)
    for i in range(runs - 1):
        result = add_pairs(result)
    return result

def add_pairs(arr):
    if len(arr) == 1:
        return arr
    middle = int(len(arr) / 2) + 1 if len(arr) % 2 else int(len(arr) / 2)
    last = len(arr) - 1
    result = []
    for i in range(middle):
        if i != last - i:
            result.append(arr[i] + arr[last - i])
        else:
            result.append(arr[i])
    return result


arr = [1, 2, 3, 4, 5]
print(fold_array(arr, 1), [6, 6, 3])
print(fold_array(arr, 2), [9, 6])
print(fold_array(arr, 3), [15])
arr = [-9, 9, -8, 8, 66, 23]
print(fold_array(arr, 1), [14, 75, 0])