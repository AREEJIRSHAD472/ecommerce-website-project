// Global variables
let allProducts = [];
const productGrid = document.getElementById('productGrid');

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
}

// Display products in the grid
function displayProducts(products) {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// View product details
function viewProduct(id) {

    const product = allProducts.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
}


// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filtered = allProducts.filter(product => product.category === category);
        displayProducts(filtered);
    }
}
fetchProducts();

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});






