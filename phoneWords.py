def phone_words(n):
    import re
    code = {0: ' ', 2: 'a', 22: 'b', 222: 'c', 3: 'd', 33: 'e', 333: 'f', 4: 'g', 44: 'h', 444: 'i', 5: 'j', 55: 'k', 555: 'l', 6: 'm', 66: 'n', 666: 'o', 7: 'p', 77: 'q', 777: 'r', 7777: 's', 8: 't', 88: 'u', 888: 'v', 9: 'w', 99: 'x', 999: 'y', 9999: 'z'}
    nums = re.findall('0|2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}', n)
    """
    nums = re.findall("[0]|[2]+|[3]+|[4]+|[5]+|[6]+|[7]+|[8]+|[9]+", n)
    i = 0
    while i < len(nums):
        if len(nums[i]) > 3:
            if nums[i][0] in '79' and len(nums[i]) > 4:
                nums.insert(i, nums[i][:4])
                nums.insert(i + 1, nums[i + 1][4:])
                nums.pop(i + 2)
            elif nums[i][0] in '234568':
                nums.insert(i, nums[i][:3])
                nums.insert(i + 1, nums[i + 1][3:])
                nums.pop(i + 2)
        i += 1
    """
    result = ''
    for x in nums:
        result += code[int(x)]
    return result


print(phone_words('443355555566604466690277733099966688'), " 443355555566604466690277733099966688  -->  hello how are you")
print(phone_words('55282'), " 55282 -->  kata")
print(phone_words('22266631339277717777'), " 22266631339277717777 -->  codewars")
print(phone_words('66885551555'), " 66885551555 -->  null")
print(phone_words('833998'), " 833998 -->  text")
print(phone_words('000'), " 000 -->  '   '")
print(phone_words('77177779999'), " 77177779999 --> qsz")
print(phone_words('7777779999999997777'), " 7777779999999997777 -->  sqzzws")