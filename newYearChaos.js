//timeout hiba
function minimumBribes(q) {
    
    var bribes = 0
    for (let i = 0; i < q.length-1; i++) {
        var higher = 0
        var less = 0
        for (let j = i+1; j < q.length; j++) {
            if (q[i] > q[j]) {
                higher++
                if (higher > 2) break
            } 
        }
        if (higher > 2) {
            bribes = 'Too chaotic'
            break
        } else {
            bribes += higher
        }

    }

    return bribes
}

var q = [2, 1, 5, 3, 4]
console.log(minimumBribes(q))
q = [2, 5, 1, 3, 4]
console.log(minimumBribes(q))