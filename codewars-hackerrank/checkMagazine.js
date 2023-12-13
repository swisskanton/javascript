function checkMagazine(magazine, note) {
    // Write your code here
    var map = {};
    var result = true
    for (var i of magazine) {
        map[i] = (map[i] || 0) + 1
    }
    for (var i of note) {
        map[i] = (map[i] || -1) - 1
        if ( map[i] < 0 ) {
            result = false
            break
        }
    }
    console.log(result ? 'Yes' : 'No')
}

let m = 'give me one grand today night '
let n = 'give one grand today'
checkMagazine(m, n)
m = 'two times three is not four'
n = 'two times two is four'
checkMagazine(m, n)
m = 'ive got a lovely bunch of coconuts'
n = 'ive got some coconuts'
checkMagazine(m, n)
