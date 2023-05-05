"""
    HackerRank exercise
Given a string of lowercase letters in the range ascii[a-z], determine the index of
a character that can be removed to make the string a palindrome. There may be more than
one solution, but any will do. If the word is already a palindrome or there is no
solution, return -1. Otherwise, return the index of a character to remove.
    Example
s = "bcbc
Either remove 'b' at index 0 or 'c' at index 3.

    Function Description
Complete the palindromeIndex function in the editor below.
palindromeIndex has the following parameter(s):
 - string s: a string to analyze
    Returns
int: the index of the character to remove or -1
    Input Format
The first line contains an integer q, the number of queries.
Each of the next q lines contains a query string s.
"""

def palindromeIndex(s):
    if s == s[::-1]:
        return -1
    for i in range(len(s) // 2 + 1):
        if s[i] != s[len(s) - 1 - i]:
            p = s[:i] + s[i + 1:]
            p1 = s[:len(s) - 1 - i] + s[len(s) - i:]
            if p == p[::-1]:
                return i
            elif p1 == p1[::-1]:
                return len(s) - 1 - i
    return -1


if __name__ == '__main__':
    print(3, palindromeIndex('aaab'))
    print(0, palindromeIndex('baa'))
    print(-1, palindromeIndex('aaa'))