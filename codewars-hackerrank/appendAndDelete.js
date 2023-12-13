function appendAndDelete(s, t, k) {
    // Write your code here
    let count = 0
    for (let i = s.length; i >=0 ; i--) {
        if (t.startsWith(s.substr(0, i))) {
            var len = t.length - s.substr(0, i).length
            break
        }
        count++
    }
    return (len + count <= k) ? 'Yes' : 'No'
}

let s = 'ashley'
let t = 'ash'
let k = 2
console.log('No: > ' + appendAndDelete(s, t, k))
s = 'hackerhappy'
t = 'hackerrank'
k = 9
console.log('Yes: > ' + appendAndDelete(s, t, k))
