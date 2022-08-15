def nth_fib(n):
  fib, fib_1 = 0, 1
  for i in range(n - 1):
    fib, fib_1 = fib_1, fib + fib_1
  return fib


print(nth_fib(1), 0, "1-st Fibo")
print(nth_fib(2), 1, "2-nd Fibo")
print(nth_fib(3), 1, "3-rd Fibo")
print(nth_fib(4), 2, "4-th Fibo")
print(nth_fib(5), 3, "5-th Fibo")
print(nth_fib(6), 5, "6-th Fibo")
print(nth_fib(7), 8, "7-th Fibo")