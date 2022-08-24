function marsExploration(s) {
    let diff = 0
    for (let i = 0; i < s.length; i += 3) {
        if (s.substr(i, 3)  != 'SOS') {
            let sos = s.substr(i, 3).split('')
            if (sos[0] != 'S') diff++
            if (sos[1] != 'O') diff++
            if (sos[2] != 'S') diff++
        }
    }
    return diff
}

console.log('3: ' + marsExploration('SOSSPSSQSSOR'))
console.log('1: ' + marsExploration('SOSSOT'))
console.log('0: ' + marsExploration('SOSSOSSOS'))
console.log('1: ' + marsExploration('SOSSOSOOS'))