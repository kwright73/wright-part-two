let memberName = prompt ("welcome to GC mini golf. What is your name?");
console.log(`User name: ${memberName}`);
let holes = prompt (`Hi ${memberName}, would you like to play 3 or 6 holes?`);
console.log(`Number of holes: ${holes}`);
let gameStart = 3 * holes;
let score = 0;
for (let i = 0; i < holes; i++) {
    let putt = Number (prompt("How many putts for hole 1? (par is 3)"));
    score += putt;
}
console.log(`Total number of putts: ${score}`)
let par = gameStart - score;

if (par > 0) {
    console.log(`Nice try, ${memberName}... Your total par was: +${par}.`);
}
else if (par < 0) {
    console.log(`Great job, ${memberName}! Your total par was: ${par}.`);
}
else {
    console.log(`Good game, ${memberName}. Your total par was: ${par}.`);
}