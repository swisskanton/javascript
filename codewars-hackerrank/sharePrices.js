/*
https://www.codewars.com/kata/5603a4dd3d96ef798f000068
*/

const sharePrice = (invested, changes) => {
    changes.forEach(item => invested += invested * item / 100);
    return invested.toFixed(2)
}
