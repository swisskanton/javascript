//separateTheWheatFromTheChaff.js
function wheat_from_chaff(values){
    from_begin = 0
    from_end = values.length - 1
    while (from_begin < from_end){
        while (values[from_begin] < 0 && from_begin < from_end) {
            from_begin +=1
        }
        while (values[from_end] > 0 && from_begin < from_end) {
            from_end -=1
        }
        [values[from_begin], values[from_end]] = [values[from_end], values[from_begin]]
    }
    return values
}

console.log(wheat_from_chaff([2,-4,6,-6]),'\n', [-6,-4,6,2])
console.log(wheat_from_chaff([7,-3,-10]),'\n', [-10,-3,7])
console.log(wheat_from_chaff([7,-8,1,-2]),'\n', [-2,-8,1,7])
console.log(wheat_from_chaff([8,10,-6,-7,9]),'\n', [-7,-6,10,8,9])
console.log(wheat_from_chaff([-3,4,-10,2,-6]),'\n', [-3,-6,-10,2,4])
console.log(wheat_from_chaff([2,-6,-4,1,-8,-2]),'\n', [-2,-6,-4,-8,1,2])
console.log(wheat_from_chaff([16,25,-48,-47,-37,41,-2]),'\n', [-2,-37,-48,-47,25,41,16])
console.log(wheat_from_chaff([-30,-11,36,38,34,-5,-50]),'\n', [-30,-11,-50,-5,34,38,36])
console.log(wheat_from_chaff([-31,-5,11,-42,-22,-46,-4,-28]),'\n', [-31,-5,-28,-42,-22,-46,-4,11])
console.log(wheat_from_chaff([46,39,-45,-2,-5,-6,-17,-32,17]),'\n', [-32,-17,-45,-2,-5,-6,39,46,17])
console.log(wheat_from_chaff([-9,-8,-6,-46,1,-19,44]),'\n', [-9,-8,-6,-46,-19,1,44])
console.log(wheat_from_chaff([-37,-10,-42,19,-31,-40,-45,33]),'\n', [-37,-10,-42,-45,-31,-40,19,33])
console.log(wheat_from_chaff([-25,-48,-29,-25,1,49,-32,-19,-46,1]),'\n', [-25,-48,-29,-25,-46,-19,-32,49,1,1])
console.log(wheat_from_chaff([-7,-35,-46,-22,46,43,-44,-14,34,-5,-26]),'\n', [-7,-35,-46,-22,-26,-5,-44,-14,34,43,46])
console.log(wheat_from_chaff([-46,-50,-28,-45,-27,-40,10,35,34,47,-46,-24]),'\n', [-46,-50,-28,-45,-27,-40,-24,-46,34,47,35,10])
console.log(wheat_from_chaff([-33,-14,16,31,4,41,-10,-3,-21,-12,-45,41,-19]),'\n', [-33,-14,-19,-45,-12,-21,-10,-3,41,4,31,41,16])
console.log(wheat_from_chaff([-17,7,-12,10,4,-8,-19,-24,40,31,-29,21,-45,1]),'\n', [-17,-45,-12,-29,-24,-8,-19,4,40,31,10,21,7,1])
console.log(wheat_from_chaff([-16,44,-7,-31,9,-43,-44,-18,50,39,-46,-24,3,-34,-27]),'\n', [-16,-27,-7,-31,-34,-43,-44,-18,-24,-46,39,50,3,9,44])