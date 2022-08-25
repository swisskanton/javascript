def main_diagonal_product(mat):
    i = 0
    result = 1
    for item in mat:
        if i < len(item):
            result *= item[i]
        else:
            break
        i += 1
    return result

print(main_diagonal_product([[1,0],[0,1]]), '=> 1')
print(main_diagonal_product([[1,2,3],[4,5,6],[7,8,9]]), '=> 45')