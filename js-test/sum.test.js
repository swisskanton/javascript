const {sum} = require('./sum')

test('1 és 2 összege 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('2 és 2 összege 4', () => {
    expect(sum(2, 2)).toBe(4)
})
