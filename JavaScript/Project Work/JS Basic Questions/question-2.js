let units = parseInt(prompt("Enter the number of electricity units consumed:")); 
let bill = 0;
const fixedCharge = 50; 

if (units <= 100) {
    bill = units * 5;
} else if (units <= 300) {
    bill = (100 * 5) + ((units - 100) * 7);
} else if (units > 300) {
    bill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
} else {
    alert("Please enter a valid number of units.");
}

let totalBill = bill + fixedCharge;
alert("Your total electricity bill is ₹" + totalBill);
console.log("Total Bill: ₹" + totalBill);
