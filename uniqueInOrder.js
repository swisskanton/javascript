function unique_in_order(iterable){
    if (iterable.length == 0)
        return []
    result = []
    result.push(iterable[0])
    for (x of iterable)
        if (result[result.length - 1] != x)
            result.push(x)
    return result
}

console.log(unique_in_order('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
console.log(unique_in_order('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
console.log(unique_in_order([1,2,2,3,3]), [1,2,3])
console.log(unique_in_order([]), [])
console.log(unique_in_order([0]), [0])
console.log(unique_in_order('AAA'), ['A'])