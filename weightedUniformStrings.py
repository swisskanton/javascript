"""
A weighted string is a string of lowercase English letters where each letter has a weight.
Character weights are 1 to 26 from "a" to "z" (a = 1, b = 2, c = 3, ..., z = 26).
    - The weight of a string is the sum of the weights of its characters.
    - A uniform string consists of a single character repeated zero or more times.
    For example, ccc and a are uniform strings, but bcb and cd are not.
Given a string, s, let U be the set of weights for all possible uniform contiguous substrings
of string s. There will be n queries to answer where each query consists of a single integer.
Create a return array where for each query, the value is "Yes" if query[i] in U.
Otherwise, append "No".
    Example:
        s = "abbcccddd"
        query = [1,7,5,4,15]
        Than U = [1,2,4,3,6,9,4,8,12,16] because
        a = 1, b = 2, bb = 4, c = 3, cc = 6, ccc = 9, d = 4, dd = 8, ddd = 12, dddd = 16.
    Solution:
        ['Yes', 'No', 'No', 'Yes', 'No']
"""
def weightedUniformStrings(s, queries):
    weights = set()
    prev = ''
    for x in s:
        if prev != x:
            value = ord(x) - 96
            prev = x
        else:
            value += ord(x) - 96
        weights.add(value)
    return ['Yes' if x in weights else 'No' for x in queries]

if __name__ == '__main__':
    print("['Yes', 'No', 'No', 'Yes', 'No'] --> ", weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]))
    print("['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No'] --> ", weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]))