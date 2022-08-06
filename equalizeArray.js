function equalizeArray(arr) {
    let elements = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (elements.has(arr[i]))
            elements.set(arr[i], (elements.get(arr[i]) + 1))
        else
            elements.set(arr[i], 1)
    }
    let max = -Infinity
    elements.forEach (function(value, key) {
        if (max < value)
            max = value
      }) 
    return arr.length - max
}

console.log('2 > ' + equalizeArray([1, 2, 2, 3]))
console.log('2 > ' + equalizeArray([3, 3, 2, 1, 3]))
console.log('4 > ' + equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]))