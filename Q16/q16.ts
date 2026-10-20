const basicSalary: number = 30000;
const hra: number = basicSalary * 0.10;
const da: number = basicSalary * 0.05;
const totalSalary: number = basicSalary + hra + da;

console.log("Basic salary: ₹" + basicSalary);
console.log("HRA (10%): ₹" + hra);
console.log("DA (5%): ₹" + da);
console.log("Total salary: ₹" + totalSalary);

export {};
