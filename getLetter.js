function getLetter(s) {
    let letter;
    switch (Math.trunc("aeioubcdfghjklmnpqrstvwxyz".indexOf(s[0]) / 5)) {
        case 0 :
            letter='A';
            break;
        case 1 :
            letter='B'
            break;
        case 2 :
            letter='C';
            break;
        default:
            letter='D'
    }
    return letter;
}

console.log(getLetter("ebreak"))
console.log(getLetter("fbreak"))
console.log(getLetter("lbreak"))
console.log(getLetter("qbreak"))
console.log(getLetter("sbreak"))
console.log(getLetter("cbreak"))