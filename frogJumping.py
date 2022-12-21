def jumping(arr):
    count = 0
    current_position = 0
    positions = [0]
    while current_position >= 0 and current_position < len(arr):
        current_position += arr[current_position]
        count += 1
        if current_position in positions:
            return -1
        else:
            positions.append(current_position)
    return count

print(jumping([1, 2, 1, 5]))
print(jumping([1, 2, 1, -3]))
print(jumping([1, -2, 1, 5]))
print(jumping([5, 2, 1, 5]))