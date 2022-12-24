def expansion(matrix, n):
    while n > 0:
        dim = len(matrix)
        for x in matrix:
            x.append(sum(x))
        row = []
        diagonal = 0
        for i in range(dim):
            column = 0
            for j in range(dim):
                column += matrix[j][i]
                if i == j:
                    diagonal += matrix[i][j]
            row.append(column)
        row.append(diagonal)
        matrix.append(row)
        n -= 1
    return matrix

print(expansion([[1,2], [5,3]], 1))
print(expansion([[4,1], [19,-2]], 1))
print(expansion([[102,39], [-11,-97]], 1))
print(expansion([[1,2], [5,3]], 2))
print(expansion([[4,1], [19,-2]], 2))
print(expansion([[102,39], [-11,-97]], 2))
print(expansion([[53, -64, 16, 16], [-98, 0, -14, -87], [75, -74, 39, 36], [32, 90, 42, 12]], 2))