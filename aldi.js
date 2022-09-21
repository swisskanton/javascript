var arr1 = [1, 2, 3];
var arr2 = [4, 3, 5];
var answer = false;
for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1) {
        answer = true;
        break;
    }
}
console.log(answer);