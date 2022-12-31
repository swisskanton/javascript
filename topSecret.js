function topSecret(str){
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90 || code >= 97 && code <= 122){
        code = code - 3;
        if (90 < code && code < 97 || code < 65)
          code += 26;  
      }
      result += String.fromCharCode(code);
    }
    return result;
  }

  console.log(topSecret("Pb qdph lv Mrkq") , ">> My name is John");
  console.log(topSecret("wklv lv dq hadpsoh") , ">> this is an example");
  console.log(topSecret("Khoor Zruog!") , ">> Hello World!");