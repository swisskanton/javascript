function jumpingOnClouds(c) {
    var jumps = 0;
    var i = 0;
    var count = 0;
    while (i < c.length) {    
        if (c[i + 2] == 0) {
            jumps++;
            i = i + 2;
        } else if (c[i + 1] == 0) {
            jumps++;
            i++;
        } else {
            i++;
        }
    }
    return jumps;
}

var c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
var c = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));

var c = [0, 0, 0, 1, 0, 0];
console.log(jumpingOnClouds(c));