def pyramid(n):
    result = []
    if n > 0:
        for i in range(1, n + 1):
            row = []
            for j in range(i):
                row.append(1)
            result.append(row)
    return result
    # [[1]*x for x in range(1, n+1)]


print(pyramid(0), ' => [ ]')
print(pyramid(1), ' => [ [1] ]')
print(pyramid(2), ' => [ [1], [1, 1] ]')
print(pyramid(3), ' => [ [1], [1, 1], [1, 1, 1] ]')
