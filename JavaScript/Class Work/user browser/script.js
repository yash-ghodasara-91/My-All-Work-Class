localStorage.setItem("name","rahul")
console.log(localStorage.getItem("name"));


let dark =document.getElementById("dark")
let light =document.getElementById("light")

function darkmode() {
     body.style.backgroundColor="black"
        body.style.color="white"
    localStorage.setItem("mode", "dark")
    
}

function lightmode() {
     
         body.style.backgroundColor="white"
        body.style.color="black"
    localStorage.setItem("mode","light")
}


let body = document.getElementById("body")

document.addEventListener("DOMContentLoaded",()=>{
    let mode = localStorage.getItem("mode");

    if(mode=="dark"){
        body.style.backgroundColor="black"
        body.style.color="white"
    } else {
        body.style.backgroundColor="white"
        body.style.color="black"
    }
})
