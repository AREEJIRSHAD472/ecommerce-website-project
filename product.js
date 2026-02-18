 const productDetail = document.getElementById('productDetail');
// Get product from localStorage
 const product = JSON.parse(localStorage.getItem('selectedProduct'));
        if (product) {
            productDetail.innerHTML = `
            <div class="detail-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="detail-info">
                <h2>${product.title}</h2>
                <p><b>Price:</b> $${product.price}</p>
                <p><b>Category:</b> ${product.category}</p>
                <p>${product.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        } else {
            productDetail.innerHTML = `<p>Product not found. Please go back to the products page.</p>`;
        }
// add to cart
         const addToCartBtn = document.querySelector('.add-to-cart');
          addToCartBtn?.addEventListener('click', () => {
             let cart = JSON.parse(localStorage.getItem('cart')) || [];
             cart.push(product); localStorage.setItem('cart', JSON.stringify(cart));
             alert('Product added to cart!'); });

