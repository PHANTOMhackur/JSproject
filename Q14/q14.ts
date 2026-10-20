const marks: number = 85;
let grade: string;

if (marks >= 80) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B";
} else {
    grade = "C";
}

console.log("Marks:", marks);
console.log("Grade:", grade);

export {};
