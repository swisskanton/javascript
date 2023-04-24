"""
Complete the powerSum function in the editor below.
It should return an integer that represents the number of possible combinations.

power_sum has the following parameter(s):
X: the integer to sum to
N: the integer power to raise numbers to
    Input Format
The first line contains an integer X. / 1 <= X <= 1000
The second line contains an integer N  / 2 <= N <= 10
    Output Format
Output a single integer, the number of possible combinations caclulated.
    power_sum(10, 2) = 1        / 1^2 + 3^2
    power_sum(100, 2) = 3       / 10^2, 6^2 + 8^2, 1^2 + 3^2 + 4^2 + 5^2 + 7^2
    power_sum(1000, 3) = 1      / 1^3 + 2^3 + 3^3 + 4^3
"""
import itertools

def power_sum(x, n):

    powers = [i ** n for i in range(1, int(x ** (1 / n) + 1) + 1) if i ** n <= x]
    res = 0
    for i in range(1, len(powers) + 1):
        for lst in list(itertools.combinations(powers, i)):
            temp = int(sum(list(lst)))
            if temp == x:
                res += 1
    return res

print(power_sum(10, 2), 1)
print(power_sum(100, 2), 3)
print(power_sum(100, 3), 1)
print(power_sum(1000, 3), 1)
#print(power_sum(800, 2), 561)