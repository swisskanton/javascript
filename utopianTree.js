function utopianTree(n) {
    let result = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 )
            result*= 2
        else
            result++
    }
    return result

}

for (let i = 0; i < 10; i++) {
    console.log(i, utopianTree(i))
}
