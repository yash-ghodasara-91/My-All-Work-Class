let body = document.getElementById("db")

async  function fatchApi() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let res = await response.json();

    let img = document.createElement("img");
    img.src = res.message
    img.style.width = "30%"


    body.append(img)
};


// async  function fatchApi() {
//     let response = await fetch('https://wttr.in/jaipur?formate=j1');
//     let products = await response.json();
//     console.log(products);
    
// };

fatchApi();