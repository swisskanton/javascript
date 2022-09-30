def reverse_words(text):
    word = ''
    result = ''
    for i in range(len(text)):
        if text[i] == ' ' or i == len(text) - 1:
            if text[i] == ' ':
                result += word[::-1] + ' '
            else:
                word += text[i]
                result += word[::-1]
            word = ''
        else:
            word += text[i]
    return result

print(reverse_words("This is an example!"), " ==> sihT si na !elpmaxe")
print(reverse_words("double  spaces"), " ==> elbuod  secaps")