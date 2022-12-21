def sort_the_odd(arr):
    odds = [x for x in arr if x % 2]
    odds.sort()
    i = 0
    for j in range(len(arr)):
        if arr[j] %2:
            arr[j] = odds[i]
            i += 1
    return arr

print(sort_the_odd([5, 8, 6, 3, 4]))