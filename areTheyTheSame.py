def comp(array1, array2):
    if array1 == None or array2 == None or len(array1) != len(array2):
        return False
    result = True
    for x in array1:
        if x**2 in array2:
            array2.remove(x**2)
        else:
            result = False
            break
    return result


a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print('True:', comp(a1, a2))
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print('False:', comp(a1, a2))
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
print('False:', comp(a1, a2))
a1 = []
a2 = None
print('False:', comp(a1, a2))