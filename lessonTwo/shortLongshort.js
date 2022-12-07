function shortLongShort(stringA, stringB){
  let stringC;

  if (stringA.length > stringB.length){
    stringC = stringB + stringA + stringB;
  }
  else {
    stringC = stringA + stringB + stringA;
  }

  console.log(stringC);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"