def valid_braces(string):
    while string.find('()') > -1 or string.find('[]') > -1 or string.find('{}') > -1:
        string = string.replace('()', '')
        string = string.replace('[]', '')
        string = string.replace('{}', '')
    return True if len(string) == 0 else False

print(valid_braces("(){}[]"), '  =>  True')
print(valid_braces("([{}])"), '  =>  True')
print(valid_braces("(}" ), '  =>  False')
print(valid_braces("[(])" ), '  =>  False')
print(valid_braces("[({})](]"), '  =>  False')