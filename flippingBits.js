function flippingBits(n) {
    return (~n >>> 0).toString(10)
}

let numbers = [2147483647, 1, 0, 4, 123456, 802743475, 35601423]
let results = [2147483648, 4294967294, 4294967295, 4294967291, 4294843839, 3492223820, 4259365872]
for (let i = 0; i < 7; i++) {
    console.log(results[i], flippingBits(numbers[i]), results[i] - flippingBits(numbers[i]))
}
