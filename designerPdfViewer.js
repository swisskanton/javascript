function designerPdfViewer(h, word) {
    let max = 0
    for (let i = 0; i < word.length; i++) {
        if (max < h[word.charCodeAt(i) - 97])
            max = h[word.charCodeAt(i) - 97]
    }
    return max * word.length
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
let word = 'abc'
console.log('9: ' + designerPdfViewer(h, word))
h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
word = 'zaba'
console.log('28: ' + designerPdfViewer(h, word))