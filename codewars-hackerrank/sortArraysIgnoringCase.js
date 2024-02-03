// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9


let sortme = names => names.sort((a, b) => a.localeCompare(b));
/*
let sortme = names => {
    names = names.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
        else if (a.toLowerCase() < b.toLowerCase())
            return -1;
        else 
            return 0; 
    })
    return names
}
*/

console.log(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortme(["CodeWars"]), ["CodeWars"])
console.log(sortme([]), [])
