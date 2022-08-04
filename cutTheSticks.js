function cutTheSticks(arr) {
    let result = []
    while (arr.length > 0) {
        result.push(arr.length)
        let min = Math.min(...arr)      
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == min) {  
                arr.splice(i, 1)
                i--     
            } else {
                arr[i] = arr[i] - min
            }
        }
    }
    return result
}

let arr = [5, 4, 4, 2, 2, 8]
console.log('6, 4, 2, 1 >' + cutTheSticks(arr))
arr = [1, 2, 3, 4, 3, 3, 2, 1]
console.log('8, 6, 4, 1 >' + cutTheSticks(arr))