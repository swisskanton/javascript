def unique_in_order(iterable):
    if len(iterable) == 0:
        return []
    result = []
    result.append(iterable[0])
    for x in iterable:
        if result[-1] != x:
            result.append(x)
    return result


print(unique_in_order('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
print(unique_in_order('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
print(unique_in_order([1,2,2,3,3]), [1,2,3])
print(unique_in_order([]), [])
print(unique_in_order([0]), [0])
print(unique_in_order('AAA'), ['A'])