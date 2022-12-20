let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

let sortedScores = scores.sort((a, b) => {
  let totalScoreA = a.reduce((first, second) => first + second);
  let totalScoreB = b.reduce((first, second) => first + second);
  
  return totalScoreA - totalScoreB;
})

console.log(sortedScores);