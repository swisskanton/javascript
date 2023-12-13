function bonAppetit(bill, k, b) {
    // Write your code here
    let sum = 0
    for (let i = 0; i < bill.length; i++) {
        if (i == k) continue
        sum += bill[i]
    }
    if (b - sum / 2 == 0) 
        return 'Bon Appetit'
    else
        return b - sum / 2
}

let bill = [3, 10, 2, 9]
let k = 1
let b = 12
console.log('5: ' + bonAppetit(bill, k, b))
b = 7
console.log('Bon Appetit: ' + bonAppetit(bill, k, b))
