function acmTeam(topic) {
    let max = -Infinity
    let numbers = new Map()
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let temp = 0 //(parseInt(topic[i], 2) | parseInt(topic[j], 2)).toString(2).replaceAll('0', '').length
            for (let k = 0; k < topic[0].length; k++) {
                temp += parseInt(topic[i][k] | topic[j][k])
            }
            if (max < temp)
                max = temp
            if (numbers.has(temp)) {
                numbers.set(temp, numbers.get(temp) + 1)
            } else {
                numbers.set(temp, 1)
            }
        }
    }
    return [max, numbers.get(max)]
}

topic = ['10101', '11110', '00010']
console.log('[5, 1]: ' + acmTeam(topic))
topic = ['10101', '11100', '11010', '00101']
console.log('[5, 2]: ' + acmTeam(topic))
