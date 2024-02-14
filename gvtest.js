function maxAndSheldon(array) {
    var maximum = -Infinity;
    for (var i = 0; i < array.length; i += 1) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }
    if (maximum == 73) {
        return "Sheldon's number!";
    }
    return maximum;
}

/*
function maxAndSheldon(array) {
    let maximum = Math.max(...array);
    return (maximum == 73) ? "Sheldon's number!": maximum;
}
*/

// let maxAndSheldon = array => (Math.max(...array) == 73) ? "Sheldon's number!": Math.max(...array);
