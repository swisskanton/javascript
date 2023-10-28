"""
Given integers n, l and r, find the number of ways to represent n
as a sum of two integers A and B such that
l ≤ A ≤ B ≤ r.

Example
For n = 6, l = 2 and r = 4, the output should be 2

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4:

6 = 2 + 4 and 6 = 3 + 3
"""

def count_sum_of_two_representations(n, l, r):
    a = max(n - r, l)
    b = min(n - l, r)
    return max((b-a)//2 + 1, 0)


"""
def count_sum_of_two_representations(n, l, r):
    count = set()
    for i in range(l, r + 1):
        j = n - i
        if l <= j <= r:
            count.add(i)
    return len(count) // 2 + len(count) % 2
"""

print(count_sum_of_two_representations(6,2,4) == 2)
print(count_sum_of_two_representations(6,3,3) == 1)
print(count_sum_of_two_representations(10,9,11) == 0)
print(count_sum_of_two_representations(24,8,16) == 5)
print(count_sum_of_two_representations(24,12,12) == 1)
print(count_sum_of_two_representations(93,24,58) == 12)

print(count_sum_of_two_representations(471998, 183478, 301613) == 52522)