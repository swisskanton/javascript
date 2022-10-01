def switcher(arr):
    spec = {'27': '!', '28': '?', '29': ' '}
    text = ''
    for x in arr:
        text += spec.get(x) if spec.get(x) else chr(123 - int(x))
    return text

print(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars')
print(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw')
print(switcher(['4', '24']), 'wc')
print(switcher(['12']), 'o')
print(switcher(['12','28','25','21','25','7','11','22','15']), 'o?bfbtpel' )