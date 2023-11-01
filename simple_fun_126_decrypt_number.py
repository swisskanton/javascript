"""
Smartphones software security has become a growing concern related to mobile telephony.
It is particularly important as it relates to the security of available personal information.

For this reason, Ahmed decided to encrypt phone numbers of contacts in such a way that nobody can decrypt them.
At first he tried encryption algorithms very complex, but the decryption process is tedious,
especially when he needed to dial a speed dial.

He eventually found the algorithm following: instead of writing the number itself,
Ahmed multiplied by 10, then adds the result to the original number.

For example, if the phone number is 123, after the transformation, it becomes 1353.
Ahmed truncates the result (from the left), so it has as many digits as the original phone number.
In this example Ahmed wrote 353 instead of 123 in his smart phone.

Ahmed needs a program to recover the original phone number from number stored on his phone.
The program return "impossible" if the initial number can not be calculated.

Note: There is no left leading zero in either the input or the output;
Input s is given by string format, because it may be very huge ;-)

Example
For s="353", the result should be "123"

   1230
 +  123
 .......
 = 1353

 truncates the result to 3 digit -->"353"

 So the initial number is "123"
For s="123456", the result should be "738496"

   7384960
 +  738496
 .........
 = 8123456

 truncates the result to 6 digit -->"123456"

 So the initial number is "738496"
"""

def decrypt_number(s):
    num = int('9' + s)
    phone_number = 0
    for i in range(len(s)):
        digit = num % 10
        phone_number += 10 ** i * digit if i > 0 else digit
        num //= 10
        num -= digit
    return str(phone_number) if str(int(str(phone_number + phone_number * 10)[1:])) == s else 'impossible'


print(decrypt_number('353') == '123')
print(decrypt_number('123456') == '738496')
print(decrypt_number('4334') == 'impossible')