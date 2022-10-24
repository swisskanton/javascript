def up_array(arr):
    if len(arr) == 0 or min(arr) < 0 or max(arr) > 9:
        return None
    arr[-1] += 1
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] == 10:
            arr[i] = 0
            if i == 0:
                arr.insert(0, 1)
            else:
                arr[i - 1] += 1
        else:
            break
    return arr




print(up_array([2,3,9]), [2,4,0])
print(up_array([4,3,2,5]), [4,3,2,6])
print(up_array([1,-9]), None)
print(up_array([9,9]), [1,0,0])
print(up_array([0,4,2]), [0,4,3])