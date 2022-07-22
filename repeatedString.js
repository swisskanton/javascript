function repeatedString(s, n) {
    // Write your code here
    var occours = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a') {
            occours++;
        }
    }
    var howMany = parseInt(n / s.length);
    var modulo = n % s.length;
    var rest = 0;
    for (let i = 0; i < modulo; i++) {
        if (s[i] == 'a') {
            rest++;
        }
    }
    return occours * howMany + rest;
}

var s ='aba';
var n = 10;
console.log(repeatedString(s, n));
var s ='a';
var n = 100000;
console.log(repeatedString(s, n));