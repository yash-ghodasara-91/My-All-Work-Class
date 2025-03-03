
let salary = parseFloat(prompt("Enter your Salary:"));

let tax = 0;
if (salary > 100000) {
    tax = salary * 0.20; 
} else if (salary > 50000) {
    tax = salary * 0.10; 
}

let netSalary = salary - tax;

alert("Net Salary: ₹" + netSalary);
console.log("Net Salary: ₹" + netSalary);
