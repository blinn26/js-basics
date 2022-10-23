// This is my first JavaScript Code!
console.log('Hello World');


!(function () {
      let name = 'Ben';
      console.log(name);
})();

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or a hypen (-)
// Case sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


let name = 'Ben'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;

let selectColor = 'red';

let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors);

// Performing a Task
function greet(name, lastName) {
      console.log('Hello ' + name + ' ' + lastName);
}

greet('Ben', 'Linn');
greet('Ashley', 'Linn');


//Calculating a Value
function square(number) {
      return number * number;
}
let number = square(2);
console.log(number);