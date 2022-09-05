// regularExpressions.js

// String begins and ends with the same vowel

let re = /\ba(.).*a\b|\be(.).*e\b|\bi(.).*i\b|\bo(.).*o\b|\bu(.).*u\b/
let strs = ['bcd', 'abcd', 'abcda', 'abcdo', 'aewxyzae', 'bcaeiob']
let results = [false, false, true, false, false, false]
for (let i = 0; i < strs.length; i++) {
    console.log(results[i], re.test(strs[i]))
}


// String starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string  (i.e., the rest of the string after the prefix) 
// consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

re = /^(Mr|Mrs|Ms|Dr|Er)\.(?=[a-zA-Z]+(?!.))/
//const re = /^(Mr|Mrs|Ms|Dr|Er)(\.).*([A-Za-z]$)/ig
//const re = /^Mr\.(?=[a-zA-Z]+)|^Mrs\.(?=[a-zA-Z]+)|^Ms\.(?=[a-zA-Z]+)|^Dr\.(?=[a-zA-Z]+)|^Er\.(?=[a-zA-Z]+)/
strs = ['Mr.X', 'Mrs.Y', 'Dr#Joseph', 'Er .Abc', 'Er.Dr.']
results = [true, true, false, false, false]
for (let i = 0; i < strs.length; i++) {
    console.log(results[i], !!strs[i].match(re))
    
}


// find all integers in a string

re = /([0-9]+)/g
strs = ['102, 1948948 and 1.3 and 4.5', '1 2 3']
results = [['102', '1948948', '1', '3', '4', '5' ], [ '1', '2', '3' ]]
for (let i = 0; i < strs.length; i++) {
    console.log(results[i], strs[i].match(re))  
}