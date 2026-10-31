// ==========================================
// TIMBER & GRAIN - APP FUNCTIONALITY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.getElementById("yearSpan");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // State
  let cart = JSON.parse(localStorage.getItem("timber_cart") || "[]");
  let activeCategory = "All";
  let searchQuery = "";
  let selectedProduct = null;

  // DOM Elements
  const productsGrid = document.getElementById("productsGrid");
  const categoryContainer = document.getElementById("categoryContainer");
  const searchInput = document.getElementById("searchInput");

  // Cart DOM
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartCount = document.getElementById("cartCount");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");
  const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");

  // Product Modal DOM
  const productModal = document.getElementById("productModal");
  const closeProductModal = document.getElementById("closeProductModal");
  const modalImg = document.getElementById("modalImg");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalWood = document.getElementById("modalWood");
  const modalDimensions = document.getElementById("modalDimensions");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

  // Checkout Modal DOM
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckoutModal = document.getElementById("closeCheckoutModal");
  const codOrderForm = document.getElementById("codOrderForm");
  const checkoutOrderTotal = document.getElementById("checkoutOrderTotal");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");
  const checkoutFormContainer = document.getElementById("checkoutFormContainer");
  const orderSuccessView = document.getElementById("orderSuccessView");
  const successOrderNumber = document.getElementById("successOrderNumber");
  const doneBtn = document.getElementById("doneBtn");
  const toast = document.getElementById("toast");

  // Initialize Categories
  function initCategories() {
    const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
    categoryContainer.innerHTML = categories.map(cat => `
      <button class="cat-pill ${cat === "All" ? "active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    categoryContainer.querySelectorAll(".cat-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        categoryContainer.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        renderProducts();
      });
    });
  }

  // Filter & Render Products
  function renderProducts() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = PRODUCTS.filter(item => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.woodType.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="empty-state">
          <h3>No woodworking items found</h3>
          <p>Try searching with another word or resetting the category filter.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-img-wrap">
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
          <img class="product-img" src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="product-body">
          <div class="product-category">${item.category}</div>
          <h3 class="product-title">${item.title}</h3>
          <div class="product-specs">
            <span>🪵 ${item.woodType}</span>
          </div>
          <p class="product-desc">${item.shortDesc}</p>
          <div class="product-footer">
            <span class="product-price">${STORE_CONFIG.currency}${item.price.toFixed(2)}</span>
            <button class="add-btn add-to-cart-quick" data-id="${item.id}">
              + Add
            </button>
          </div>
        </div>
      </div>
    `).join("");

    // Attach click events on cards & add buttons
    productsGrid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".add-to-cart-quick")) return; // Don't trigger if clicked on Add button
        const id = parseInt(card.getAttribute("data-id"));
        openProductModalView(id);
      });
    });

    productsGrid.querySelectorAll(".add-to-cart-quick").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute("data-id"));
        addToCart(id);
      });
    });
  }

  // Open Product Modal
  function openProductModalView(id) {
    const item = PRODUCTS.find(p => p.id === id);
    if (!item) return;

    selectedProduct = item;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalBadge.textContent = item.badge || item.category;
    modalTitle.textContent = item.title;
    modalWood.textContent = item.woodType;
    modalDimensions.textContent = item.dimensions;
    modalDesc.textContent = item.description;
    modalPrice.textContent = `${STORE_CONFIG.currency}${item.price.toFixed(2)}`;

    productModal.classList.add("active");
  }

  closeProductModal.addEventListener("click", () => {
    productModal.classList.remove("active");
  });

  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) productModal.classList.remove("active");
  });

  modalAddToCartBtn.addEventListener("click", () => {
    if (selectedProduct) {
      addToCart(selectedProduct.id);
      productModal.classList.remove("active");
    }
  });

  // Cart Logic
  function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast(`Added "${product.title}" to cart`);
  }

  function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    renderCart();
  }

  function saveCart() {
    localStorage.setItem("timber_cart", JSON.stringify(cart));
  }

  function renderCart() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.textContent = totalCount;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #888;">
          <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🪵</p>
          <p style="font-weight: 600; color: #444;">Your cart is empty</p>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">Explore our catalog to find handmade wooden pieces.</p>
        </div>
      `;
      cartSubtotal.textContent = `${STORE_CONFIG.currency}0.00`;
      cartTotal.textContent = `${STORE_CONFIG.currency}0.00`;
      proceedToCheckoutBtn.disabled = true;
      proceedToCheckoutBtn.style.opacity = "0.5";
      proceedToCheckoutBtn.style.cursor = "not-allowed";
      return;
    }

    proceedToCheckoutBtn.disabled = false;
    proceedToCheckoutBtn.style.opacity = "1";
    proceedToCheckoutBtn.style.cursor = "pointer";

    let subtotal = 0;
    cartItemsList.innerHTML = cart.map(item => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${STORE_CONFIG.currency}${item.price.toFixed(2)}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.timberUpdateQty(${item.id}, -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="window.timberUpdateQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.timberRemoveItem(${item.id})" title="Remove item">&times;</button>
        </div>
      `;
    }).join("");

    cartSubtotal.textContent = `${STORE_CONFIG.currency}${subtotal.toFixed(2)}`;
    cartTotal.textContent = `${STORE_CONFIG.currency}${subtotal.toFixed(2)}`;
  }

  // Expose cart actions to global scope for inline button handlers
  window.timberUpdateQty = updateQty;
  window.timberRemoveItem = removeFromCart;

  // Drawer Toggle
  function openCartDrawer() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("active");
  }
  function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("active");
  }

  openCartBtn.addEventListener("click", openCartDrawer);
  closeCartBtn.addEventListener("click", closeCartDrawer);
  cartOverlay.addEventListener("click", closeCartDrawer);

  // Checkout Actions
  proceedToCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    closeCartDrawer();
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    checkoutOrderTotal.textContent = `${STORE_CONFIG.currency}${total.toFixed(2)}`;
    checkoutFormContainer.style.display = "block";
    orderSuccessView.style.display = "none";
    checkoutModal.classList.add("active");
  });

  closeCheckoutModal.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Submit Order (Local / Email Simulation)
  codOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const notes = document.getElementById("custNotes").value.trim();
    const orderNumber = "TG-" + Math.floor(1000 + Math.random() * 9000);

    const orderData = {
      orderNumber,
      customer: { name, phone, address, notes },
      items: [...cart],
      total: cart.reduce((acc, item) => acc + (item.price * item.qty), 0),
      paymentMethod: "Cash on Delivery",
      date: new Date().toISOString()
    };

    // Store order locally so the owner can view orders in browser
    const existingOrders = JSON.parse(localStorage.getItem("timber_orders") || "[]");
    existingOrders.push(orderData);
    localStorage.setItem("timber_orders", JSON.stringify(existingOrders));

    // Clear cart
    cart = [];
    saveCart();
    renderCart();

    // Show success view
    successOrderNumber.textContent = `Order #${orderNumber}`;
    checkoutFormContainer.style.display = "none";
    orderSuccessView.style.display = "block";
    codOrderForm.reset();
  });

  // Direct WhatsApp Order Button
  whatsappOrderBtn.addEventListener("click", () => {
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const notes = document.getElementById("custNotes").value.trim();

    if (!name || !phone || !address) {
      alert("Please fill in your Name, Phone Number, and Delivery Address first so we can format your order message!");
      return;
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let itemsText = cart.map(i => `• ${i.title} (x${i.qty}) - ${STORE_CONFIG.currency}${(i.price * i.qty).toFixed(2)}`).join("\n");

    const message = `*NEW CASH ON DELIVERY ORDER*\n\n` +
      `*Customer Details:*\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📍 Address: ${address}\n` +
      (notes ? `📝 Notes: ${notes}\n` : "") +
      `\n*Items Ordered:*\n${itemsText}\n\n` +
      `💰 *Total to Pay on Delivery: ${STORE_CONFIG.currency}${total.toFixed(2)}*\n\n` +
      `Payment Method: Cash on Delivery`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Also record locally
    const orderNumber = "TG-WA-" + Math.floor(1000 + Math.random() * 9000);
    successOrderNumber.textContent = `Order #${orderNumber}`;
    checkoutFormContainer.style.display = "none";
    orderSuccessView.style.display = "block";

    cart = [];
    saveCart();
    renderCart();
    codOrderForm.reset();
  });

  doneBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Search input handler
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Toast utility
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 2500);
  }

  // Initial runs
  initCategories();
  renderProducts();
  renderCart();
});
