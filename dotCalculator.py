def dotCalculator(str):
    a, op, b = str.split(" ")
    return "." * eval(f'{len(a)} {op} {len(b)}')

    """
    l = str.split(" ")
    return {"+" : len(l[0]) + len(l[2]), "-" : len(l[0]) - len(l[2]), "*" : len(l[0]) * len(l[2]), "//" : len(l[0]) // len(l[2]) }[l[1]] * "."
    """


print(dotCalculator("..... + ..............."), " => ....................")
print(dotCalculator("..... - ..." ), " => ..")
print(dotCalculator("..... - ."), " => ....")
print(dotCalculator("..... * ..."), " => ...............")
print(dotCalculator("..... * .."), " => ..........")
print(dotCalculator("..... // .."), " => ..")
print(dotCalculator("..... // ."), " => .....")
print(dotCalculator(". // .."), " => ")
print(dotCalculator(".. - .."), " => ")