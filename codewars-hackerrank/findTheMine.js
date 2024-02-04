// https://www.codewars.com/kata/528d9adf0e03778b9e00067e

function mineLocation(field){
    for (let i = 0; i < field.length; i++)
        if (field[i].includes(1))
            return [i, field[i].indexOf(1)];
}


console.log(mineLocation([[1, 0], [0, 0]]) + " -> [0, 0]");
console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]]) + " -> [0, 0]");
console.log(mineLocation([[0, 0, 0], [0, 0, 1], [0, 0, 0]]) + " -> [1, 2]");
console.log(mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]) + " -> [2, 2]");