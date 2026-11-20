// ==========================================
// BASE DE DATOS DE PRODUCTOS (ESENCIA)
// ==========================================
const productsData = {
    camisetas: [
        { id: 101, title: "Camiseta Oversize Black Gold", subcategory: "Oversize", price: 75000, sizes: ["S", "M", "L", "XL"], image: "images/camisetas-1.jpg", fallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
        { id: 102, title: "Camiseta Slim Fit Essential", subcategory: "Slim Fit", price: 65000, sizes: ["S", "M", "L"], image: "images/camisetas-2.jpg", fallback: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
        { id: 103, title: "Camiseta Polo Luxury Crown", subcategory: "Polo", price: 90000, sizes: ["M", "L", "XL"], image: "images/camisetas-3.jpg", fallback: "https://images.unsplash.com/photo-1625910513413-3fc8e030e461?auto=format&fit=crop&w=600&q=80" },
        { id: 104, title: "Camiseta Graphic Urban", subcategory: "Estampada", price: 70000, sizes: ["S", "M", "L", "XL"], image: "images/camisetas-4.jpg", fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" }
    ],
    esqueletos: [
        { id: 201, title: "Esqueleto Gym Performance", subcategory: "Deportivo", price: 55000, sizes: ["S", "M", "L"], image: "images/esqueletos-1.jpg", fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" },
        { id: 202, title: "Esqueleto Urban Cut Deep", subcategory: "Urbano", price: 50000, sizes: ["S", "M", "L", "XL"], image: "images/esqueletos-2.jpg", fallback: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },
        { id: 203, title: "Esqueleto Seamless Fit", subcategory: "Ajustado", price: 58000, sizes: ["S", "M", "L"], image: "images/esqueletos-3.jpg", fallback: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" },
        { id: 204, title: "Esqueleto Ribbed Cotton", subcategory: "Clásico", price: 48000, sizes: ["M", "L", "XL"], image: "images/esqueletos-4.jpg", fallback: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80" }
    ],
    zapatos: [
        { id: 301, title: "KIKE", subcategory: "Formal", price: 180000, sizes: [38, 39, 40, 41, 42], image: "images/zapatos-1.jpg", fallback: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
        { id: 302, title: "Abibas", subcategory: "Urbano", price: 160000, sizes: [37, 38, 39, 40, 41], image: "images/zapatos-2.jpg", fallback: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
        { id: 303, title: "Ardidas", subcategory: "Casual", price: 175000, sizes: [39, 40, 41, 42, 43], image: "images/zapatos-3.jpg", fallback: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80" },
        { id: 304, title: "Fuma", subcategory: "Botas", price: 210000, sizes: [40, 41, 42], image: "images/zapatos-4.jpg", fallback: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80" }
    ],
    gorras: [
        { 
            id: 401, 
            title: "NY Beige / Negra", 
            subcategory: "Deportiva MLB", 
            team: "New York Yankees", 
            colors: "Beige y negro", 
            style: "Bicolor", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra10.jpeg" 
        },
        { 
            id: 402, 
            title: "LA Royal Blue", 
            subcategory: "Deportiva MLB", 
            team: "Los Angeles Dodgers", 
            colors: "Azul rey y blanco", 
            style: "Clásico", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra11.jpeg" 
        },
        { 
            id: 403, 
            title: "LA Black Edition", 
            subcategory: "Deportiva MLB", 
            team: "Los Angeles Dodgers", 
            colors: "Negro", 
            style: "Monocromático", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra12.jpeg" 
        },
        { 
            id: 404, 
            title: "LA New Era Blue", 
            subcategory: "Deportiva MLB", 
            team: "Los Angeles Dodgers", 
            colors: "Azul y blanco", 
            style: "New Era 59FIFTY", 
            price: 35000, 
            sizes: ["Cerrada / Fitted"], 
            image: "images/gorras/gorra1.jpeg" 
        },
        { 
            id: 405, 
            title: "NY Cream / Green", 
            subcategory: "Deportiva MLB", 
            team: "New York Yankees", 
            colors: "Crema y verde oscuro", 
            style: "Bicolor", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra2.jpeg" 
        },
        { 
            id: 406, 
            title: "LA Angels Black", 
            subcategory: "Deportiva MLB", 
            team: "Los Angeles Angels", 
            colors: "Negro, rojo y blanco", 
            style: "Clásico", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra3.jpeg" 
        },
        { 
            id: 407, 
            title: "Supreme Black", 
            subcategory: "Urbana / Streetwear", 
            team: "Supreme", 
            colors: "Negro y blanco", 
            style: "Logo bordado", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra4.jpeg" 
        },
        { 
            id: 408, 
            title: "LA Earth Tones", 
            subcategory: "Deportiva MLB", 
            team: "Los Angeles Dodgers", 
            colors: "Beige y café", 
            style: "Bicolor", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra5.jpeg" 
        },
        { 
            id: 409, 
            title: "NY Navy Edition", 
            subcategory: "Deportiva MLB", 
            team: "New York Yankees", 
            colors: "Azul navy y turquesa", 
            style: "Urbano / Bordado", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra6.jpeg" 
        },
        { 
            id: 410, 
            title: "Chicago White Sox", 
            subcategory: "Deportiva MLB", 
            team: "Chicago White Sox", 
            colors: "Blanco y negro", 
            style: "Bicolor", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra7.jpeg" 
        },
        { 
            id: 411, 
            title: "Detroit Tigers", 
            subcategory: "Deportiva MLB", 
            team: "Detroit Tigers", 
            colors: "Blanco y azul navy", 
            style: "Clásico", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra8.jpeg" 
        },
        { 
            id: 412, 
            title: "NY White / Black", 
            subcategory: "Deportiva MLB", 
            team: "New York Yankees", 
            colors: "Blanco y negro", 
            style: "Bicolor", 
            price: 35000, 
            sizes: ["Ajustable"], 
            image: "images/gorras/gorra9.jpeg" 
        }
    ],
    maquillaje: [
        { id: 501, title: "Base Matte Full Longwear", subcategory: "Rostro", price: 95000, image: "images/maquillaje-1.jpg", fallback: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" },
        { id: 502, title: "Paleta Sombras Gold Edition", subcategory: "Ojos", price: 120000, image: "images/maquillaje-2.jpg", fallback: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80" },
        { id: 503, title: "Labial Velvet Matte Black Box", subcategory: "Labios", price: 50000, image: "images/maquillaje-3.jpg", fallback: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80" },
        { id: 504, title: "Primer Illuminating Glow", subcategory: "Cuidado", price: 85000, image: "images/maquillaje-4.jpg", fallback: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80" }
    ],
    medias: [
        { id: 601, title: "Medias Tobilleras Pack x3", subcategory: "Deportivas", price: 25000, sizes: ["35-38", "39-42"], image: "images/medias-1.jpg", fallback: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=80" },
        { id: 602, title: "Medias Altas Urban Gold", subcategory: "Urbanas", price: 20000, sizes: ["Única"], image: "images/medias-2.jpg", fallback: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=80" }
    ]
};

// CARRITO GLOBAL
let cart = [];
try {
    const localData = localStorage.getItem('esencia_cart');
    if (localData) cart = JSON.parse(localData);
} catch (e) {
    console.warn("Storage local no disponible.");
}

// FORMATO DE MONEDA (COP)
const formatCOP = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    setupCartEvents();
    setupMobileMenu();
    setupCatalogSlider();

    const category = document.body.getAttribute('data-category');
    if (category && productsData[category]) {
        initCatalogPage(category);
    }
});

function initCatalogPage(category) {
    const products = productsData[category];
    const subfilterContainer = document.getElementById('subfilterContainer');
    const productsGrid = document.getElementById('productsGrid');

    if (!subfilterContainer || !productsGrid) return;

    const subcategories = ["Todos", ...new Set(products.map(p => p.subcategory))];

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

    renderFilteredProducts(products, "Todos", productsGrid);
}

function renderFilteredProducts(products, subcategory, container) {
    container.innerHTML = '';
    const filtered = (subcategory === "Todos") 
        ? products 
        : products.filter(p => p.subcategory === subcategory);

    filtered.forEach(p => {
        const fallbackImg = p.fallback || '';
        const onErrorAttr = fallbackImg ? `onerror="this.src='${fallbackImg}'"` : '';

        // Genera detalles extra si existen (Equipo, Colores, Estilo)
        const detailsList = [];
        if (p.team) detailsList.push(`<strong>Equipo:</strong> ${p.team}`);
        if (p.colors) detailsList.push(`<strong>Colores:</strong> ${p.colors}`);
        if (p.style) detailsList.push(`<strong>Estilo:</strong> ${p.style}`);

        const detailsHTML = detailsList.length > 0
            ? `<div class="product-specs" style="font-size: 0.82rem; color: var(--gray-light); margin-bottom: 12px; line-height: 1.4;">
                ${detailsList.join('<br>')}
               </div>`
            : '';

        // Genera el selector de tallas/ajuste solo si el producto tiene la propiedad 'sizes'
        const sizeSelectorHTML = (p.sizes && p.sizes.length > 0)
            ? `<div class="product-size-wrapper" style="margin-bottom: 10px;">
                <select id="size-${p.id}" class="product-size-select" style="width: 100%; padding: 6px; border-radius: 4px; border: 1px solid #ccc; background: #fff; color: #111;">
                    ${p.sizes.map(s => `<option value="${s}">${p.sizes.length === 1 ? 'Ajuste' : 'Talla'}: ${s}</option>`).join('')}
                </select>
               </div>`
            : '';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${p.subcategory}</span>
                <img src="${p.image}" alt="${p.title}" ${onErrorAttr}>
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                ${detailsHTML}
                <div class="product-price">${formatCOP(p.price)}</div>
                ${sizeSelectorHTML}
                <button class="add-to-cart" onclick="handleAddToCart(${p.id}, '${p.title}', ${p.price}, '${p.image}', '${fallbackImg}')">Añadir al Carrito</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Lee la talla elegida en el select antes de añadir al carrito
window.handleAddToCart = function(id, title, price, image, fallback) {
    const sizeSelect = document.getElementById(`size-${id}`);
    const selectedSize = sizeSelect ? sizeSelect.value : null;
    addToCart(id, title, price, image, fallback, selectedSize);
};

window.addToCart = function(id, title, price, image, fallback = '', size = null) {
    // Se busca coincidencia por ID y también por Talla
    const existing = cart.find(item => item.id === id && item.size === size);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, title, price, image, fallback, size, quantity: 1 });
    }
    saveAndRefreshCart();
    const cartModal = document.getElementById('cartModal');
    if (cartModal) cartModal.classList.add('active');
};

window.removeFromCart = function(id, size) {
    const normalizedSize = (size === 'null' || size === '') ? null : size;
    cart = cart.filter(item => !(item.id === id && String(item.size) === String(normalizedSize)));
    saveAndRefreshCart();
};

function saveAndRefreshCart() {
    try {
        localStorage.setItem('esencia_cart', JSON.stringify(cart));
    } catch(e) {}
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
        cartItems.innerHTML = `<p class="empty-cart-msg" style="text-align:center; color: var(--gray-light); padding:20px;">Tu carrito está vacío.</p>`;
        if(cartTotalPrice) cartTotalPrice.textContent = formatCOP(0);
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const sizeLabel = item.size ? `<div style="font-size: 0.85em; opacity: 0.8;">Talla: ${item.size}</div>` : '';
        const onErrorAttr = item.fallback ? `onerror="this.src='${item.fallback}'"` : '';
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" ${onErrorAttr}>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                ${sizeLabel}
                <div class="cart-item-price">${formatCOP(item.price)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">&times;</button>
        `;
        cartItems.appendChild(div);
    });

    if(cartTotalPrice) cartTotalPrice.textContent = formatCOP(total);
}

function setupCartEvents() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartModal = document.getElementById('cartModal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if(cartBtn && cartModal) cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    if(closeCart && cartModal) closeCart.addEventListener('click', () => cartModal.classList.remove('active'));
    
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) return alert('El carrito está vacío');
            let msg = "Hola ESENCIA, deseo realizar el siguiente pedido:%0A";
            let total = 0;
            cart.forEach(i => {
                const sizeText = i.size ? ` [Talla: ${i.size}]` : '';
                msg += `- ${i.title}${sizeText} (x${i.quantity}) : ${formatCOP(i.price * i.quantity)}%0A`;
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

function setupCatalogSlider() {
    const slider = document.getElementById('categoriesSlider');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (!slider) return;

    const scrollAmount = 290;

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (slider.scrollLeft <= 10) {
                slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    }

    let autoSlide = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, 4000);

    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('touchstart', () => clearInterval(autoSlide), { passive: true });
}