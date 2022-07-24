function maximumToys(prices, k) {
    let numberOfToys = 0
    let priceOfToys = 0
    let min = Math.min.apply(null, prices)  
    while (priceOfToys + min <= k) {
        priceOfToys += min
        let index = prices.indexOf(min)       
        prices.splice(index, 1)      
        min = Math.min.apply(null, prices)
        numberOfToys++
    }
    return numberOfToys
}

let prices = [1, 12, 5, 111, 200, 1000, 10]
let k = 50
console.log('4: ' + maximumToys(prices, k))