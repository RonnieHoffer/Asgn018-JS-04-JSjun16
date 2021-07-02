// Named function
function eatDot1 () {
    console.log("MUNCH!")
}
a = eatDot1();
eatDot1();
console.log(a);
console.log(eatDot1);
console.log(eatDot1());
console.log('');


// Anonymous function
var eatDot2 = function() {
    console.log("CRUNCH!");
}
eatDot2();
b = eatDot2();
console.log(eatDot2);
console.log(eatDot2());
console.log('');

// Arrow function (also annonymous)
var eatDot3 = () => {
    console.log("LUNCH!");   
}
eatDot3();
c = eatDot3();
console.log(eatDot3);
console.log(eatDot3());
console.log('');