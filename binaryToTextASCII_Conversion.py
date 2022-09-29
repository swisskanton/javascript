def binary_to_string(binary):
    if binary == '': return binary
    binary_int = int(binary, 2)
    byte_number = binary_int.bit_length() + 7 // 8
    binary_array = binary_int.to_bytes(byte_number, 'big')
    ascii_text = binary_array.decode()
    return ascii_text[len(binary) // 8 * -1:]

"""
    result = ""
    while binary:
        result += chr(int(binary[:8], 2))
        binary = binary[8:]
    return result
"""

print(binary_to_string('0100100001100101011011000110110001101111'), 'Hello')
print(binary_to_string('00110001001100000011000100110001'), '1011')