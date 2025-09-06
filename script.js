const products = [
    { id: 1, name: "Men's Casual Shirt", price: 29.99, category: "men", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },
    { id: 2, name: "Women's Summer Dress", price: 49.99, category: "women", image: "https://media.istockphoto.com/id/1471593157/photo/woman-in-dress-looking-away-while-walking-outdoors.jpg?s=612x612&w=is&k=20&c=HgvAB2CezoRMrfHI6BiCESpmp-tgMbhySmUaApa4r88=" },
    { id: 3, name: "Leather Belt", price: 19.99, category: "accessories", image: "https://media.istockphoto.com/id/182435261/photo/womens-belt-1.jpg?s=1024x1024&w=is&k=20&c=maNM39POKS91ZUoghxLSOgG1ChVfnr30w4HNq1zuyaQ=" },
    { id: 4, name: "Men's Denim Jeans", price: 59.99, category: "men", image: "https://images.unsplash.com/photo-1612949677014-47e1623c993b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Women's Blouse", price: 34.99, category: "women", image: "https://media.istockphoto.com/id/1467314469/photo/portrait-of-beautiful-happy-indian-woman-in-sari-looking-away-and-thinking.jpg?s=612x612&w=is&k=20&c=vlULKaFf1U3qV8Gn4hwGwxdIjzHzJDAYF9SZb_GVBbI=" },
    { id: 6, name: "Silk Scarf", price: 24.99, category: "accessories", image: "https://media.istockphoto.com/id/621861750/photo/silk-scarf-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=KfhCYgp3cWVjpEilQ1xgCtL-iIEq0YcuaHYhY4cXCaE=" },
    { id: 7, name: "Men's Polo Shirt", price: 39.99, category: "men", image: "https://media.istockphoto.com/id/825834802/photo/man-in-blank-dark-blue-polo-shirt-from-front-and-rear.jpg?s=612x612&w=is&k=20&c=T3bMb2C76QXIlZa0wI2oo7fVjdC7D5W1C7IL9kKVBgA=" },
    { id: 8, name: "Women's Skirt", price: 44.99, category: "women", image: "https://media.istockphoto.com/id/1309269578/photo/beautiful-woman.jpg?s=612x612&w=is&k=20&c=u07K_BkquMEHSbVOi6KjF8A5RwhlkwLA61gulXJtpCc=" },
    { id: 9, name: "Leather Wallet", price: 29.99, category: "accessories", image: "https://media.istockphoto.com/id/1085441276/photo/blue-leather-wallet-on-white-background.jpg?s=612x612&w=0&k=20&c=9OMto7vUCdKQ5qNbyiLvy5ymsLiTr9ySX4wV7tIvZBA=" },
    { id: 10, name: "Men's Jacket", price: 89.99, category: "men", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3" },
    { id: 11, name: "Women's Cardigan", price: 54.99, category: "women", image: "https://plus.unsplash.com/premium_photo-1695339146416-65bfe01ec18d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29tZW4ncyUyMENhcmRpZ2FufGVufDB8fDB8fHww" },
    { id: 12, name: "Sunglasses", price: 19.99, category: "accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f" },
    { id: 13, name: "Men's T-Shirt", price: 24.99, category: "men", image: "https://images.unsplash.com/photo-1585032767761-878270336a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 14, name: "Women's Jumpsuit", price: 69.99, category: "women", image: "https://media.istockphoto.com/id/1133525161/photo/stylish-woman-model-in-summer-round-straw-hat-white-striped-jumpsuit-posing-on-colorful-pink.jpg?s=1024x1024&w=is&k=20&c=uBb4wJ35TTWKR1haM_0MBVi3nJwmtICP1ywXa8vDM2U=" },
    { id: 15, name: "Watch", price: 99.99, category: "accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { id: 16, name: "Men's Sweater", price: 49.99, category: "men", image: "https://media.istockphoto.com/id/157075856/photo/christmas-sweater-nerd.jpg?s=612x612&w=0&k=20&c=ah6pLiGrzNPpkHqpVDkY3o6Sjsk3RxilSfRR7bNXCNc=" },
    { id: 17, name: "Women's Leggings", price: 29.99, category: "women", image: "https://media.istockphoto.com/id/157529661/photo/leggings.jpg?s=612x612&w=0&k=20&c=YGD6SoMLi8rmfayK22q0I6KTMn1cC2GWz9de7e39cLA=" },
    { id: 18, name: "Backpack", price: 39.99, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
    { id: 19, name: "Men's Shorts", price: 34.99, category: "men", image: "https://media.istockphoto.com/id/854409814/photo/smiling-dude-in-pink.jpg?s=612x612&w=0&k=20&c=rKWqRHe_p0fhi-8g0VFJYEOoDWzXawA6p0pifYwHKnA=" },
    { id: 20, name: "Women's Top", price: 39.99, category: "women", image: "https://media.istockphoto.com/id/689353620/photo/mannequins-dressed-in-indian-salwar-kameez-women-dress-in-front-of-retail-clothes-shop-or.jpg?s=612x612&w=0&k=20&c=NiCD4ihhrexa8KMWSAVdmTelNwNanf-GIDaS9Q8kw50=" },
    { id: 21, name: "Hat", price: 14.99, category: "accessories", image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff" },
    { id: 22, name: "Men's Suit", price: 149.99, category: "men", image: "https://media.istockphoto.com/id/907865186/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=6nIHksYpLZowAwCD1g0VOv7m_gpcoV9nKHC6WO91QNw=" },
    { id: 23, name: "Women's Coat", price: 99.99, category: "women", image: "https://media.istockphoto.com/id/1483501616/photo/side-view-beautiful-woman-walking-street-in-fashionable-spring-or-autumn-clothes-cashmere.jpg?s=612x612&w=is&k=20&c=ILwHT7Y9a7GfkGOh8c6-AZvM0yG5zXbVTkFlH2QDgOY=" },
    { id: 24, name: "Necklace", price: 29.99, category: "accessories", image: "https://media.istockphoto.com/id/934717782/photo/traditional-indian-gold-necklace-with-earrings.jpg?s=612x612&w=0&k=20&c=-MArkcFqYKwMYIyQxw06Y8igQ_sULa_iGuF3UE-mI-8=" },
    { id: 25, name: "Men's Hoodie", price: 44.99, category: "men", image: "https://media.istockphoto.com/id/1270897614/photo/young-adult-hipster-with-headphones-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Vez5eGWfZnfrJDZd9E3KGv6VDIBQCguv9Ubcr_lpHIs=" },
    { id: 26, name: "Women's Pants", price: 59.99, category: "women", image: "https://media.istockphoto.com/id/873238240/photo/elegant-woman-wearing-high-heels.jpg?s=612x612&w=0&k=20&c=C62Exl7snPKafN88SMEDCBSg8jk6lxhXUTOGfYwOcz0=" },
    { id: 27, name: "Earrings", price: 19.99, category: "accessories", image: "https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU=" },
    { id: 28, name: "Men's Vest", price: 39.99, category: "men", image: "https://media.istockphoto.com/id/1125369351/photo/portrait-of-a-smiling-warehouse-worker.jpg?s=612x612&w=0&k=20&c=aKcsaYUHoXxjXeDR8qxSwwD5PaE_pIORxNSaMvhY_Kg=" },
    { id: 29, name: "Women's Blazer", price: 79.99, category: "women", image: "https://media.istockphoto.com/id/904821130/photo/blue-jacket-watch-and-black-shoes-fashion-collage.jpg?s=612x612&w=0&k=20&c=MzegN3URxx7XCsJHptO4PCySQiFI6vfzyZrD5vkoTaU=" },
    { id: 30, name: "Bracelet", price: 24.99, category: "accessories", image: "https://media.istockphoto.com/id/1484260916/photo/beaded-bracelet-on-the-white-surface.jpg?s=612x612&w=0&k=20&c=L_HvGQqrCpAucxaKjSSjFly0HiZUk4a2hcgTKtkaa9I=" },
    { id: 31, name: "Men's Chinos", price: 49.99, category: "men", image: "https://media.istockphoto.com/id/2158176349/photo/mens-khaki-pants-wool-sweater-winter-fashion.jpg?s=612x612&w=0&k=20&c=nkZvCfQ-qB6AFv1sK57VrsxfaoCuOwDzxd3uynDnrMs=" },
    { id: 32, name: "Women's Sweater", price: 54.99, category: "women", image: "https://media.istockphoto.com/id/1287408845/photo/cheerful-ethnic-woman-in-yellow-sweater-and-hat-shape-hearts-to-camera-and-express-love-and.jpg?s=612x612&w=0&k=20&c=z_gh6t9P7fAgC0q5eYz2PWFkuY9AXB2yUKWRl3rgRWI=" },
    { id: 33, name: "Tote Bag", price: 34.99, category: "accessories", image: "https://media.istockphoto.com/id/598806938/photo/two-shopping-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=92o8jb74ot9sMsMXz7J5WMNMIGll-X0f-xqkNNNoxkQ=" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render products
function renderProducts(filter = 'all', priceRange = null) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    let filteredProducts = products;

    if (filter !== 'all') {
        filteredProducts = products.filter(p => p.category === filter);
    }

    if (priceRange) {
        filteredProducts = filteredProducts.filter(p => {
            if (priceRange === 'price-0-50') return p.price <= 50;
            if (priceRange === 'price-50-100') return p.price > 50 && p.price <= 100;
            if (priceRange === 'price-100+') return p.price > 100;
            return true;
        });
    }

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card bg-white rounded-lg shadow p-4">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover rounded">
                <h3 class="mt-2 text-lg font-semibold">${product.name}</h3>
                <p class="text-gray-600">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;
        cartItems.innerHTML += `
            <li class="flex justify-between py-1">
                <span>${item.name} (x${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </li>
        `;
    });

    cartCount.textContent = itemCount;
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Filter products
let selectedCategory = 'all';
let selectedPrice = null;

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('filter-active'));
        button.classList.add('filter-active');
        const filter = button.dataset.filter;
        if (filter.startsWith('price-')) {
            selectedPrice = filter;
        } else {
            selectedCategory = filter;
            selectedPrice = null; // Reset price filter when changing category
        }
        renderProducts(selectedCategory, selectedPrice);
    });
});

// Toggle filters on mobile
document.getElementById('filter-toggle').addEventListener('click', () => {
    const filters = document.getElementById('filters');
    filters.classList.toggle('hidden');
});

// Cart modal controls
document.getElementById('cart-toggle').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
    updateCart();
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.add('hidden');
});

// Clear cart
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

// Checkout simulation
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Checkout successful! Thank you for your purchase.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        document.getElementById('cart-modal').classList.add('hidden');
    }
});

// Add to cart event delegation
document.getElementById('products').addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
    }
});

// Initialize
renderProducts();
updateCart();