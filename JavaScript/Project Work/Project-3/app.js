function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("Password").value;

    if (username === "" || password === "") {
        alert("Please fill out both fields.");
        return false;
    }
    alert("Login successful!");
    return true;
}

function togglePassword() {
    const passwordInput = document.getElementById("Password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

let arr=["red","green","Blue","Pink","yellow","grey","golden"]
let cnt=0
function change() 
{
    let bg=document.getElementById("bg")
    bg.style.backgroundColor=arr[cnt];
    cnt++;
    if(cnt>=arr.length)
    {
        cnt=0;
    }
}

let inp2=document.getElementById("inp2");
let inp3=document.getElementById("inp3");
let inp4=document.getElementById("inp4");
let inp5=document.getElementById("inp5");
let inp6=document.getElementById("inp6");
let total=document.querySelector(".total");
let percentage=document.querySelector(".percentage");

function totalall()
{        
    if(inp2.value==="" || inp3.value==="" || inp4.value==="" || inp5.value==="" || inp6.value===" ")
    {
        alert("Please enter all subject of marks");
    }
    else
    {
        total.innerHTML = Number(inp2.value) + Number(inp3.value) + Number(inp4.value) + Number(inp5.value) + Number(inp6.value);
        percentage.innerHTML = (Number(inp2.value) + Number(inp3.value) + Number(inp4.value) + Number(inp5.value) + Number(inp6.value)) * 100 / 500;
    }
}
function clearall()
{
    document.getElementById("inp2").value="";
    document.getElementById("inp3").value="";
    document.getElementById("inp4").value="";
    document.getElementById("inp5").value="";
    document.getElementById("inp6").value="";
    total.innerHTML="";
    percentage.innerHTML="";
}
