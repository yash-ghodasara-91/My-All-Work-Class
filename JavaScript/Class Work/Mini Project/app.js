let arr = ["Red", "Green", "Yellow", "Blue"]
let arr2 = [""]
let num = 0;

function change () {
    let heading = document.getElementById("name")
    heading.style.backgroundColor=arr[num]
    num++;
    if(num == arr.length) {
        num = 0
    }
}