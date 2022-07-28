def valid_parentheses(string):
    count = 0
    for x in string:
        if x == '(':
            count +=1
        if x == ')':
            count -=1
        if count < 0:
            return False
    return True if count == 0 else False


print(valid_parentheses("  ("),False, "should work for '  ('")
print(valid_parentheses(")test"),False, "should work for ')test'")
print(valid_parentheses(""),True, "should work for ''")
print(valid_parentheses("hi())("),False, "should work for 'hi())('")
print(valid_parentheses("hi(hi)()"),True, "should work for 'hi(hi)()'")