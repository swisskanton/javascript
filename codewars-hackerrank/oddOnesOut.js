// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

function oddOnesOut(nums) {
    let res = [];
    for (let item of nums) {
      let arr = nums.filter(e => e == item);
      if (arr.length % 2 == 0)
        res.push(item);
    }
    return res;
  }


  console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
  console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
  console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
  console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
  console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);