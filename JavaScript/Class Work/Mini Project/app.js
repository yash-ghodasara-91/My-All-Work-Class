// let arr = ["Red", "Green", "Yellow", "Blue"]
// let arr2 = [""]
// let num = 0;

// function change () {
//     let heading = document.getElementById("name")
//     heading.style.backgroundColor=arr[num]
//     num++;
//     if(num == arr.length) {
//         num = 0
//     }
// }


// function handelForm(e) {
//     e.preventDDefault()
//     console.log("form");
    
// }

let form = document.getElementById("form");
let nameone = document.getElementById("name");
let password = document.getElementById("password");
let email = document.getElementById("email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Example: test@example.com
 
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
// Example: Abc@1234

const nameRegex = /^[A-Za-z\s]{2,}$/;
// Example: John Doe



form.addEventListener("submit",(event)=>{

event.preventDefault();

// if(NamedNode.value == ""  || password.value == "" || email.value == "" ) {
//     return alert(" enter your required felids")
// }

// if(!email.value.includes('@')) {
//     return alert("Enter Your Valide Email Address")
// }

if(!emailRegex.test(email.value)) {
    return alert ("Enter Valid Email Address")
}

if(!passwordRegex.test(password.value)) {
    return alert ("password must ")
}

if(!nameRegex.test(password.value)) {
    return alert ("complet Name  ")
}

nameone.value = "";
password.value = "";
email.value = "";

});



// class Vehical
// {
//     constructor()
//     {
//         this.stat='Gujrat';
//         this.stat2='MP';
//         this.number=22;
//         this.number2=33;
//         this.year=2025
//     }
//     vehical()
//     {
//         document.write("Vehical's Types")
//     }       
// }
// class Fourwheel extends Vehical
// {
//     constructor(stat)
//     {
//         super(stat);
//     }
//     name()
//     {
//         document.write(<br>This fourwheel is from ${this.stat} & it's stat code ${this.number})
//     }
// }
// class Toyato extends Fourwheel
// {
//     toyato()
//     {
//         document.write("<br>This is Toyato's Fortuner")
//     }
// }
// class Fortuner extends Toyato
// {
//     model()
//     {
//         document.write(<br>This fortuner's model is from year ${this.year})
//     }
// }
// class Twowheel extends Vehical
// {
//     name()
//     {
//         document.write(<br>This Twowheel is from ${this.stat2} & it's stat code ${this.number2});
//     }
// }
// class Bajaj extends Twowheel
// {
//     bajaj()
//     {
//         document.write("<br>This is Bajaj's V15");
//     }
// }
// class v15 extends Bajaj
// {
    
//     model()
//     {
//         document.write(<br>This v15's model is from year ${this.year})
//     }
// }


// let obj=new Fortuner();
// obj.vehical();
// obj.toyato();
// obj.name();
// obj.model();
// let obj2=new v15();
// obj2.bajaj()
// obj2.name();
// obj2.model();