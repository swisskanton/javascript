function rotLeft(a, d) {
    
    var rotate = d % a.length;
    console.log(d, a.length, rotate);
    for (let i = 0; i < rotate; i++) {
        var element = a.shift();
        a.push(element);
    }
    return String(a);
}

var a = [1, 2, 3, 4, 5];
d = 4;
console.log(rotLeft(a, d));