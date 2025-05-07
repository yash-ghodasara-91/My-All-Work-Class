async  function fatchApi() {
    let response = await fetch('https://fakestoreapi.com/products');
    let products = await response.json();
    localStorage.setItem("ProductList", JSON.stringify(products));

    console.log(response);
    
 
    
    const productList = document.getElementById("productList");
    
    products.forEach(product => {
        const savedProducts = JSON.parse(localStorage.getItem("ProductList")) || [];
        const box = document.createElement("div");
        box.classList.add("product-box");
        
        box.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <p><strong>Title:</strong> ${product.title}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p class="price"><strong>Price:</strong> ₹${product.price}</p>
        <p><strong>Rating:</strong> ⭐ ${product.rating.rate} (${product.rating.count} reviews)</p>
        
        `;
        
        productList.append(box); 
    });
}

fatchApi ();