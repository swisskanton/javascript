def reverse_alternate(string):
    words = string.split(' ')
    words = [x for x in words if x != '']
    result = ''
    for i in range(len(words)):
        result += words[i][::-1] + ' ' if i % 2 == 1 else words[i] + ' '
    return result[:-1]


print(reverse_alternate("Did it  work?"), "> Did ti work?")
print(reverse_alternate("I really hope it works this time..."), "> I yllaer hope ti works siht time...")
print(reverse_alternate("Reverse this string, please!"), "> Reverse siht string, !esaelp")
print(reverse_alternate("Have a beer"), "> Have a beer")
print(reverse_alternate(""), "> ")