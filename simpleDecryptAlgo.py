def decrypt(test_key):
    result = ''
    for x in 'abcdefghijklmnopqrstuvwxyz':
        result += str(test_key.count(x))
    return result

print('43200300000000000000000001 > ', decrypt('$aaaa#bbb*cc^fff!z'))
print('30303000000000000000000001 > ', decrypt('z$aaa#ccc%eee1234567890'))