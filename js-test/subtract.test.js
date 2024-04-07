const subtract = require('./subtract')

test('1-ből 2 az -1 ', () => {
    expect(subtract(1, 2)).toBe(-1)
})

test('2-ből 1 az 1 ', () => {
    expect(subtract(2, 1)).toBe(1)
})
