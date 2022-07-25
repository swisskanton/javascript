function pickingNumbers(a) {
    let subArrayLength = 0
    /*
    let max = 0
    let elements = []
    for (let i = 0; i < a.length; i++) {
        if (!(a[i] in elements)) {
            for (let j = 0; j < a.length; j++) {
                if (a[i] - a[j] <= 1 && a[i] - a[j] >= 0)
                    subArrayLength++
            }
            if (max < subArrayLength)
                    max = subArrayLength
            subArrayLength = 0
            elements.push(a[i])
        }
    }
    */
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i; j < a.length; j++) {
            if (a[i] < a[j]) [a[i], a[j]] = [a[j], a[i]]
        }
    }
    
    let index = 0
    subArrayLength = 1
    let check = 0
    for (let i = index; i < a.length - 1; i++) {
        let isFirst = true
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] != a[j] && isFirst) {
                index = j
                isFinite = false
            }
            if (a[i] - a[j] <= 1 && a[i] - a[j] >= 0) {
                subArrayLength++
            } else {
                break
            }            
        }
        if (check < subArrayLength)
            check = subArrayLength
        subArrayLength = 1
    }
    //console.log(a + ' length: ' + a.length + ' max subarray: ' + check)

    //return max
    return check
}

let a = [4, 6, 5, 3, 3, 1]
console.log('3: ' + pickingNumbers(a))
a = [1, 2, 2, 3, 1, 2]
console.log('5: ' + pickingNumbers(a))
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
console.log('5: ' + pickingNumbers(a))
a = [14, 18, 17, 10, 9, 20, 4, 13, 19, 19, 8, 15, 15, 17, 6, 5, 15, 12, 18, 2, 18, 7, 20, 8, 2, 8, 11, 2, 16, 2, 12, 9, 3, 6, 9, 9, 13, 7, 4, 6, 19, 7, 2, 4, 3, 4, 14, 3, 4, 9, 17, 9, 4, 20, 10, 16, 12, 1, 16, 4, 15, 15, 9, 13, 6, 3, 8, 4, 7, 14, 16, 18, 20, 11, 20, 14, 20, 12, 15, 4, 5, 10, 10, 20, 11, 18, 5, 20, 13, 4, 18, 1, 14, 3, 20, 19, 14, 2, 5, 13]
console.log('15: ' + pickingNumbers(a))