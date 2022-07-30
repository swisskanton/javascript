function saveThePrisoner(n, m, s) {
    return (m % n + s - 1) % n ? (m % n + s - 1) % n : n

}

let n = 46934
let m = 543563655
let s = 46743
console.log('20809: ' + saveThePrisoner(n, m, s))
n = 7
m = 19
s = 2
console.log('6: ' + saveThePrisoner(n, m, s))
n = 3
m = 7
s = 3
console.log('3: ' + saveThePrisoner(n, m, s))