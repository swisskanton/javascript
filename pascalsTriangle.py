def pascals_triangle(n):
  result = []
  for i in range(n):
    for j in range(i + 1 ):
      result.append(binomial(i, j))
  return result

def binomial(n, k):
  subresult = 1
  for i in range(n, n-k, -1):
    subresult *= i
  return int(subresult / factorial(k))

def factorial(n):
  if n <= 1:
    return 1
  else:
    return n * factorial(n - 1)

print(pascals_triangle(1), [1],"1 level triangle incorrect")
print(pascals_triangle(2), [1,1,1],"2 level triangle incorrect")
print(pascals_triangle(3), [1,1,1,1,2,1],"3 level triangle incorrect")
print(pascals_triangle(5), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1],"5 level triangle incorrect")
#pascals_triangle(60)
#print(pascals_triangle(60))