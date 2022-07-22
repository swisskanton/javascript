function staircase(n) {
    // Write your code here
    for (let i = n; i > 0; i--) {
        let s = ''
        for (let j = 1; j < i; j++) {
            s += ' '
        }
        for (let j = i; j <= n; j++) {
            s += '#'
        }
        console.log(s)     
    }
}

let n = 4
staircase(n)
n = 12
staircase(n)