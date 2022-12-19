def transpose(matrix):
    x = len(matrix)
    y = len(matrix[0])
    print('Original matrix')
    print_matrix(matrix)
    trans = []
    for i in range(y):
        line = []
        for j in range(x):
            line.append(matrix[j][i])
        trans.append(line)
    print('Transpose matrix')
    print_matrix(trans)
    return trans

def print_matrix(arr):
    for line in arr:
        for item in line:
            print(item, end='  ')
        print()
    print()

print(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]])