def matrix_addition(a, b):
    result = []
    for i in range(len(a)):
        row = []
        for j in range(len(a[0])):
            row.append(a[i][j] + b[i][j])
        result.append(row)
    return result

print('[[3, 4, 4], [6, 4, 4], [2, 2, 4]] =>', matrix_addition([[1, 2, 3],[3, 2, 1],[1, 1, 1]], [[2, 2, 1],[3, 2, 3],[1, 1, 3]]))