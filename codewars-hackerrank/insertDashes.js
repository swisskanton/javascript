/*
https://www.codewars.com/kata/55960bbb182094bc4800007b
*/

function insertDash(num) {
    if (num > 9) {
        let nums = ("" + num).split("");
        let res = nums[0]
        for (let i = 0; i < nums.length - 1; i++) {
            res += (nums[i] * 1 % 2 && nums[i + 1] * 1 % 2) ? "-" + nums[i + 1]: nums[i + 1];
        }
        return res
    }
    return num;
 }

 console.log(insertDash(454793),'4547-9-3');
 console.log(insertDash(123456),'123456');
 console.log(insertDash(1003567),'1003-567');