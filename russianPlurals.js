function makePlural(options, number) {
    if (number % 10 >= 5 || number % 10 == 0 || (number % 100 > 10 && number % 100 <= 14)) 
        return options[2]
    else if ((number % 10 > 1 && number % 10 <= 4) && !(number % 100 > 10 && number % 100 <= 14))
     return options[1]
    else
        return options[0]
}

console.log(makePlural(['день', 'дня', 'дней'], 0) + ' => 0 дней')
console.log(makePlural(['день', 'дня', 'дней'], 1) + ' => 1 день')
console.log(makePlural(['день', 'дня', 'дней'], 2) + ' => 2 дня')
console.log(makePlural(['день', 'дня', 'дней'], 3) + ' => 3 дня')
console.log(makePlural(['день', 'дня', 'дней'], 4) + ' => 4 дня')
console.log(makePlural(['день', 'дня', 'дней'], 5) + ' => 5 дней')
console.log(makePlural(['день', 'дня', 'дней'], 11) + ' => 0 дней')
console.log(makePlural(['день', 'дня', 'дней'], 20) + ' => 0 дней')
console.log(makePlural(['день', 'дня', 'дней'], 21) + ' => 21 день')
console.log(makePlural(['день', 'дня', 'дней'], 22) + ' => 22 дня')
console.log(makePlural(['день', 'дня', 'дней'], 111) + ' => 111 дней')
console.log(makePlural(['день', 'дня', 'дней'], 13) + ' => 12 дней')