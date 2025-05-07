const products = {
    "best-sellers": [
        { id: 1, title: "Wireless Mouse", category: "Best Sellers", price: 499, discount: "30% OFF", rating: 4.5, description: "Smooth and ergonomic design.", stock: true, image: "imagesh/Best-sellaer-1.jpg" },
        { id: 2, title: "Bluetooth Headphones", category: "Best Sellers", price: 1299, discount: "25% OFF", rating: 4.7, description: "High bass with long battery life.", stock: true, image: "imagesh/Best-sellaer-2.jpg" },
        { id: 3, title: "Smart Watch", category: "Best Sellers", price: 1999, discount: "35% OFF", rating: 4.2, description: "Fitness tracker with heart rate monitor.", stock: false, image: "imagesh/Best-sellaer-3.jpg" },
        { id: 4, title: "Laptop", category: "Best Sellers", price: 29999, discount: "20% OFF", rating: 4.8, description: "Fast and reliable laptop for work and play.", stock: true, image: "imagesh/Best-sellaer-4.jpg" },
        { id: 5, title: "Gaming Console", category: "Best Sellers", price: 24999, discount: "15% OFF", rating: 4.6, description: "Ultimate gaming experience.", stock: true, image: "imagesh/Best-sellaer-5.jpg" },
        { id: 6, title: "Smartphone", category: "Best Sellers", price: 9999, discount: "10% OFF", rating: 4.4, description: "High-end features at an affordable price.", stock: true, image: "imagesh/Best-sellaer-6.jpg" },
        { id: 7, title: "Bluetooth Speaker", category: "Best Sellers", price: 1999, discount: "40% OFF", rating: 4.5, description: "Portable speaker with great sound.", stock: true, image: "imagesh/Best-sellaer-7.jpg" },
        { id: 8, title: "Camera", category: "Best Sellers", price: 14999, discount: "50% OFF", rating: 4.9, description: "High quality camera for photography lovers.", stock: false, image: "imagesh/Best-sellaer-8.jpg" },
        { id: 9, title: "Tablet", category: "Best Sellers", price: 8999, discount: "25% OFF", rating: 4.3, description: "Portable and versatile tablet.", stock: true, image: "imagesh/Best-sellaer-9.jpg" },
        { id: 10, title: "Electric Kettle", category: "Best Sellers", price: 1499, discount: "20% OFF", rating: 4.1, description: "Quick boiling kettle for your kitchen.", stock: true, image: "imagesh/Best-sellaer-10.jpg" }
    ],
    "mobiles": [
        { id: 11, title: "Samsung Galaxy", category: "Mobiles", price: 18999, discount: "10% OFF", rating: 4.4, description: "Flagship phone with AMOLED display.", stock: true, image: "imagesh/mobile-1.jpg" },
        { id: 12, title: "iPhone 13", category: "Mobiles", price: 79999, discount: "5% OFF", rating: 4.9, description: "Apple's premium phone with powerful features.", stock: true, image: "imagesh/mobile-2.jpg" },
        { id: 13, title: "OnePlus 9", category: "Mobiles", price: 54999, discount: "15% OFF", rating: 4.7, description: "Fast charging and smooth performance.", stock: true, image: "imagesh/mobile-3.jpg" },
        { id: 14, title: "Redmi Note 10", category: "Mobiles", price: 14999, discount: "20% OFF", rating: 4.6, description: "Budget-friendly phone with great features.", stock: true, image: "imagesh/mobile-4.jpg" },
        { id: 15, title: "Realme 8 Pro", category: "Mobiles", price: 17999, discount: "10% OFF", rating: 4.5, description: "High-performance phone with a great camera.", stock: true, image: "imagesh/mobile-5.jpg" },
        { id: 16, title: "Oppo Reno 5", category: "Mobiles", price: 22999, discount: "25% OFF", rating: 4.2, description: "Stylish design with good battery life.", stock: true, image: "imagesh/mobile-6.jpg" },
        { id: 17, title: "Vivo Y20", category: "Mobiles", price: 10999, discount: "15% OFF", rating: 4.3, description: "Affordable phone with decent performance.", stock: true, image: "imagesh/mobile-7.jpg" },
        { id: 18, title: "Motorola Edge", category: "Mobiles", price: 29999, discount: "10% OFF", rating: 4.4, description: "Great display and camera performance.", stock: true, image: "imagesh/mobile-8.jpg" },
        { id: 19, title: "Nokia 5.4", category: "Mobiles", price: 14999, discount: "12% OFF", rating: 4.0, description: "Reliable and affordable phone.", stock: false, image: "imagesh/mobile-9.jpg" },
        { id: 20, title: "Asus Zenfone", category: "Mobiles", price: 21999, discount: "18% OFF", rating: 4.1, description: "High performance with good camera quality.", stock: true, image: "imagesh/mobile-10.jpg" }
    ],
    "electronics": [
        { id: 11, title: "Fridge", price: 15999, discount: "10% OFF", rating: 4.4, description: "Double door refrigerator.", stock: true, image: "imagesh/electronics-1.jpg" },
        { id: 12, title: "LED TV", price: 24999, discount: "25% OFF", rating: 4.6, description: "Smart Android TV.", stock: true, image: "imagesh/electronics-2.jpg" },
        { id: 13, title: "Washing Machine", price: 13999, discount: "15% OFF", rating: 4.5, description: "Top load fully automatic.", stock: true, image: "imagesh/electronics-3.jpg" },
        { id: 14, title: "Gharghanti", price: 7999, discount: "20% OFF", rating: 4.3, description: "Atta chakki for home.", stock: true, image: "imagesh/electronics-4.jpg" },
        { id: 15, title: "Microwave Oven", price: 9999, discount: "18% OFF", rating: 4.2, description: "Convection microwave.", stock: true, image: "imagesh/electronics-5.jpg" },
        { id: 16, title: "Air Conditioner", price: 28999, discount: "22% OFF", rating: 4.7, description: "Split AC 1.5 Ton.", stock: true, image: "imagesh/electronics-6.jpg" },
        { id: 17, title: "Water Purifier", price: 7499, discount: "12% OFF", rating: 4.1, description: "RO+UV filter system.", stock: true, image: "imagesh/electronics-7.jpg" },
        { id: 18, title: "Ceiling Fan", price: 2599, discount: "30% OFF", rating: 4.0, description: "High-speed motor.", stock: true, image: "imagesh/electronics-8.jpg" },
        { id: 19, title: "Mixer Grinder", price: 3599, discount: "28% OFF", rating: 4.2, description: "500W powerful motor.", stock: true, image: "imagesh/electronics-9.jpg" },
        { id: 20, title: "Induction Cooktop", price: 2499, discount: "35% OFF", rating: 4.3, description: "Touch control panel.", stock: true, image: "imagesh/electronics-10.jpg" }
    ],
    "mens": [
        { id: 21, title: "Men's T-Shirt", price: 499, discount: "40% OFF", rating: 4.2, description: "Cotton slim fit tee.", stock: true, image: "imagesh/fashion-man-1.jpg" },
        { id: 22, title: "Men's Jeans", price: 999, discount: "35% OFF", rating: 4.4, description: "Denim stretchable jeans.", stock: true, image: "imagesh/fashion-man-2.jpg" },
        { id: 23, title: "Men's Jacket", price: 1999, discount: "25% OFF", rating: 4.6, description: "Winter warm jacket.", stock: true, image: "imagesh/fashion-man-3.jpg" },
        { id: 24, title: "Men's Shoes", price: 1499, discount: "30% OFF", rating: 4.3, description: "Running shoes.", stock: true, image: "imagesh/fashion-man-4.jpg" },
        { id: 25, title: "Men's Watch", price: 2499, discount: "20% OFF", rating: 4.5, description: "Stylish wristwatch.", stock: true, image: "imagesh/fashion-man-5.jpg" }
    ],
    "womens": [
        { id: 26, title: "Women's Top", price: 599, discount: "35% OFF", rating: 4.3, description: "Casual printed top.", stock: true, image: "imagesh/fashion-womens-1.jpg" },
        { id: 27, title: "Women's Jeans", price: 1099, discount: "30% OFF", rating: 4.4, description: "High-waist denim.", stock: true, image: "imagesh/fashion-womens-2.jpg" },
        { id: 28, title: "Women's Dress", price: 1599, discount: "20% OFF", rating: 4.5, description: "Floral midi dress.", stock: true, image: "imagesh/fashion-womens-3.jpg" },
        { id: 29, title: "Women's Heels", price: 899, discount: "25% OFF", rating: 4.2, description: "Comfortable sandals.", stock: true, image: "imagesh/fashion-womens-4.jpg" },
        { id: 30, title: "Women's Handbag", price: 1299, discount: "15% OFF", rating: 4.6, description: "Stylish leather bag.", stock: true, image: "imagesh/fashion-womens-5.jpg" }
    ]
};

