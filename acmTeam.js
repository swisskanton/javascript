function acmTeam(topic) {
    let topicsOfLine = []
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            
            topicsOfLine.push((parseInt(topic[i], 2) | parseInt(topic[j], 2)).toString(2).replaceAll('0', '').length)
                        
            /*
            var count = 0
            for (let k = 0; k < topic[0].length; k++) {
                if (parseInt(topic[i].substr(k, 1)) || parseInt(topic[j].substr(k, 1)))
                    count++
            }
            topicsOfLine.push(count)
            */
        }
    }
    let maxTopic = Math.max.apply(null, topicsOfLine)
    var count = 0
    let index = topicsOfLine.indexOf(maxTopic)
    //console.log(topicsOfLine, maxTopic)
    while (index > -1) {
        count++
        index = topicsOfLine.indexOf(maxTopic, index + 1)
    }
    return [maxTopic, count]
}

let topic = ['10101', '11110', '00010']
console.log('[5, 1]: ' + acmTeam(topic))
topic = ['10101', '11100', '11010', '00101']
console.log('[5, 2]: ' + acmTeam(topic))