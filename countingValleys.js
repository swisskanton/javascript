function countingValleys(steps, path) {
    var height = 0;
    var vallyCounter = 0;
    var valleys = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] == 'D') {
            height--;
        } else {
            height++;
        }
        if (height < 0) {
            vallyCounter = 1;
        }
        if (height == 0) {
            valleys += vallyCounter;
            vallyCounter = 0;
        }
    }
    return valleys;
}

var n = 8;
var path = 'UDDDUDUU';
console.log(countingValleys(n, path));