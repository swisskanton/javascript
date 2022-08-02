function get_most_profit_from_stock_quotes(quotes) {
    let maximum = -1
    let profit = 0
    for (let i = 0; i < quotes.length; i++) {
        if (maximum == -1)
            maximum = Math.max.apply(null, quotes.slice(i))
        if (quotes[i] == maximum)
            maximum = -1
        else
            profit += maximum - quotes[i]
    }
    return profit
}

console.log(15, get_most_profit_from_stock_quotes([1, 2, 3, 4, 5, 6]))
console.log(0, get_most_profit_from_stock_quotes([6, 5, 4, 3, 2, 1]))
console.log(18, get_most_profit_from_stock_quotes([1, 6, 5, 10, 8, 7]))
console.log(26, get_most_profit_from_stock_quotes([1, 2, 10, 3, 2, 7, 3, 2]))