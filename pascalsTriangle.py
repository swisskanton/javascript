def pascals_triangle(n):
  result = []
  line = ''
  for i in range(n):
    line = ''
    for j in range(i + 1 ):
      line += str(binomial(i, j)) + ', '
      result.append(binomial(i, j))
    print(line + '\n')
  return result

def binomial(n, k):
  return int(factorial(n) / (factorial(k) * factorial(n - k)))

def factorial(n):
  fact = 1
  for i in range(1, n + 1):
    fact *= i
  return fact
"""
print(pascals_triangle(1), [1],"1 level triangle incorrect")
print(pascals_triangle(2), [1,1,1],"2 level triangle incorrect")
print(pascals_triangle(3), [1,1,1,1,2,1],"3 level triangle incorrect")
print(pascals_triangle(5), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1],"5 level triangle incorrect")
"""
pascals_triangle(60)
#print(pascals_triangle(60))