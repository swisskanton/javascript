function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    if (v2 >= v1) 
        return 'NO'
    else {
        let i = 1
        while (x1 + i * v1 < x2 + i * v2) {
            i++
        }
        if (x1 + i * v1 == x2 + i * v2)
            return 'YES'
        else
            return 'NO'
    }
}

x1 = 0
v1 = 3
x2 = 4
v2 = 2
console.log('0, 3, 4, 2 - Yes: ' + kangaroo(x1, v1, x2, v2))
x1 = 0
v1 = 2
x2 = 5
v2 = 3
console.log('0, 2, 5, 3 - No: ' + kangaroo(x1, v1, x2, v2))
x1 = 0
v1 = 3
x2 = 1
v2 = 2
console.log('0, 3, 0, 2 - Yes: ' + kangaroo(x1, v1, x2, v2))