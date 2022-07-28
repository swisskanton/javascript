//whichAreIn.js
function in_array(array1, array2){
    result = []
    for (word of array1) {

        if (result.indexOf(word) < 0) {
            for (word2 of array2) {
                if (result.indexOf(word) >= 0)
                    break
                if (word2.search(word) >= 0)
                    result.push(word)

            }
        }
    }
    if (result.length > 1)
        result.sort()
    return result
}

array1 = ["live", "arp", "strong"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(in_array(array1, array2), ['arp', 'live', 'strong'])

array1 = ["tarp", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(in_array(array1, array2), [])

array1 = ["arp", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(in_array(array1, array2), ['arp'])