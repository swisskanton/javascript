def in_array(array1, array2):
    result = []
    for word in array1:
        if not(word in result):
            for word2 in array2:
                if (word in result):
                    break
                if word in word2:
                    result.append(word)
    if len(result) > 1:
        result.sort()
    return result


array1 = ["live", "arp", "strong"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
print(in_array(array1, array2), ['arp', 'live', 'strong'])

array1 = ["tarp", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
print(in_array(array1, array2), [])

array1 = ["arp", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
print(in_array(array1, array2), ['arp'])