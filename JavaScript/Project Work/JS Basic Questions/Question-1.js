let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    alert("Your grade is: A+");
} else if (marks >= 80 && marks < 90) {
    alert("Your grade is: A");
} else if (marks >= 70 && marks < 80) {
    alert("Your grade is: B");
} else if (marks >= 60 && marks < 70) {
    alert("Your grade is: C");
} else if (marks >= 50 && marks < 60) {
    alert("Your grade is: D");
} else if (marks < 50 && marks >= 0) {
    alert("You have Failed.");
} else {
    alert("Please enter valid marks between 0 and 100.");
}
