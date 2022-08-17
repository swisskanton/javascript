def xbonacci(signature, n):
    result = []
    if n < len(signature):
        for i in range(n):
            result.append(signature[i])
    else:
        result = signature.copy()
        for i in range(n - len(signature)):
            fib = nextFibo(signature)
            result.append(fib)
            signature.append(fib)
            signature.pop(0)
    return result

def nextFibo(arr):
    sum = 0
    for x in arr:
        sum += x
    return sum

print('{1,1,1,1,4,7,13,25,49,94}', xbonacci([1,1,1,1], 10))
print('{0,0,0,0,1,1,2,4,8,16}', xbonacci([0,0,0,0,1], 10))
print('{1,0,0,0,0,0,1,2,3,6}', xbonacci([1,0,0,0,0,0,1], 10))
print('{1,1,2,3,5,8,13,21,34,55}', xbonacci([1,1], 10))
print('{}', xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0))
print('{1,2,3,4,5,6,7,8,9}', xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9))