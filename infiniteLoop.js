function infiniteLoop(arr,d,n){
    let array = []
    let len = []
    for (let x of arr) {
        len.push(x.length);
        for (let i of x)
            array.push(i)
    }
    if (d == 'left') {
        for (let i = 0; i < n % array.length; i++) {
            array.push(array.shift())
        }
    } else {
        for (let i = 0; i < n % array.length; i++) {
            array.unshift(array.pop())
        }
    }
    let result = []
    let i = 0;
    for (let x of len) {
        let temp = []
        for (let j= 0; j < x; j++) {
            temp.push(array[i]);
            i++;
        }
        result.push(temp);
    }
    return result;
  }

  console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1), '\n --> ', [[2,3,4],[5,6,7],[8,9,1]]);
  console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1), '\n --> ', [[9,1,2],[3,4,5],[6,7,8]]);
  console.log(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2), '\n --> ', [[3,4],[5,6,7,8],[9,10,1,2]]);
  console.log(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",4), '\n --> ', [[5,6],[7,8,9,10],[1,2,3,4]]);