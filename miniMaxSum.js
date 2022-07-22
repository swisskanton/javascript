function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let sum = 0;
    for (let i = 0; i< 5; i++) {
        sum += arr[i];
    }
    console.log(sum-max, sum-min);
    
}

arr = [1, 3, 5, 7, 9]
miniMaxSum(arr)
arr = [1, 2, 3, 4, 5]
miniMaxSum(arr)