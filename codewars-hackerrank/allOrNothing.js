function possiblyPerfect(key,answers) {

  /*
    let res = [];
    for (let i = 0; i < key.length; i++) {
      if (key[i] != '_') {
        res.push(key[i] == answers[i]);
      }
    }
    let allTrue = res.every((item) => item == true);
    let allFalse = res.every((item) => item == false)
    console.log(allTrue + " " + allFalse)
    return allTrue || allFalse;*/

    res = answers.map((item, i) => item == key[i]).filter((itwm, i) => key[i] != "_")
    return res.every(item => item == true) || res.every(item => item == false)
    
  }


console.log('1: ' + possiblyPerfect([..."A_C_B"],[..."ADCEB"]), true );
console.log('2: ' + possiblyPerfect([..."B_B"],[..."BDC"]), false );
console.log('3: ' + possiblyPerfect([..."T_FFF"],[..."FFTTT"]), true );
console.log('4: ' + possiblyPerfect([..."BA__"],[..."BACC"]), true );
console.log('5: ' + possiblyPerfect([..."ABA_"],[..."BACC"]), true );
console.log('6: ' + possiblyPerfect([..."ABC_"],[..."BACC"]), false );
console.log('7: ' + possiblyPerfect([..."B_"],[..."CA"]), true );
console.log('8: ' + possiblyPerfect([..."BA"],[..."CA"]), false );
console.log('9: ' + possiblyPerfect([..."B"],[..."B"]), true );
console.log('10: ' + possiblyPerfect([..."_T__"],[..."TFFF"]), true );
console.log('11: ' + possiblyPerfect([..."_T__"],[..."TTFT"]), true );
console.log('12: ' + possiblyPerfect([..."_TTT"],[..."TTFT"]), false );
console.log('13: ' + possiblyPerfect([..."_TTT"],[..."TTTT"]), true );
console.log('14: ' + possiblyPerfect([..."_TTT"],[..."FFFF"]), true );
console.log('15: ' + possiblyPerfect([..."____"],[..."FFFF"]), true );
