// Lisa's Workbook
function workbook(n, k, arr) {
    let page = 1
    let count = 0
    for (let i = 0; i < n; i++) {
        let from = 1
        let last = k
        if (last > arr[i])
            last = arr[i]
        while (from <= arr[i]) {
            if (from <= page && page <= last)
                count ++
            from += k
            last += k
            if (last > arr[i])
                last = arr[i]
            page ++
        }
    }
    return count
}


console.log('1: ' + workbook(1, 3, [4, 2]))
console.log('4: ' + workbook(5, 3, [4, 2, 6, 1, 10]))