// LocalStorage Handling
function saveToLocalStorage() {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(products));
    }
}

function loadFromLocalStorage() {
    const storedData = localStorage.getItem('products');
    return storedData ? JSON.parse(storedData) : products;
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
        <p><small>${product.discount}</small></p>
        <p>⭐ ${product.rating} / 5</p>
        <p>${product.description}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    const button = card.querySelector(".add-to-cart");
    if (button) {
        button.addEventListener("click", () => addToCart(product));
    }
    return card;
}

function renderProducts(category) {
    const data = loadFromLocalStorage();
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return;
    productContainer.innerHTML = "";

    const section = document.createElement("div");
    section.classList.add("product-section");

    const heading = document.createElement("h2");
    heading.classList.add("section-heading");
    heading.textContent = category.replace("-", " ").toUpperCase();
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.classList.add("product-grid");

    if (data[category]) {
        data[category].forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = "<p>No products found in this category.</p>";
    }

    section.appendChild(grid);
    productContainer.appendChild(section);
}

function renderSideBySide() {
    const data = loadFromLocalStorage();
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return;
    productContainer.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("side-by-side-wrapper");

    Object.keys(data).forEach(category => {
        const section = document.createElement("div");
        section.classList.add("product-section");

        const heading = document.createElement("h2");
        heading.classList.add("section-heading");
        heading.textContent = category.replace("-", " ").toUpperCase();
        section.appendChild(heading);

        const grid = document.createElement("div");
        grid.classList.add("product-grid");

        data[category].forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        wrapper.appendChild(section);
    });

    productContainer.appendChild(wrapper);
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        alert(`${product.title} is already in the cart.`);
    } else {
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.title} added to cart!`);
    }
    renderCart();
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Price:</strong> ₹${item.price}</p>
            <p><small>${item.discount}</small></p>
            <p>⭐ ${item.rating} / 5</p>
            <p><strong>Qty:</strong> ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    saveToLocalStorage();
    renderSideBySide();
    renderCart();

    ["best-sellers", "mobiles", "electronics", "mens", "womens"].forEach(category => {
        const el = document.getElementById(category);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                renderProducts(category);
            });
        }
    });

    const allBtn = document.getElementById("all");
    if (allBtn) {
        allBtn.addEventListener("click", (e) => {
            e.preventDefault();
            renderSideBySide();
        });
    }

    const cartToggle = document.getElementById("cart-toggle");
    if (cartToggle) {
        cartToggle.addEventListener("click", () => {
            const cartContainer = document.getElementById("cart-container");
            if (cartContainer) {
                if (cartContainer.style.display === "none" || cartContainer.style.display === "") {
                    cartContainer.style.display = "block";
                } else {
                    cartContainer.style.display = "none";
                }
            }
        });
    }
});


