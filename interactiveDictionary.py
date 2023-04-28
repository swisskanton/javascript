class Dictionary():
    def __init__(self):
        self.dict = {}

    def newentry(self, word, definition):
        self.dict.update({word: definition})

    def look(self, key):
        return self.dict.get(key, f"Can't find entry for {key}")

d = Dictionary()
d.newentry('Apple', 'A fruit that grows on trees')
print(d.look('Apple'))
print(d.look('Banana'))