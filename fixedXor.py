def fixed_xor(a, b):
    if a == "" or b == "":
        return ""
    if len(a) > len(b):
        a = a[:len(b)]
    else:
        b = b[:len(a)]
    z = int(a, 16) ^ int(b, 16)
    return str(hex(z))[2:].zfill(len(a))

print(fixed_xor('ab3f', 'ac'), '>>07')
print(fixed_xor('aadf', 'bce2'), '>>163d')
print(fixed_xor('', ''), '>>')
print(fixed_xor('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'), '>>746865206b696420646f6e277420706c6179')
