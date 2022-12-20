let arr = [{ b: 'foo' }, ['bar'], {c: ['foobar']}];

let serializedArr = JSON.stringify(arr);
console.log(serializedArr);
let deepCopiedArr = JSON.parse(serializedArr);
console.log(deepCopiedArr);
