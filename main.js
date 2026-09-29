// BASE DE DATOS DE PRODUCTOS (4 Ejemplos Específicos por cada Catálogo)
const productsData = {
    camisetas: [
        { id: 101, title: "Camiseta Oversize Black Gold", subcategory: "Oversize", price: 75000, image: "images/camisetas-1.jpg", fallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
        { id: 102, title: "Camiseta Slim Fit Essential", subcategory: "Slim Fit", price: 65000, image: "images/camisetas-2.jpg", fallback: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
        { id: 103, title: "Camiseta Polo Luxury Crown", subcategory: "Polo", price: 90000, image: "images/camisetas-3.jpg", fallback: "https://images.unsplash.com/photo-1625910513413-3fc8e030e461?auto=format&fit=crop&w=600&q=80" },
        { id: 104, title: "Camiseta Graphic Urban", subcategory: "Estampada", price: 70000, image: "images/camisetas-4.jpg", fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" }
    ],
    esqueletos: [
        { id: 201, title: "Esqueleto Gym Performance", subcategory: "Deportivo", price: 55000, image: "images/esqueletos-1.jpg", fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" },
        { id: 202, title: "Esqueleto Urban Cut Deep", subcategory: "Urbano", price: 50000, image: "images/esqueletos-2.jpg", fallback: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },
        { id: 203, title: "Esqueleto Seamless Fit", subcategory: "Ajustado", price: 58000, image: "images/esqueletos-3.jpg", fallback: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" },
        { id: 204, title: "Esqueleto Ribbed Cotton", subcategory: "Clásico", price: 48000, image: "images/esqueletos-4.jpg", fallback: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80" }
    ],
    zapatos: [
        { id: 301, title: "Zapatos Oxford Classic Leather", subcategory: "Formal", price: 180000, image: "images/zapatos-1.jpg", fallback: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
        { id: 302, title: "Sneakers Gold Runner", subcategory: "Urbano", price: 160000, image: "images/zapatos-2.jpg", fallback: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
        { id: 303, title: "Mocasines Suede Velvet", subcategory: "Casual", price: 175000, image: "images/zapatos-3.jpg", fallback: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80" },
        { id: 304, title: "Botas Chelsea Dark", subcategory: "Botas", price: 210000, image: "images/zapatos-4.jpg", fallback: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80" }
    ],
    gorras: [
        { id: 401, title: "Gorra Snapback Crown Gold", subcategory: "Snapback", price: 70000, image: "images/gorras-1.jpg", fallback: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" },
        { id: 402, title: "Gorra Trucker Mesh Black", subcategory: "Trucker", price: 65000, image: "images/gorras-2.jpg", fallback: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=600&q=80" },
        { id: 403, title: "Gorra Curved Strapback", subcategory: "Curva", price: 68000, image: "images/gorras-3.jpg", fallback: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80" },
        { id: 404, title: "Gorra Beanie Winter Gold", subcategory: "Beanie", price: 55000, image: "images/gorras-4.jpg", fallback: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80" }
    ],
    maquillaje: [
        { id: 501, title: "Base Matte Full Longwear", subcategory: "Rostro", price: 95000, image: "images/maquillaje-1.jpg", fallback: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" },
        { id: 502, title: "Paleta Sombras Gold Edition", subcategory: "Ojos", price: 120000, image: "images/maquillaje-2.jpg", fallback: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80" },
        { id: 503, title: "Labial Velvet Matte Black Box", subcategory: "Labios", price: 50000, image: "images/maquillaje-3.jpg", fallback: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80" },
        { id: 504, title: "Primer Illuminating Glow", subcategory: "Cuidado", price: 85000, image: "images/maquillaje-4.jpg", fallback: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80" }
    ]
};

// CARRITO GLOBAL
let cart = JSON.parse(localStorage.getItem('esencia_cart')) || [];

// FORMATO PESOS COLOMBIANOS
const formatCOP = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);

// INICIALIZACIÓN DE LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    setupCartEvents();
    setupMobileMenu();

    const category = document.body.getAttribute('data-category');
    if (category && productsData[category]) {
        initCatalogPage(category);
    }
});

// INICIALIZAR PÁGINA DE CATÁLOGO INDEPENDIENTE
function initCatalogPage(category) {
    const products = productsData[category];
    const subfilterContainer = document.getElementById('subfilterContainer');
    const productsGrid = document.getElementById('productsGrid');

    // Extraer subcategorías únicas para crear subfiltros
    const subcategories = [...new Set(products.map(p => p.subcategory))];

    // Renderizar botones de subfiltro
    subfilterContainer.innerHTML = '';
    subcategories.forEach((sub, idx) => {
        const btn = document.createElement('button');
        btn.className = `subfilter-btn ${idx === 0 ? 'active' : ''}`;
        btn.textContent = sub;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.subfilter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFilteredProducts(products, sub, productsGrid);
        });
        subfilterContainer.appendChild(btn);
    });

    // Renderizar inicialmente con la primera subcategoría seleccionada
    renderFilteredProducts(products, subcategories[0], productsGrid);
}

// RENDERIZAR PRODUCTOS SEGÚN EL SUBFILTRO SELECCIONADO
function renderFilteredProducts(products, subcategory, container) {
    container.innerHTML = '';
    const filtered = products.filter(p => p.subcategory === subcategory);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${p.subcategory}</span>
                <img src="${p.image}" alt="${p.title}" onerror="this.src='${p.fallback}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-price">${formatCOP(p.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${p.id}, '${p.title}', ${p.price}, '${p.image}', '${p.fallback}')">Añadir al Carrito</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// LÓGICA DEL CARRITO
window.addToCart = function(id, title, price, image, fallback) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, title, price, image, fallback, quantity: 1 });
    }
    saveAndRefreshCart();
    document.getElementById('cartModal').classList.add('active');
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveAndRefreshCart();
};

function saveAndRefreshCart() {
    localStorage.setItem('esencia_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if(cartCount) cartCount.textContent = totalCount;

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío.</p>`;
        cartTotalPrice.textContent = formatCOP(0);
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='${item.fallback}'">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatCOP(item.price)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotalPrice.textContent = formatCOP(total);
}

function setupCartEvents() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartModal = document.getElementById('cartModal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if(cartBtn) cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    if(closeCart) closeCart.addEventListener('click', () => cartModal.classList.remove('active'));
    
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) return alert('El carrito está vacío');
            let msg = "Hola ESENCIA, deseo realizar el siguiente pedido:%0A";
            let total = 0;
            cart.forEach(i => {
                msg += `- ${i.title} (x${i.quantity}) : ${formatCOP(i.price * i.quantity)}%0A`;
                total += i.price * i.quantity;
            });
            msg += `%0ATotal: ${formatCOP(total)}`;
            window.open(`https://wa.me/573239119905?text=${msg}`, '_blank');
        });
    }
}

function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
}