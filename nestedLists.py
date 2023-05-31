"""
Given the names and grades for each student in a class of N students, store them in
a nested list and print the name(s) of any student(s) having the second lowest grade.
Note: If there are multiple students with the second lowest grade, order their names
alphabetically and print each name on a new line.
Example
records = [["chi", 20.0],["beta", 50.0],["alpha", 50.0]]
The ordered list of scores is [20.0, 50.0], so the second lowest score is 50.0.
There are two students with that score: ["beta","alpha"]. Ordered alphabetically,
the names are printed as:
alpha
beta
"""

if __name__ == '__main__':
    records = []
    students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
    for s in students:
        name = s[0]
        score = s[1]
        i = 0
        if len(records) > 0:
            while i < len(records) and records[i][1] < score:
                i += 1
            if i < len(records) and records[i][1] == score:
                while i < len(records) and records[i][0] < name:
                   i += 1
            records.insert(i, [name, score])
        else:
            records.append([name, score])
    score = records[0][1]
    changed = False
    for i in range(len(records)):
        if records[i][1] > score and not changed:
            score = records[i][1]
            changed = True
        if changed and records[i][1] == score:
            print(records[i][0])