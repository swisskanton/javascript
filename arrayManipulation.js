function arrayManipulation(n, queries) {
    var arr = initializeArray(n);
    manipulatedArray(arr, n, queries)
    arrayValuesCalculation(arr)
    var max = findMaximum(arr)
    
    return max
}

function initializeArray(n) {
    return new Array(n).fill(0)
}

function manipulatedArray(arr, n, queries) {
    for (let i = 0; i < queries.length; i++) {
        arr[queries[i][0]-1] += queries[i][2]
        if (queries[i][1] < n)
        arr[queries[i][1]] -= queries[i][2]
    }
}

function arrayValuesCalculation(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1]        
    }
}

function findMaximum(arr) {
    let max = -Infinity
    arr.forEach(element => {
        if (element > max) max = element
    });
    return max
}

n = 10
queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]
console.log(arrayManipulation(n, queries))
n = 5
queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
console.log(arrayManipulation(n, queries))