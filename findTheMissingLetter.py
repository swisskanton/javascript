def find_missing_letter(chars):
    letter_code = ord(chars[0])
    for x in chars:
        if ord(x) == letter_code:
            letter_code += 1
        else:
            break
    return chr(letter_code)


print(find_missing_letter(['a','b','c','d','f']), 'e')
print(find_missing_letter(['O','Q','R','S']), 'P')