def get_most_profit_from_stock_quotes(quotes):
    maximum = -1
    profit = 0
    for i in range(len(quotes)):
        if maximum == -1:
            maximum = max(quotes[i:])
        if quotes[i] == maximum:
            maximum = -1
        else:
            profit += maximum - quotes[i]
    return profit


print(15, get_most_profit_from_stock_quotes([1, 2, 3, 4, 5, 6]))
print(0, get_most_profit_from_stock_quotes([6, 5, 4, 3, 2, 1]))
print(18, get_most_profit_from_stock_quotes([1, 6, 5, 10, 8, 7]))
print(26, get_most_profit_from_stock_quotes([1, 2, 10, 3, 2, 7, 3, 2]))