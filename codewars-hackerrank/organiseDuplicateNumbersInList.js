// https://www.codewars.com/kata/5884b6550785f7c58f000047

function group(arr) {
    let count = {};
    let uniques = [];
    let res = [];
    arr.forEach(num => {
        count[num] ? count[num] += 1 : count[num] = 1;
        uniques.includes(num) ? '' : uniques.push(num);
    });
    uniques.forEach(num => {
        let temp = [num];
        for (let i = 1; i < count[num]; i++) {
            temp.push(num);
        }
        res.push(temp)
    })
    return res;
}

console.log(group([3, 2, 6, 2, 1, 3]) + " >>> [[3, 3], [2, 2], [6], [1]]");
console.log(group([3, 2, 6, 2]) + " >>> [[3], [2, 2], [6]]");
console.log(group([]) + " >>> []");
console.log(group([1, 100, 4, 2, 4]) + " >>> [[1], [100], [4, 4], [2]]");
console.log(group([-1, 1, -1]) + " >>> [[-1, -1], [1]]");