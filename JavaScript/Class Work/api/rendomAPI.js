let body = document.getElementById("db")

async  function fatchApi() {
    let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ad48f7a0');
    let products = await response.json();

    let img = document.createElement("img");
    img.src = products.message
    img.style.width = "30%"


    body.append(img)
};


// async  function fatchApi() {
//     let response = await fetch('https://wttr.in/jaipur?formate=j1');
//     let products = await response.json();
//     console.log(products);
    
// };

fatchApi();