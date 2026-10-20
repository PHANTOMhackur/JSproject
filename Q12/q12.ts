let number1: number = 10;
let number2: number = 20;

console.log("Before swapping:", number1, number2);
const temporary: number = number1;
number1 = number2;
number2 = temporary;

console.log("After swapping:", number1, number2);

export {};
