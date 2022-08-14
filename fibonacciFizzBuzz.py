def fibs_fizz_buzz(n):
    result = []
    fib_1, fib = 0, 1
    for i in range(n):
        item = ''
        if fib % 3 == 0:
            item += 'Fizz'
        if fib % 5 == 0:
            item += 'Buzz'
        if item == '':
            item = fib
        result.append(item)
        fib_1, fib = fib, fib_1 + fib
    return result

print(fibs_fizz_buzz(2), '\n', [1, 1])
print(fibs_fizz_buzz(5), '\n', [1, 1, 2, 'Fizz', 'Buzz'])
print(fibs_fizz_buzz(7), '\n', [1, 1, 2, 'Fizz', 'Buzz', 8, 13])
print(fibs_fizz_buzz(10), '\n', [1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz'])
print(fibs_fizz_buzz(15), '\n', [1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz', 89, 'Fizz', 233, 377, 'Buzz'])
print(fibs_fizz_buzz(20), '\n', [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"])
print(fibs_fizz_buzz(1), '\n', [1])
print(fibs_fizz_buzz(40), '\n', [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz",10946,17711,28657,"Fizz","Buzz",121393,196418,"Fizz",514229,"Buzz",1346269,"Fizz",3524578,5702887,"Buzz","Fizz",24157817,39088169,63245986,"FizzBuzz"])
