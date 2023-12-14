function fold_array(array, runs) {
    result = add_pairs(array)
    for (let i= 0; i < runs - 1; i++) {
        result = add_pairs(result)
    }
    return result
}

function add_pairs(arr) {
    if (arr.length == 1)
        return arr
    middle = arr.length % 2 ? parseInt(arr.length / 2) + 1 : parseInt(arr.length / 2)
    last = arr.length - 1
    result = []
    for (let i = 0; i < middle; i++)
        if (i != last - i)
            result.push(arr[i] + arr[last - i])
        else
            result.push(arr[i])
    return result
}

arr = [1, 2, 3, 4, 5]
console.log(fold_array(arr, 1), [6, 6, 3])
console.log(fold_array(arr, 2), [9, 6])
console.log(fold_array(arr, 3), [15])
arr = [-9, 9, -8, 8, 66, 23]
console.log(fold_array(arr, 1), [14, 75, 0])
