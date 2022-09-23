def zero_plentiful(arr):
    if len(arr) < 4:
        return 0
    count = 0
    result = 0
    for x in arr:
        if x == 0:
            count += 1
            if count == 4:
                result += 1
        else:
            if count > 0 and count < 4:
                return 0
            count = 0
    return result if count == 0 or count > 3 else 0

print(zero_plentiful([0, 0, 0, 0, 0, 1]), ' -->  1')
print(zero_plentiful([0, 0, 0, 0, 1, 0, 0, 0, 0]), ' -->  2')
print(zero_plentiful([0, 0, 0, 0, 1, 0]), ' -->  0')
print(zero_plentiful([0, 0, 0, 1, 0, 0]), ' -->  0')
print(zero_plentiful([1, 2, 3, 4, 5]), ' -->  0')
print(zero_plentiful([]), ' -->  0')