var ghosts = ['Inky', 'Clyde', 'Blinky', 'Pinky'];

var ghost = ghosts[0];
var colour;

switch (ghost) {
    case 'Inky':
        colour = 'Cyan';
        break;
    case 'Blinky':
        colour = 'Red';
        break;
    case 'Pinky':
        colour = 'Pink';
        break;
    case 'Clyde':
        colour = 'Orange';
        break;
}

console.log(`${ghost} is the colour ${colour}.`);