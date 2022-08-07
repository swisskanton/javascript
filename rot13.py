def rot13(message):
    result = ''
    for i in range(len(message)):
        if message[i].isalpha():
            if message[i].isupper():
                result += chr(65 + (ord(message[i]) - 65 + 13) % 26)
            else:
                result += chr(97 + (ord(message[i]) - 97 + 13) % 26)
        else:
            result += message[i]
    return result

print(rot13("EBG13 rknzcyr."), "\nROT13 example.\n")
print(rot13("How can you tell an extrovert from an\nintrovert at NSA? Va gur ryringbef,\ngur rkgebireg ybbxf ng gur BGURE thl'f fubrf."), "\nUbj pna lbh gryy na rkgebireg sebz na\nvagebireg ng AFN? In the elevators,\nthe extrovert looks at the OTHER guy's shoes.\n")
print(rot13("123"), "\n123\n")
print(rot13("Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)"), "\nThis is actually the first kata I ever made. Thanks for finishing it! :)\n")
print(rot13("@[`{"), "\n@[`{")