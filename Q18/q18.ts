const purchaseAmount: number = 6000;
let discountRate: number;

if (purchaseAmount > 5000) {
    discountRate = 0.15;
} else {
    discountRate = 0.05;
}

const discount: number = purchaseAmount * discountRate;
const finalAmount: number = purchaseAmount - discount;

console.log("Purchase amount: ₹" + purchaseAmount);
console.log("Discount: ₹" + discount);
console.log("Final amount: ₹" + finalAmount);

export {};
