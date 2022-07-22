let lista = [10, 5, 20, 20, 4, 5, 2, 25, 1]
var min = lista [0]
var max = lista [0]

for (let i = 0; i < lista.length; i++) {
    if (min > lista[i])
        min = lista[i]
    
        if (max < lista[i])
        max = lista[i]
}

console.log(min + ', ' + max)