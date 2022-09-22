def hex_hash(code):
    txt = "".join("{:02x}".format(ord(c)) for c in code)
    sum = 0
    for x in txt:
        sum += int(x) if x.isdigit() else 0
    return sum

print(hex_hash('kcxnjsklsHskjHDkl7878hHJk'), '< 218')
print(hex_hash(''), ' < 0')
print(hex_hash(''), ' < 0')
print(hex_hash('dhsajkbfyewquilb4y83q903ybr8q9apf7\9ph79qw0-eq230br[wq87r0=18-[#20r370B 7Q0RFP23B79037902RF79WQ0[]]]'), ' < 802')