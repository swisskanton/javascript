def pig_it(text):
    words = text.split(' ')
    letter = ''
    result = []
    for x in words:
        if len(x) > 0:
            i = 0
            while i < len(x) and not (x[i].isalpha()):
                i += 1
            if i < len(x):
                letter = x[i]
            if i + 1 < len(x):
                x = x[:i] + x[i + 1:]
            else:
                x = x[:i]
            i = len(x) - 1
            while i >= 0 and not (x[i].isalpha()):
                i -= 1
            if letter != '':
                result.append(x[:i+1] + letter + 'ay' + x[i+1:])
            else:
                result.append(x)
            letter = ''
    return ' '.join(result)

print(pig_it('Pig latin is cool'),'\n>igPay atinlay siay oolcay')
print(pig_it('This is my string'),'\n>hisTay siay ymay tringsay')
print(pig_it("Thoms' bike, car and my toy"),"\n>homs'Tay ikebay, arcay ndaay ymay oytay")
print(pig_it(' This. '),'\n> hisTay. ')
print(pig_it('Big D'),'\n>igBay Day')
print(pig_it("You should 'pig' "),"\n>ouYay houldsay 'igpay' ")
print(pig_it("O tempora o mores !"),"\n>Oay emporatay oay oresmay !")
print(pig_it("Quis custodiet ipsos custodes ?"),"\n>uisQay ustodietcay psosiay ustodescay ?")
