function dup(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        let newWord = word.substr(0, 1)
        for (let j = 0; j < word.length; j++) {
            if (newWord[newWord.length - 1] != word.substr(j, 1))
                newWord += word.substr(j, 1)
        }
        result.push(newWord)
    }
    return result
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),'\n',['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),'\n',['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), '\n',['keles','kenes'])
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), '\n',['Wolomolo','flodoromonlighters','chuchchi'])
console.log(dup(["adanac","soonness","toolless","ppellee"]), '\n',['adanac','sones','toles','pele'])
console.log(dup(["callalloo","feelless","heelless"]), '\n',['calalo','feles','heles'])
console.log(dup(["putteellinen","keenness"]), '\n',['putelinen','kenes'])
console.log(dup(["kelless","voorraaddoosspullen","achcha"]), '\n',['keles','voradospulen','achcha'])