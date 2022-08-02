function solution(number) {
    let sum = 0
    if (number > 0) {
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0)
                sum += i;
        }
    }
    return sum
}

console.log(23, solution(10))
console.log(3, solution(4))