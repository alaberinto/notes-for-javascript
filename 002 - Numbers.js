let example = 7.77;

//JavaScript has one number type: number

console.log(example);

console.log(typeof example); //confirms type of example

//can also get it from a stringified number
// EXAMPLE: let ex = '7.77';

console.log(parseInt(example)); //returns 7

console.log(parseFloat(example)); //returns 7.77

console.log(example.toFixed(5)); //returns 7.77000

console.log(example.toFixed(1)); //returns 7.8 rounds
