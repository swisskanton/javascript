function gradingStudents(grades) {
    // Write your code here
    let result = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            result.push(grades[i])
        } else {
            if (parseInt((grades[i] + 5) / 5) * 5 - grades[i] < 3) {

                result.push(parseInt((grades[i] + 5) / 5) * 5)
            } else {
                result.push(grades[i])
            }
        }
    }
    return result
}

let grades = [73, 67, 38, 33]
console.log('75, 67, 40, 33 : ' + gradingStudents(grades))
grades = [23, 80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]
console.log('23, 80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0')
console.log('23, 80, 96, 18, 75, 80, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0')
console.log(gradingStudents(grades))