def around_fib(n):
    fib, fib_1 = 0, 1
    for i in range(n):
        fib, fib_1 = fib_1, fib + fib_1
    txt = str(fib)
    ch = [0] * 10
    for x in txt:
        ch[int(x)] += 1
    maxcnt = max(ch)
    chunk = txt
    while len(chunk) > 25:
        chunk = chunk[25:]
    return f"Last chunk {chunk}; Max is {maxcnt} for digit {ch.index(maxcnt)}"


print(around_fib(666), "Last chunk 56699078708088; Max is 18 for digit 8")
print(around_fib(934), "Last chunk 78863403327510987087; Max is 30 for digit 7")