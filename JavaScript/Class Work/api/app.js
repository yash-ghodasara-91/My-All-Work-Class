async function fatchApi() {
    let response = await fetch('    http://www.omdbapi.com/?i=tt3896198&apikey=8c56dcfc');
    let product = await response.json();

    localStorage.setItem("ProductList", JSON.stringify(product));
    console.log(product);

    const productList = document.getElementById("productList");

    // Since product is a single object, no need for forEach
    const box = document.createElement("div");
    box.classList.add("product-box");

    box.innerHTML = `
        <img src="${product.Poster}" alt="${product.Title}">
        <p><strong>Title:</strong> ${product.Title}</p>
        <p><strong>Plot:</strong> ${product.Plot}</p>
        <p><strong>Genre:</strong> ${product.Genre}</p>
        <p><strong>Released:</strong> ${product.Released}</p>
        <p><strong>Rating:</strong> ⭐ ${product.imdbRating}</p>
    `;

    productList.append(box);
}

fatchApi();
