function strongPassword(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = [0-9]//"0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    let result = 0
    if (password.search(/[A-Z]/) < 0) result ++
    if (password.search(/[a-z]/) < 0) result ++
    if (password.search(/[0-9]/) < 0) result ++
    if (password.search(/[!@#$%^&*()+-]/) < 0) result ++
    if (n + result < 6) result += 6 - n - result
    return result
}

let password = 'AUzs-nV'
console.log(1 + ': ' + strongPassword(password.length, password))
password = 'Ab1'
console.log(3 + ': ' + strongPassword(password.length, password))
password = '2bb#A'
console.log(1 + ': ' + strongPassword(password.length, password))
password = '#HackerRank'
console.log(1 + ': ' + strongPassword(password.length, password))