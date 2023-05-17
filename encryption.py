import math


def encryption(s):
    result = ''
    row = math.floor(math.sqrt(len(s)))
    row += 1 if row * row < len(s) else 0
    col = math.ceil(math.sqrt(len(s)))
    for i in range(row):
        for j in range(col):
            if i + j * col < len(s):
                result += s[i + j * col]
        result += ' '
    result = result.strip()
    return result

if __name__ == '__main__':
    print(encryption('haveaniceday'), '=> hae and via ecy')
    print(encryption('feedthedog'), '=> fto ehg ee dd')
    print(encryption('chillout'), '=> clu hlt io')
    print(encryption('iffactsdontfittotheorychangethefacts'), '=> isieae fdtonf fotrga anoyec cttctt tfhhhs')
    #print(encryption(), '=> ')
    #print(encryption(), '=> ')