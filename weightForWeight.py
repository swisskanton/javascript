def order_weight(strng):
    strng = strng.strip().replace('  ', ' ')
    arr = strng.split(' ')
    arr = quicksort(arr, 0, len(arr) - 1)
    for i in range(len(arr) - 1):
        for j in range(i, len(arr)):
            if weight_of(arr[i]) == weight_of(arr[j]):
                if arr[i] > arr[j]:
                    arr[i], arr[j] = arr[j], arr[i]
    return ' '.join(arr)

def quicksort(arr, beg, end):
    i = beg
    j = end
    pivot = arr[int((i + j) / 2)]
    while i <= j:
        while weight_of(arr[i]) < weight_of(pivot):
            i += 1
        while weight_of(arr[j]) > weight_of(pivot):
            j -= 1
        if i <= j:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
            j -= 1
    if beg < j:
        quicksort(arr, beg, j)
    if i < end:
        quicksort(arr, i, end)
    return arr

def weight_of(a):
    sum = 0
    for x in a:
        sum += int(x)
    return sum

print('100 180 90 56 65 74 68 86 99 > ', order_weight('56 65 74 100 99 68 86 180 90'))
print('100 180 90 99 > ', order_weight(' 100  99  90 180 '))