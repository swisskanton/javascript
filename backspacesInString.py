def clean_string(s):
    result = ''
    index = -1
    back = 0
    while -len(s)<= index:
        if s[index] == '#':
            back += 1
        else:
            if back == 0:
                result = s[index] + result
            else:
                back -= 1
        index -= 1
    return result


print(1, clean_string('abc#d##c'), 'ac')
print(2, clean_string('abc##d######'), '')
print(3, clean_string('#######'), '')
print(4, clean_string(''), '')
print(5, clean_string('ab#cd#efg#h'), 'acefh')