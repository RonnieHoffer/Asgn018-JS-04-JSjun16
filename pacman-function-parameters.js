const highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
    const record = { player: playerInitials, score: score }
    highScoreList.push(record);
}

console.log(highScores);
addHighScore(highScores, 'SDL', 2000);
console.log(highScores);
addHighScore(highScores, 'RLH', 10000);
console.log(highScores);