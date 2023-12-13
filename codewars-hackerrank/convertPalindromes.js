function convertPalindromes(numbers) {
    result = []
    for (let x in numbers) {
        var str = numbers[x] + ''
        addPalindrom = 1
        for (let i = 0; i < parseInt(str.length / 2); i++) {
            if (str[i] != str[str.length - 1 - i]) {
            addPalindrom = 0
            break
            }
        }
        result.push(addPalindrom)
    }
    return result
  };


  console.log(convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0])
  console.log(convertPalindromes([653, 808, 5]), [0, 1, 1])
  console.log(convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1])
