function penultimate(string){
  // string -> array of words
  let words = string.split(' ');
  // grab second to last word
  // return second to last word
  return words[words.length - 2]
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true