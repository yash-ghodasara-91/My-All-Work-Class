
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
