def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None
    elif wdth > lng:
        lng, wdth = wdth, lng
    result = []
    while wdth > 0:
        result.append(wdth)
        lng, wdth = wdth, lng - wdth
        if wdth > lng:
            lng, wdth = wdth, lng
    return result

print(sq_in_rect(3, 5), ' > [3, 2, 1, 1]')
print(sq_in_rect(5, 3), ' > [3, 2, 1, 1]')
print(sq_in_rect(5, 5), ' None')
print(sq_in_rect(20, 14), ' > [14, 6, 6, 2, 2, 2]')