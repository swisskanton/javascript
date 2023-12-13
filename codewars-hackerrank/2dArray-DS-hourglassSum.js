function hourglassSum(arr) {
    
    var sum = 0;
    var max = -Infinity;
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            //console.log(arr[i-1][j-1], arr[i-1][j], arr[i-1][j+1], arr[i][j], arr[i+1][j-1], arr[i+1][j], arr[i+1][j+1]);
            if (max < sum) {
                max = sum;
            }
        }
    }
    return max;
}

var arr = [[1, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0],
          [1, 1, 1, 0, 0, 0],
          [0, 0, 2, 4, 4, 0],
          [0, 0, 0, 2, 0, 0], 
          [0, 0, 1, 2, 4, 0]];

console.log(hourglassSum(arr));
