function addScore(currentScore, eaten) {
    switch (eaten) {
        case 'dot':
            scoreToAdd = 5;
            break;
        case 'powerPellet':
            scoreToAdd = 25;
            break;
        case 'firstGhost':
            scoreToAdd = 100;
            break;
        case 'secondGhost':
            scoreToAdd = 200;
            break;
    }
    return currentScore + scoreToAdd;
}

let score = 0;

console.log(`Your score: ${score}`);
score = addScore(score, 'dot');
console.log(`Your score: ${score}`);
score = addScore(score, 'powerPellet');
console.log(`Your score: ${score}`);
score = addScore(score, 'firstGhost');
console.log(`Your score: ${score}`);