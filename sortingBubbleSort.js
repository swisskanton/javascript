function countSwaps(a) {
    
    let numSwaps = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j + 1], a[j]] = [a[j], a[j + 1]];
                numSwaps++
            }
        }
    }
    let firstElement = a[0]
    let lastElement = a[a.length - 1]
    console.log('Array is sorted in ' + numSwaps + ' swaps. \nFirst Element: ' + firstElement + ' \nLast Element: ' + lastElement)
}

let a = [6,4,1]
countSwaps(a)