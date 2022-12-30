def order(sentence):
    import re
    nums = re.findall("\d", sentence)
    s = sentence.split(' ')
    return ' '.join([s[nums.index(str(i))] for i in range(1, len(nums) + 1)])

print(order('is2 Thi1s T4est 3a'), '-->  Thi1s is2 3a T4est')
print(order(''), '-->  ')
print(order('4of Fo1r pe6ople g3ood th5e the2'), '-->  Fo1r the2 g3ood 4of th5e pe6ople')