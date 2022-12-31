function alienLanguage(str){
    str = str.replace(/[a-zA-Z]/g,x=>x.toUpperCase());
    // str = str.replace(/\w+/g,x=>x.toUpperCase());
    return str.replace(/\w\b/g,x=>x.toLowerCase());

    //return str.toUpperCase().replace(/\w\b/g,x=>x.toLowerCase());
  }


  console.log(alienLanguage("My name is John"), 'should return --> My NAMe Is JOHn');
  console.log(alienLanguage("this is an example"), 'should return --> THIs Is An EXAMPLe');
  console.log(alienLanguage("Hello World"), 'should return --> HELLo WORLd');