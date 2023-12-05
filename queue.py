class Queue:

    def __init__(self):
        self.__store = []

    def __str__(self):
        res = ''
        for x in self.__store:
            if type(x) == str:
                res += '"' + f'{x}' + '", '
            else:
                res += f'{x}, '
        return res[:-2] if len(res) > 0 else res

    def push(self, item):
        if type(item) == list:
            for x in item:
                self.__store += [x]
        else:
            self.__store += [item]

    def pop(self):
        item = None
        if len(self.__store) > 0:
            item = self.__store[0]
            self.__store = self.__store[1:]
        return item

    def __len__(self):
        return len(self.__store)
