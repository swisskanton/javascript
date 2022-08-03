function jumpingOnClouds(c, k) {
    let e = 100
    let i = k % c.length
    while (i != 0) {
        e -= (1 + c[i] * 2)
        i = (i + k) % c.length
    }
    e -= (1 + c[0] * 2)
    return e
}

let c = [0, 0, 1, 0]
let k = 2
console.log(96, jumpingOnClouds(c, k))
c = [0, 0, 1, 0, 0, 1, 1, 0]
k = 2
console.log(92, jumpingOnClouds(c, k))
c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
k = 3
console.log(80, jumpingOnClouds(c, k))
c = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1]
k = 19
console.log(97, jumpingOnClouds(c, k))