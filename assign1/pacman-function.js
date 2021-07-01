// Named function
function eatDot1() {
    console.log("MUNCH!");
}

a = eatDot1();
console.log('');
console.log(eatDot1);
console.log('');
console.log(a);
console.log(a);
console.log('');
console.log(eatDot1());
console.log('');
eatDot1();
console.log('');

// Anonymous function
var eatDot2 = function() {
    console.log("CRUNCH!");
}

eatDot2();

// Arrow Function
var eatDot3 = () => {
    console.log("SLURP!");
}

eatDot3();
console.log(eatDot3);
eatDot3;