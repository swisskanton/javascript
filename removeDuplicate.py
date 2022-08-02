def remove_duplicate_ids(obj):
    keys = []
    result = {}
    for x in obj.keys():
        keys.append(int(x))
    keys.sort()
    values = []

    for k in range(len(keys) - 1, -1, -1):
        key_value = []
        for v in obj[str(keys[k])]:
            if not(v in values):
                key_value.append(v)
                values.append(v)
        result[str(keys[k])] = key_value

    return result

a = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],

}
print(remove_duplicate_ids(a), '\n{"1": ["C"],\n"2": ["A", "B", "D"]}')