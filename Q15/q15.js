const units = 120;
let rate;
let bill;

if (units <= 100) {
    rate = 5;
} else {
    rate = 8;
}
bill = units * rate;

console.log("Units consumed:", units);
console.log("Rate per unit: ₹" + rate);
console.log("Total bill: ₹" + bill);
