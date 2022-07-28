function valid_parentheses(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '(')
            count +=1
        if (string[i] == ')')
            count -=1
        if (count < 0)
            return false
    }
    return count == 0 ? true : false
}

console.log(valid_parentheses("  ("), "False, should work for '  ('")
console.log(valid_parentheses(")test"), "False, should work for ')test'")
console.log(valid_parentheses(""), "True, should work for ''")
console.log(valid_parentheses("hi())("), "False, should work for 'hi())('")
console.log(valid_parentheses("hi(hi)()"), "True, should work for 'hi(hi)()'")