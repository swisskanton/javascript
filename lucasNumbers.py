def lucasnum(n):
    luc, luc_1 = 2, 1
    for i in range(abs(n)):
        if n >= 0:
            luc, luc_1 = luc_1, luc + luc_1
        else:
            luc, luc_1 = luc_1 - luc, luc
    return luc

print(lucasnum(0),2)
print(lucasnum(5),11)
print(lucasnum(100),792070839848372253127)
print(lucasnum(-1),-1)
print(lucasnum(-10),123)