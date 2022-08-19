function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
        console.log(arr.join(' '))
    }

}

insertionSort2(7, [3, 4, 7, 5, 6, 2, 1])
insertionSort2(6, [1, 4, 3, 5, 6, 2])