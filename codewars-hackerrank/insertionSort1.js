function insertionSort1(n, arr) {
    if (n > 1) {
        let temp = arr[n - 1]
        for (let i = n - 2; i >= -1; i--) {
            if (i == -1 || temp > arr[i]) {
                arr[i + 1] = temp
                break
            }
            arr[i + 1] = arr[i]
            console.log(arr.join(' '))
        }
    }
    console.log(arr.join(' '))
}

insertionSort1(5, [1, 2, 4, 5, 3])
insertionSort1(5, [2, 4, 6, 8, 1])/*
insertionSort1(1, [2])
insertionSort1(0, [])*/
insertionSort1(2, [6, 3])
