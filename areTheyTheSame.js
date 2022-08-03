// areTheyTheSame.js
function comp(array1, array2){
    if (array1 == undefined || array2 == undefined || array1.length != array2.length)
        return false
        
    result = true
    for (x of array1)
        if (array2.indexOf(x*x) >= 0)
            array2.splice(array2.indexOf(x*x), 1)
        else {
            result = false
            break
        }
    return result
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
console.log('True:', comp(a1, a2))
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
console.log('False:', comp(a1, a2))
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
console.log('False:', comp(a1, a2))
a1 = []
a2 = undefined
console.log('False:', comp(a1, a2))