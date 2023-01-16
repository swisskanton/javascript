function removeParentheses(s){
    let result = s.match(/\u0028[a-zA-Z\s]*\u0029/g);
    console.log(result);
    while (result != null) {
      for (let x of result) {
        let temp = s.replace(x, '');
        s = temp;
      }
      result = s.match(/\u0028[a-zA-Z\s]*\u0029/g);
    }
    return s
  }

  console.log(removeParentheses("example(unwanted thing)example"), "-->exampleexample");
  console.log(removeParentheses("example (unwanted thing) example"), "-->example  example");
  console.log(removeParentheses("a (bc d)e"), "-->a e");
  console.log(removeParentheses("a(b(c))"), "-->a");
  console.log(removeParentheses("hello example (words(more words) here) something"), "-->hello example  something");
  console.log(removeParentheses("(first group) (second group) (third group)"), "-->  ");