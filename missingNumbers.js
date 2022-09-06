function missingNumbers(arr, brr) {
    let result = []
    if (arr.length != brr.length)
    {
        let numbers = new Map()
        numbers = counrNumbers(brr, 1, numbers)
        numbers = counrNumbers(arr, -1, numbers)
        numbers.forEach(function (value, key) {
            if (value > 0)
                result.push(key)
        })
    }
    result.sort(function(a,b) {return a - b})
    return result
}

function counrNumbers(arr, add, numbers) {
    for (let i = 0; i < arr.length; i++) {
        if (numbers.has(arr[i]))
            numbers.set(arr[i], numbers.get(arr[i]) + add)
        else
            numbers.set(arr[i], add)
    }
    //console.log(numbers.entries())
    return numbers
}

console.log('[4, 6] > ' + missingNumbers([7,2,5,3,5,3], [7,2,5,4,6,3,5,3]))
console.log('[204, 205, 206] > ' + missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))