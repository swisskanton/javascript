def matrix_mult(a, b):
    result = []
    for i in range(len(a)):
        row = []
        for j in range(len(b)):
            sum = 0
            for k in range(len(b)):
                sum += a[i][k] * b[k][j]
            row.append(sum)
        result.append(row)
    return result

print(matrix_mult([[1, 2],[3, 2]],[[3, 2],[1, 1] ]), ' = [ [5, 4], [11, 8] ]')
print(matrix_mult([[9, 7],[0, 1]],[[1, 1],[4, 12]]), ' = [ [37, 93], [4, 12] ]')
print(matrix_mult([[1, 2, 3],[3, 2, 1],[2, 1, 3]],[[4, 5, 6],[6, 5, 4],[4, 6, 5]]), ' = [ [28, 33, 29], [28, 31, 31], [26, 33, 31] ]')