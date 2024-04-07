const {cloneArray} = require('./cloneArray')

test('shoul return an array with same values', () => {
    let arr = [1,2,3]
    expect(cloneArray(arr)).not.toBe(arr)
    expect(cloneArray(arr)).toEqual(arr)
})

test('shoul return an another array with same values', () => {
    let arr = [1,1,2,3,5,8]
    expect(cloneArray(arr)).not.toBe(arr)
    expect(cloneArray(arr)).toEqual(arr)
})