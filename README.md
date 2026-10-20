# TypeScript Practical Programs — Q1 to Q20

This repository contains solutions for all 20 beginner TypeScript practical questions. Each question has its own folder so the programs are easy to find, run, and review on GitHub.

## Questions covered

| Question | Program / concept | Main TypeScript file |
|---|---|---|
| Q1 | Declare and display name, age, and city | `Q1/q1.ts` |
| Q2 | Addition, subtraction, multiplication, and division of two numbers | `Q2/q2.ts` |
| Q3 | Display a message using `console.log()`, `alert()`, and `innerHTML` | `Q3/q3.ts` |
| Q4 | Find the square and cube of a number | `Q4/q4.ts` |
| Q5 | Calculate the area of a rectangle using length and width | `Q5/q5.ts` |
| Q6 | Demonstrate `number`, `string`, and `boolean` data types | `Q6/q6.ts` |
| Q7 | Assign different types of values to one `any` variable | `Q7/q7.ts` |
| Q8 | Convert the string `"250"` to a number and add a value | `Q8/q8.ts` |
| Q9 | Convert the number `500` to a string and display its type | `Q9/q9.ts` |
| Q10 | Convert two numeric strings to numbers and add them | `Q10/q10.ts` |
| Q11 | Perform arithmetic operations on two numbers | `Q11/q11.ts` |
| Q12 | Swap two numbers using a temporary variable | `Q12/q12.ts` |
| Q13 | Swap two numbers without using a temporary variable | `Q13/q13.ts` |
| Q14 | Calculate a student's grade from marks | `Q14/q14.ts` |
| Q15 | Calculate an electricity bill based on units consumed | `Q15/q15.ts` |
| Q16 | Calculate total salary using basic salary, HRA (10%), and DA (5%) | `Q16/q16.ts` |
| Q17 | Check whether a person is eligible to vote | `Q17/q17.ts` |
| Q18 | Calculate a purchase discount | `Q18/q18.ts` |
| Q19 | Convert Celsius to Fahrenheit | `Q19/q19.ts` |
| Q20 | Convert total minutes into hours and remaining minutes | `Q20/q20.ts` |

## Folder structure

Each question is stored separately. For example:

```text
typescript-practical-programs/
├── Q1/
│   ├── q1.ts        # TypeScript source code
│   ├── q1.js        # JavaScript version that can run with Node.js
│   └── output.txt   # Example output
├── Q2/
│   ├── q2.ts
│   ├── q2.js
│   └── output.txt
├── ...
├── Q20/
│   ├── q20.ts
│   ├── q20.js
│   └── output.txt
├── package.json
├── tsconfig.json
└── README.md
```

`Q3` also contains `index.html` so you can demonstrate the message on a web page and show an alert. If you take screenshots of program outputs for your assignment, you can save them inside the matching question folder, for example `Q1/outputjs1.png`, `Q2/outputjs2.png`, and so on. Add screenshots to the repository only if you have captured them; they are not required to run the code.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm, which is included with Node.js
- [Visual Studio Code](https://code.visualstudio.com/) (recommended, but optional)

Check that Node.js and npm are installed by running these commands in the terminal:

```bash
node --version
npm --version
```

## Run a JavaScript program

Open the repository's root folder in VS Code, then select **Terminal → New Terminal**. Run a question with Node.js, for example:

```bash
node Q1/q1.js
node Q2/q2.js
node Q10/q10.js
```

Use the same pattern for any question: `node Q<number>/q<number>.js`.

## Compile the TypeScript programs

The `.ts` files are the original TypeScript solutions. From the repository root, install the development dependency and compile them:

```bash
npm install
npm run build
```

The compiled JavaScript files will be placed in the `build/` folder. Run a compiled program like this:

```bash
node build/Q1/q1.js
```

For another question, change `Q1/q1.js` to the corresponding question and file number. After editing a `.ts` file, run `npm run build` again to regenerate the compiled JavaScript.

## Run Q3 in a browser

To test `alert()` and `innerHTML`, open `Q3/index.html` in a web browser. The page loads `Q3/q3.js`, shows the message, and displays an alert. To check only the console output in Node.js, run:

```bash
node Q3/q3.js
```

## Notes

- Edit the sample values inside each source file to test different inputs.
- Q14 uses these grade rules: 80 and above = A; 60–79 = B; below 60 = C.
- Q15 follows the practical's simple `if/else` rate selection: up to 100 units uses ₹5 per unit; above 100 units uses ₹8 per unit.
- Q18 applies a 15% discount when the purchase amount is above ₹5,000; otherwise, it applies 5%.
- The `.ts` files are the main TypeScript submissions. The `.js` files are included for convenient execution with Node.js.

## Upload to GitHub

1. Extract the ZIP file, if you are starting from the downloaded archive.
2. Create a new, empty repository on [GitHub](https://github.com/new), such as `typescript-practical-programs`. Do not create another README on GitHub because this folder already contains one.
3. Open a terminal in the project root and run the following commands. Replace `YOUR-USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Add TypeScript practical programs Q1-Q20"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/typescript-practical-programs.git
git push -u origin main
```

If GitHub asks you to authenticate, complete the sign-in prompt and repeat the push if needed.
