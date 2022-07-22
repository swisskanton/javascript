function birthdayCakeCandles(candles) {
    // Write your code here
    /*var max = Math.max.apply(null, candles);
    candles.sort();
    var count = 0;
    if (candles.length == 1) {
        return 1;
    }
    var i = candles.length - 1;
    console.log('max: ' + max);
    console.log(candles.toString());
    while (candles[i] == max) {
        i--;
        count++;
    }
    return count;*/

    var count = 0;
    var max = candles[0];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            count++;
        } else if(candles[i] > max) {
            max = candles[i];
            count = 1;
        } 
    }
    return count;
}

candles = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
     1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
       1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
        1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
         1000, 1000,, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 100];

//candles = [10, 1, 2, 15, 20, 20, 15];
console.log(birthdayCakeCandles(candles));