def is_uppercase(inp):
    for i in inp:
        if i.isalpha():
            if i.islower():
                return False
    return True

print(is_uppercase("c"), ' -> False')
print(is_uppercase("C"), ' -> True')
print(is_uppercase("hello I AM DONALD"), ' -> False')
print(is_uppercase("HELLO I AM DONALD"), ' -> True')
print(is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ"), ' -> False')
print(is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ"), ' -> True')
print(is_uppercase("$%&"), ' -> True')