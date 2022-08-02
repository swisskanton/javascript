function remove_duplicate_ids(obj) {
    let keys = []
    for (let x in obj) {
        keys.push(parseInt(x))
    }
    keys.sort()
    let result = {}
    let values = []
    
    
    for (let k = keys.length - 1; k > -1 ; k--) {
        let key_value = []
        let key = String(keys[k])
        
        for (let v of obj[key]) {
            if (values.indexOf(v) < 0) {
                key_value.push(v)
                values.push(v)
            }
        }
        result[key] = key_value
        
    }
    return result
}

let a = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],

}
console.log(remove_duplicate_ids(a), '\n{"1": ["C"],\n"2": ["A", "B", "D"]}')