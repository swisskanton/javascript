def to_camel_case(text):
    if len(text) > 0:
        text = text.replace('-', ' ')
        text = text.replace('_', ' ')
        firstLetter = text[0]
        text = text.title()
        text = text.replace(' ', '')
        text = firstLetter + text[1:]
    return text

print(to_camel_case(''), ' > ')
print(to_camel_case("the_stealth_warrior"), " > theStealthWarrior")
print(to_camel_case("The-Stealth-Warrior"), " > TheStealthWarrior")
print(to_camel_case("A-B-C"), " > ABC")