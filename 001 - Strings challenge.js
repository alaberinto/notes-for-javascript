let firstName = "Dylan";
let lastName = "Israel";

// BAD convention
// let fullName = firstName + ' ' + lastName;
// GOOD
let fullName = `${firstName} ${lastName}`;

console.log(fullName);
