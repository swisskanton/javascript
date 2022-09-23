def maxSum(arr, ranges):
    max = float('-inf')
    for x in ranges:
        sum = 0
        for i in range(x[0], x[1] + 1):
            sum += arr[i]
        if max < sum:
            max = sum
    return max

print('6: ', maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))
print('5: ', maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]))
print('0: ', maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]))