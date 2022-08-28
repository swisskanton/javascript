def generate_currency_matrix(currency):
    curr = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]
    index = curr.index(currency)
    result = []
    for i in range(len(curr)):
        if i < index:
            result.append(curr[i] + curr[index])
        if i > index:
            result.append(curr[index] + curr[i])
    return result

print("['EURAUD', 'GBPAUD', 'AUDNZD', 'AUDUSD', 'AUDCAD', 'AUDCHF', 'AUDJPY'] -> ", generate_currency_matrix('AUD'))
print("['EURGBP', 'EURAUD', 'EURNZD', 'EURUSD', 'EURCAD', 'EURCHF', 'EURJPY'] -> ", generate_currency_matrix('EUR'))
print("['EURGBP', 'GBPAUD', 'GBPNZD', 'GBPUSD', 'GBPCAD', 'GBPCHF', 'GBPJPY'] -> ", generate_currency_matrix('GBP'))