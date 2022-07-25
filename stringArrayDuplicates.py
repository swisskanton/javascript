def dup(arry):
    result = []
    for word in arry:
        newWord = word[0]
        for i in range(len(word)):
            if newWord[-1] != word[i]:
                newWord += word[i]
        result.append(newWord)
    return result

print(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
print(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
print(dup(["kelless","keenness"]), ['keles','kenes'])
print(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi'])
print(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele'])
print(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles'])
print(dup(["putteellinen","keenness"]), ['putelinen','kenes'])
print(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha'])