let example1 = parseInt("Hello 33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(example1); //type: number
//Guess: 33
//Actual: Null
//IF you did "33 World 22" it would parse 33
//If your string starts with a number it will find it and pull it out

console.log(example2); //type: number
//Guess: 44.33
//Actual 44

console.log(example3); //type: string
//Guess: 0.0
//Actual: 55 where there is no floating number

console.log(example4); //type: string
//Guess: 200.00
// Actual
