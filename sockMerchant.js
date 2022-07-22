function sockMerchant(n, ar) {
    
    ar.sort();
    var pairs = 0;
    if (n < 2) {
        return pairs;
    }
    for (let i = 0; i < n; i++) {
        console.log('i: ' + i);
        console.log('ar: ' + ar[i] + ' : ' + ar[i+1]);
        if (ar[i] == ar[i+1]) {
            pairs++;
            console.log('pairs: ' + pairs);
            if (i+2 < n) {
                i = i + 1;
            }
        } 
    }
    return pairs;
}

var n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar));