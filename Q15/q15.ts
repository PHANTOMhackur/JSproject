const units: number = 120;
let rate: number;
let bill: number;

if (units <= 100) {
    rate = 5;
} else {
    rate = 8;
}
bill = units * rate;

console.log("Units consumed:", units);
console.log("Rate per unit: ₹" + rate);
console.log("Total bill: ₹" + bill);

export {};
