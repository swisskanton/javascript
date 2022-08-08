function beautifulTriplets(d, arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let from = i
        if (arr.indexOf(arr[i] + d, from) > 0) {
            let ind = arr.indexOf(arr[i] + d, from)
            from = ind + 1
            if (from >= arr.length)
                break
            while (arr.indexOf(arr[i] + 2 * d, ind) > 0) {
                count++
                ind = arr.indexOf(arr[i] + 2 * d, ind) + 1
                if (ind >= arr.length)
                    break
            }
        }
    }
    return count
}

console.log('3: ' + beautifulTriplets(1, [2, 2, 3, 4, 5]))
console.log('4: ' + beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10, 8]))