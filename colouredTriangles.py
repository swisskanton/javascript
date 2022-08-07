def triangle(row):
    if len(row) != 1:
        while len(row) > 1:
            txt = ''
            for i in range(len(row) - 1):
                if row[i: i + 2] in ['BG', 'GB', 'RR']:
                    txt += 'R'
                elif row[i: i + 2] in ['RB', 'BR', 'GG']:
                    txt += 'G'
                elif row[i: i + 2] in ['RG', 'GR', 'BB']:
                    txt += 'B'
            row = txt
    return row

print(triangle('GB'), 'R')
print(triangle('RRR'), 'R')
print(triangle('RGBG'), 'B')
print(triangle('RBRGBRB'), 'G')
print(triangle('RBRGBRBGGRRRBGBBBGG'), 'G')
print(triangle('B'), 'B')