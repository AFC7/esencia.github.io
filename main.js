// Base de datos de productos para ESENCIA (Hombre y Maquillaje, sin sección de mujer)
const products = [
    {
        id: 1,
        title: "Camiseta Classic Gold",
        category: "camisetas",
        price: 65000,
        image: "images/camiseta-1.jpg",
        fallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        badge: "Nuevo"
    },
    {
        id: 2,
        title: "Esqueleto Urban Black",
        category: "esqueletos",
        price: 55000,
        image: "images/esqueleto-1.jpg",
        fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
        badge: "Popular"
    },
    {
        id: 3,
        title: "Gorra Snapback Crown",
        category: "gorras",
        price: 70000,
        image: "images/gorra-1.jpg",
        fallback: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
        badge: "Exclusivo"
    },
    {
        id: 4,
        title: "Zapatos Oxford Leather",
        category: "zapatos",
        price: 180000,
        image: "images/zapatos-1.jpg",
        fallback: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        badge: "Tendencia"
    },
    {
        id: 5,
        title: "Kit Maquillaje Professional Pro",
        category: "maquillaje",
        price: 120000,
        image: "images/maquillaje-1.jpg",
        fallback: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
        badge: "Destacado"
    },
    {
        id: 6,
        title: "Camiseta Oversize Minimal",
        category: "camisetas",
        price: 75000,
        image: "images/camiseta-2.jpg",
        fallback: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
        badge: "Nuevo"
    },
    {
        id: 7,
        title: "Esqueleto Sport Flex",
        category: "esqueletos",
        price: 50000,
        image: "images/esqueleto-2.jpg",
        fallback: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
        badge: ""
    },
    {
        id: 8,
        title: "Zapatos Casual Runner Gold",
        category: "zapatos",
        price: 150000,
        image: "images/zapatos-2.jpg",
        fallback: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
        badge: "Oferta"
    }
];

// Estado del carrito
let cart = [];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn, .category-card');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Formateador de moneda en pesos colombianos
const formatCOP = (value) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
};

// Renderizar Productos en el Catálogo
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray-light); padding: 40px;">No hay productos disponibles en esta categoría actualmente.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" onerror="this.src='${product.fallback}'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatCOP(product.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filtrar por categorías
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Actualizar botones activos de la barra de filtros
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        const matchingBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (matchingBtn) matchingBtn.classList.add('active');

        renderProducts(filter);

        // Si se hace clic desde las tarjetas de categoría superiores, desplazar suavemente al catálogo
        if(btn.classList.contains('category-card')) {
            document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Agregar producto al carrito
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Mostrar modal del carrito automáticamente al agregar
    cartModal.classList.add('active');
}

// Remover producto del carrito
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Actualizar interfaz del carrito
function updateCartUI() {
    // Conteo total
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    // Renderizar items en el modal
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío.</p>`;
        cartTotalPrice.textContent = formatCOP(0);
        return;
    }

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='${item.fallback}'">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatCOP(item.price)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotalPrice.textContent = formatCOP(totalPrice);
}

// Abrir y cerrar modal del carrito
cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
closeCart.addEventListener('click', () => cartModal.classList.remove('active'));
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('active');
});

// Menú móvil responsive
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace del menú móvil
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Botón de finalizar pedido (Simulación de compra vía WhatsApp / Pasarela)
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }
    
    let message = "Hola ESENCIA, deseo realizar el siguiente pedido:%0A";
    let total = 0;
    cart.forEach(item => {
        message += `- ${item.title} (x${item.quantity}) : ${formatCOP(item.price * item.quantity)}%0A`;
        total += item.price * item.quantity;
    });
    message += `%0ATotal a pagar: ${formatCOP(total)}`;
    
    // Redirigir a WhatsApp (Número de contacto actualizado)
    window.open(`https://wa.me/573239119905?text=${message}`, '_blank');
});

// Inicializar la aplicación cargando todos los productos
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});