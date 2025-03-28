// let total = document.getElementById("total")
// let total1 =document.getElementById("total1")
// let abcd = document.querySelector(".h1")


// function sub() {
//     abcd.innerHTML = Number (total.value) - Number(total1.value)
//     total.value = ""
//      total1.value = ""
// }


// function mul() {
//     abcd.innerHTML = Number (total.value) * Number(total1.value)
//     total.value = ""
//      total1.value = ""
// }


// function addi() {
//     abcd.innerHTML = Number (total.value) + Number(total1.value)
//     total.value = ""
//      total1.value = ""
// }


// function div() {
//     abcd.innerHTML = Number (total.value) / Number(total1.value)
//     total.value = ""
//      total1.value = ""
// }


function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        let expression = document.getElementById('display').value; 
        let result = eval(expression);
        document.getElementById('display').value = result; 
    } catch (error) {
        alert('Invalid Expression');
    }
}
