function timeConversion(s) {
    
    if (s.includes('AM')) {
        if (s.substring(0,2) == '12') {
            return '00'.concat(s.substring(2, 8));
        } else {
            return s.substring(0, 8);
        }
    } else {
        if (s.substring(0,2) == '12') {
            return s.substring(0, 8);
        } else {
            return String(12 + parseInt(s.substring(0, 2))).concat(s.substring(2, 8));
        }
    }

}

var s = '07:05:45PM';
console.log(s + ' > ' + timeConversion(s));
s = '07:05:00AM';
console.log(s + ' > ' + timeConversion(s));
s = '12:00:00PM';
console.log(s + ' > ' + timeConversion(s));
s = '12:00:00AM';
console.log(s + ' > ' + timeConversion(s));