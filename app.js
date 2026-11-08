// ==========================================
// MADEFORU JO - وظائف المتجر وسلة الشراء
// دعم خيارات الخامات، الألوان، وخدمة الحفر المخصص (3 د.أ عبر CliQ)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // تفعيل السنة الحالية في الفوتر
  const yearEl = document.getElementById("yearSpan");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // الحالة العامة مع التوافق التراجعي لبيانات السلة والطلبات
  let cart = JSON.parse(
    localStorage.getItem("madeforu_cart") ||
    localStorage.getItem("puzzleme_cart") ||
    "[]"
  );
  let activeCategory = "الكل";
  let searchQuery = "";
  let selectedProduct = null;

  // الخيارات النشطة في نافذة المنتج
  let currentMaterial = STORE_CONFIG.materials[0]; // افتراضي: MDF
  let currentColor = currentMaterial.colors[0];   // افتراضي: أول لون

  const CURRENCY = STORE_CONFIG.currency || "د.أ";

  // عناصر الصفحة
  const productsGrid = document.getElementById("productsGrid");
  const categoryContainer = document.getElementById("categoryContainer");
  const searchInput = document.getElementById("searchInput");

  // عناصر السلة
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartCount = document.getElementById("cartCount");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartDelivery = document.getElementById("cartDelivery");
  const cartTotal = document.getElementById("cartTotal");
  const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");

  // نافذة تفاصيل المنتج
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
  const modalMaterialOptions = document.getElementById("modalMaterialOptions");
  const modalColorOptions = document.getElementById("modalColorOptions");
  const selectedColorLabel = document.getElementById("selectedColorLabel");

  // عناصر الحفر المخصص
  const modalEngravingToggle = document.getElementById("modalEngravingToggle");
  const engravingInputWrap = document.getElementById("engravingInputWrap");
  const modalEngravingText = document.getElementById("modalEngravingText");
  const engravingBox = document.getElementById("engravingBox");

  // نافذة إتمام الطلب
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckoutModal = document.getElementById("closeCheckoutModal");
  const codOrderForm = document.getElementById("codOrderForm");
  const custCitySelect = document.getElementById("custCity");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutDeliveryLabel = document.getElementById("checkoutDeliveryLabel");
  const checkoutDeliveryFee = document.getElementById("checkoutDeliveryFee");
  const checkoutOrderTotal = document.getElementById("checkoutOrderTotal");
  const checkoutFormContainer = document.getElementById("checkoutFormContainer");
  const orderSuccessView = document.getElementById("orderSuccessView");
  const successOrderNumber = document.getElementById("successOrderNumber");
  const doneBtn = document.getElementById("doneBtn");
  const toast = document.getElementById("toast");

  // عناصر الدفع والتنبيه للحفر المخصص
  const checkoutCliqNoticeContainer = document.getElementById("checkoutCliqNoticeContainer");
  const checkoutEngravingRow = document.getElementById("checkoutEngravingRow");
  const checkoutEngravingTotal = document.getElementById("checkoutEngravingTotal");
  const checkoutPaymentSplitRow = document.getElementById("checkoutPaymentSplitRow");
  const checkoutUpfrontAmount = document.getElementById("checkoutUpfrontAmount");
  const checkoutCodAmount = document.getElementById("checkoutCodAmount");

  // تفاعل خيار الحفر المخصص في المودال
  if (modalEngravingToggle) {
    modalEngravingToggle.addEventListener("change", () => {
      const isEngraved = modalEngravingToggle.checked;
      if (engravingInputWrap) engravingInputWrap.style.display = isEngraved ? "block" : "none";
      if (engravingBox) engravingBox.classList.toggle("active", isEngraved);
      
      const extraFee = isEngraved ? (STORE_CONFIG.engravingFee || 3.0) : 0;
      modalPrice.textContent = `${(currentMaterial.price + extraFee).toFixed(2)} ${CURRENCY}`;
    });
  }

  // حساب أجرة التوصيل ديناميكياً (عمان 1 د.أ / خارج عمان 2 د.أ)
  function getSelectedDeliveryFee() {
    if (!custCitySelect) return STORE_CONFIG.deliveryAmman || 1.0;
    const opt = custCitySelect.options[custCitySelect.selectedIndex];
    const fee = opt ? parseFloat(opt.getAttribute("data-fee")) : 1.0;
    return isNaN(fee) ? 1.0 : fee;
  }

  function updateCheckoutTotals() {
    const fee = getSelectedDeliveryFee();
    const totalOrder = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const grandTotal = totalOrder + fee;

    const totalEngraving = cart.reduce((acc, item) => acc + (item.hasEngraving ? item.engravingFee * item.qty : 0), 0);
    const basePuzzlesTotal = cart.reduce((acc, item) => acc + ((item.basePrice || item.price) * item.qty), 0);

    if (checkoutSubtotal) checkoutSubtotal.textContent = `${basePuzzlesTotal.toFixed(2)} ${CURRENCY}`;
    if (checkoutDeliveryFee) checkoutDeliveryFee.textContent = `${fee.toFixed(2)} ${CURRENCY}`;
    if (checkoutDeliveryLabel) {
      checkoutDeliveryLabel.textContent = fee === 1.0 ? "أجرة التوصيل (داخل عمان):" : "أجرة التوصيل (خارج عمان):";
    }
    if (checkoutOrderTotal) checkoutOrderTotal.textContent = `${grandTotal.toFixed(2)} ${CURRENCY}`;

    // إظهار تنبيه CliQ وتقسيم الدفع في حال وجود حفر مخصص
    if (totalEngraving > 0) {
      if (checkoutCliqNoticeContainer) checkoutCliqNoticeContainer.style.display = "block";
      if (checkoutEngravingRow) {
        checkoutEngravingRow.style.display = "flex";
        if (checkoutEngravingTotal) checkoutEngravingTotal.textContent = `${totalEngraving.toFixed(2)} ${CURRENCY}`;
      }
      if (checkoutPaymentSplitRow) {
        checkoutPaymentSplitRow.style.display = "block";
        if (checkoutUpfrontAmount) checkoutUpfrontAmount.textContent = `${totalEngraving.toFixed(2)} ${CURRENCY}`;
        if (checkoutCodAmount) checkoutCodAmount.textContent = `${(basePuzzlesTotal + fee).toFixed(2)} ${CURRENCY}`;
      }
    } else {
      if (checkoutCliqNoticeContainer) checkoutCliqNoticeContainer.style.display = "none";
      if (checkoutEngravingRow) checkoutEngravingRow.style.display = "none";
      if (checkoutPaymentSplitRow) checkoutPaymentSplitRow.style.display = "none";
    }
  }

  if (custCitySelect) {
    custCitySelect.addEventListener("change", updateCheckoutTotals);
  }

  // تهيئة الفئات وتصنيفات المنتجات
  function initCategories() {
    const categories = ["الكل", ...new Set(PRODUCTS.map(p => p.category))];
    categoryContainer.innerHTML = categories.map(cat => `
      <button class="cat-pill ${cat === "الكل" ? "active" : ""}" data-category="${cat}">
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

  // عرض وفلترة المنتجات
  function renderProducts() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = PRODUCTS.filter(item => {
      const matchesCat = activeCategory === "الكل" || item.category === activeCategory;
      const matchesQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        (item.material && item.material.toLowerCase().includes(q)) ||
        (item.dimensions && item.dimensions.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="empty-state">
          <h3>لا توجد نتائج مطابقة لبحثك</h3>
          <p>جرّب البحث بكلمة أخرى أو اختر تصنيف "الكل" لعرض جميع المنتجات.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-img-wrap">
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
          <img class="product-img" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='images/Shapes/heart0005.png'">
        </div>
        <div class="product-body">
          <div class="product-category">${item.category}</div>
          <h3 class="product-title">${item.title}</h3>
          <div class="product-specs">
            <span>📏 40 سم</span> • <span>✨ خامات صلبة فاخرة</span>
          </div>
          <p class="product-desc">${item.shortDesc}</p>
          <div class="product-footer">
            <div>
              <span class="product-price">${item.price.toFixed(2)} ${CURRENCY}</span>
              <span style="font-size:0.75rem; color:#888; display:block;">(خشب 7 د.أ / أكريليك 10 د.أ)</span>
            </div>
            <button class="add-btn add-to-cart-quick" data-id="${item.id}">
              خيارات المنتج والحفر
            </button>
          </div>
        </div>
      </div>
    `).join("");

    productsGrid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = parseInt(card.getAttribute("data-id"));
        openProductModalView(id);
      });
    });
  }

  // توليد خيارات الخامة والألوان داخل المودال
  function renderOptionsUI() {
    if (!modalMaterialOptions || !modalColorOptions) return;

    modalMaterialOptions.innerHTML = STORE_CONFIG.materials.map(mat => `
      <div class="material-card-btn ${mat.id === currentMaterial.id ? 'active' : ''}" data-mat-id="${mat.id}">
        <div class="material-card-title">
          <span>${mat.name}</span>
          <span class="material-card-price">${mat.price.toFixed(2)} ${CURRENCY}</span>
        </div>
        <div class="material-card-desc">${mat.desc}</div>
      </div>
    `).join("");

    modalMaterialOptions.querySelectorAll(".material-card-btn").forEach(card => {
      card.addEventListener("click", () => {
        const matId = card.getAttribute("data-mat-id");
        currentMaterial = STORE_CONFIG.materials.find(m => m.id === matId) || STORE_CONFIG.materials[0];
        currentColor = currentMaterial.colors[0];

        const isEngraved = modalEngravingToggle && modalEngravingToggle.checked;
        const extraFee = isEngraved ? (STORE_CONFIG.engravingFee || 3.0) : 0;
        modalPrice.textContent = `${(currentMaterial.price + extraFee).toFixed(2)} ${CURRENCY}`;
        modalWood.textContent = currentMaterial.name;

        renderOptionsUI();
      });
    });

    if (selectedColorLabel) selectedColorLabel.textContent = currentColor.name;

    modalColorOptions.innerHTML = currentMaterial.colors.map(col => `
      <button type="button" class="color-swatch-btn ${col.id === currentColor.id ? 'active' : ''}" data-col-id="${col.id}">
        <span class="color-dot" style="background: ${col.hex}; ${col.border ? `border: 1px solid ${col.border};` : ''}"></span>
        <span>${col.name}</span>
      </button>
    `).join("");

    modalColorOptions.querySelectorAll(".color-swatch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const colId = btn.getAttribute("data-col-id");
        currentColor = currentMaterial.colors.find(c => c.id === colId) || currentMaterial.colors[0];
        if (selectedColorLabel) selectedColorLabel.textContent = currentColor.name;

        modalColorOptions.querySelectorAll(".color-swatch-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // فتح نافذة تفاصيل المنتج
  function openProductModalView(id) {
    const item = PRODUCTS.find(p => p.id === id);
    if (!item) return;

    selectedProduct = item;
    currentMaterial = STORE_CONFIG.materials[0]; // خشب MDF
    currentColor = currentMaterial.colors[0];   // خشب فاتح

    // تصفير خيار الحفر
    if (modalEngravingToggle) {
      modalEngravingToggle.checked = false;
      if (engravingInputWrap) engravingInputWrap.style.display = "none";
      if (engravingBox) engravingBox.classList.remove("active");
      if (modalEngravingText) modalEngravingText.value = "";
    }

    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalBadge.textContent = item.badge || item.category;
    modalTitle.textContent = item.title;
    modalWood.textContent = currentMaterial.name;
    modalDimensions.textContent = item.dimensions || "المقاس 40 سم";
    modalDesc.textContent = item.description;
    modalPrice.textContent = `${currentMaterial.price.toFixed(2)} ${CURRENCY}`;

    renderOptionsUI();

    const thumbsContainer = document.getElementById("modalGalleryThumbnails");
    if (thumbsContainer) {
      if (item.gallery && item.gallery.length > 1) {
        thumbsContainer.style.display = "flex";
        thumbsContainer.innerHTML = item.gallery.map((gImg, idx) => `
          <img src="${gImg}" alt="زاوية ${idx + 1}" style="width: 58px; height: 58px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid ${idx === 0 ? 'var(--brand-primary)' : 'var(--border-subtle)'};" class="modal-thumb-btn">
        `).join("");
        thumbsContainer.querySelectorAll(".modal-thumb-btn").forEach(thumb => {
          thumb.addEventListener("click", () => {
            modalImg.src = thumb.src;
            thumbsContainer.querySelectorAll(".modal-thumb-btn").forEach(t => t.style.borderColor = "var(--border-subtle)");
            thumb.style.borderColor = "var(--brand-primary)";
          });
        });
      } else {
        thumbsContainer.style.display = "none";
        thumbsContainer.innerHTML = "";
      }
    }

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
      addToCartWithOptions(selectedProduct, currentMaterial, currentColor);
      productModal.classList.remove("active");
    }
  });

  // إضافة عنصر إلى السلة مع خيارات الخامة، اللون، والحفر المخصص
  function addToCartWithOptions(product, material, color) {
    const hasEngraving = modalEngravingToggle ? modalEngravingToggle.checked : false;
    const engravingText = hasEngraving ? (modalEngravingText.value.trim() || "نص/شعار مخصص عبر الواتساب") : "";
    const engravingFee = hasEngraving ? (STORE_CONFIG.engravingFee || 3.0) : 0;
    const finalPrice = material.price + engravingFee;
    const cartItemId = `${product.id}_${material.id}_${color.id}_${hasEngraving ? 'eng_' + encodeURIComponent(engravingText) : 'std'}`;

    const existing = cart.find(c => c.cartItemId === cartItemId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        cartItemId,
        productId: product.id,
        title: product.title,
        materialName: material.name,
        colorName: color.name,
        hasEngraving,
        engravingText,
        engravingFee,
        basePrice: material.price,
        price: finalPrice,
        image: product.image,
        qty: 1
      });
    }

    saveCart();
    renderCart();
    showToast(`تمت إضافة "${product.title}" إلى السلة 🎁`);
  }

  function updateQty(cartItemId, delta) {
    const item = cart.find(c => c.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.cartItemId !== cartItemId);
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(cartItemId) {
    cart = cart.filter(c => c.cartItemId !== cartItemId);
    saveCart();
    renderCart();
  }

  function saveCart() {
    localStorage.setItem("madeforu_cart", JSON.stringify(cart));
    // مزامنة احتياطية
    localStorage.setItem("puzzleme_cart", JSON.stringify(cart));
  }

  function renderCart() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.textContent = totalCount;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #888;">
          <p style="font-size: 3rem; margin-bottom: 0.5rem;">🎁</p>
          <p style="font-weight: 700; color: #444; font-size: 1.1rem;">السلة فارغة حالياً</p>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">اختر من منتجات MadeForU المصنوعة خصيصاً لك مقاس 40 سم مع إمكانية إضافة حفر ليزر مخصص!</p>
        </div>
      `;
      cartSubtotal.textContent = `0.00 ${CURRENCY}`;
      if (cartDelivery) cartDelivery.textContent = `عمان 1.00 / المحافظات 2.00 ${CURRENCY}`;
      cartTotal.textContent = `0.00 ${CURRENCY}`;
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
            <div class="cart-item-variant">
              <span>${item.materialName}</span> • <strong>${item.colorName}</strong>
            </div>
            ${item.hasEngraving ? `
              <div style="font-size:0.75rem; color:#8F415C; font-weight:700; margin-top:3px; background:#FDF1F4; padding:2px 6px; border-radius:4px; display:inline-block;">
                ✨ حفر مخصص (+${(item.engravingFee || (typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.engravingFee : 3)).toFixed(0)} د.أ): "${item.engravingText}"
              </div>
            ` : ''}
            <div class="cart-item-price" style="margin-top:0.25rem;">${item.price.toFixed(2)} ${CURRENCY}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.madeforuUpdateQty('${item.cartItemId}', -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="window.madeforuUpdateQty('${item.cartItemId}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.madeforuRemoveItem('${item.cartItemId}')" title="حذف">&times;</button>
        </div>
      `;
    }).join("");

    cartSubtotal.textContent = `${subtotal.toFixed(2)} ${CURRENCY}`;
    if (cartDelivery) cartDelivery.textContent = `1.00 د.أ (عمان) / 2.00 د.أ (المحافظات)`;
    cartTotal.textContent = `${(subtotal + 1.0).toFixed(2)} ${CURRENCY}*`;
  }

  // ربط الدوال مع النطاق العام للعمل داخل أزرار HTML المباشرة
  window.madeforuUpdateQty = updateQty;
  window.madeforuRemoveItem = removeFromCart;
  window.puzzleUpdateQty = updateQty;
  window.puzzleRemoveItem = removeFromCart;

  // فتح وإغلاق درج السلة
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

  // الانتقال لنافذة الدفع وتأكيد العنوان
  proceedToCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    closeCartDrawer();
    updateCheckoutTotals();
    
    checkoutFormContainer.style.display = "block";
    orderSuccessView.style.display = "none";
    checkoutModal.classList.add("active");
  });

  closeCheckoutModal.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // تأكيد الطلب وإرساله مباشرة عبر الواتساب
  codOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const city = document.getElementById("custCity").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const notes = document.getElementById("custNotes").value.trim();
    const deliveryFee = getSelectedDeliveryFee();

    if (!name || !phone || !address) {
      alert("يرجى ملء الاسم ورقم الهاتف وعنوان التوصيل أولاً لتجهيز رسالة طلبك بدقة!");
      return;
    }

    const orderNumber = "MFU-" + Math.floor(1000 + Math.random() * 9000);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const grandTotal = subtotal + deliveryFee;

    const totalEngraving = cart.reduce((acc, item) => acc + (item.hasEngraving ? item.engravingFee * item.qty : 0), 0);
    const basePuzzlesTotal = cart.reduce((acc, item) => acc + ((item.basePrice || item.price) * item.qty), 0);
    const remainingCod = basePuzzlesTotal + deliveryFee;

    // حفظ نسخة محلية احتياطية
    const orderData = {
      orderNumber,
      customer: { name, phone, city, address, notes },
      items: [...cart],
      subtotal,
      totalEngraving,
      deliveryFee,
      grandTotal,
      paymentMethod: totalEngraving > 0 ? "عربون حفر مسبق + متبقي كاش عند الاستلام" : "دفع عند الاستلام (كاش)",
      date: new Date().toISOString()
    };

    const existingOrders = JSON.parse(
      localStorage.getItem("madeforu_orders") ||
      localStorage.getItem("puzzleme_orders") ||
      "[]"
    );
    existingOrders.push(orderData);
    localStorage.setItem("madeforu_orders", JSON.stringify(existingOrders));
    localStorage.setItem("puzzleme_orders", JSON.stringify(existingOrders));

    // صياغة رسالة الواتساب العربية مع تفاصيل الحفر
    let itemsText = cart.map(i => {
      let line = `• ${i.title} (${i.qty} قطع) = ${(i.price * i.qty).toFixed(2)} ${CURRENCY}\n` +
                 `  └ الخامة: ${i.materialName} | اللون: ${i.colorName}`;
      if (i.hasEngraving) {
        line += `\n  └ ✨ حفر ليزر مخصص (+${(i.engravingFee || (typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.engravingFee : 3)).toFixed(0)} د.أ): "${i.engravingText}"`;
      }
      return line;
    }).join("\n\n");

    const deliveryNote = deliveryFee === 1.0 ? "1.00 د.أ (داخل عمان)" : "2.00 د.أ (خارج عمان / المحافظات)";

    let paymentSplitMessage = "";
    if (totalEngraving > 0) {
      paymentSplitMessage = `\n━━━━━━━━━━━━━━━━━━━━\n` +
        `⚠️ *سياسة دفع الحفر المخصص:*\n` +
        `💳 *عربون الحفر المطلوب تحويله مسبقاً:* ${totalEngraving.toFixed(2)} ${CURRENCY}\n` +
        `   • (سيتم تزويدك ببيانات التحويل عبر CliQ / المحفظة هنا في المحادثة مباشرة)\n` +
        `💵 *المتبقي كاش عند الاستلام:* ${remainingCod.toFixed(2)} ${CURRENCY}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n`;
    }

    const message = `*طلب جديد — متجر MadeForU*\n\n` +
      `🔢 *رقم الطلب:* #${orderNumber}\n` +
      `👤 *الاسم:* ${name}\n` +
      `📞 *رقم الهاتف:* ${phone}\n` +
      `📍 *المنطقة:* ${city}\n` +
      `🏠 *العنوان:* ${address}\n` +
      (notes ? `📝 *ملاحظات:* ${notes}\n` : "") +
      `\n*القطع والمواصفات المطلوبة (مقاس 40 سم):*\n${itemsText}\n\n` +
      `💵 مجموع المنتجات: ${basePuzzlesTotal.toFixed(2)} ${CURRENCY}\n` +
      (totalEngraving > 0 ? `✨ خدمة الحفر المخصص: ${totalEngraving.toFixed(2)} ${CURRENCY}\n` : "") +
      `🚚 أجرة التوصيل: ${deliveryNote}\n` +
      `💰 *المجموع الكلي للطلب: ${grandTotal.toFixed(2)} ${CURRENCY}*\n` +
      paymentSplitMessage;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encoded}`;

    const retryLink = document.getElementById("retryWhatsAppLink");
    if (retryLink) retryLink.href = whatsappUrl;

    window.open(whatsappUrl, "_blank");

    cart = [];
    saveCart();
    renderCart();

    successOrderNumber.textContent = `طلب رقم #${orderNumber}`;
    checkoutFormContainer.style.display = "none";
    orderSuccessView.style.display = "block";
    codOrderForm.reset();
  });

  doneBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // البحث الفوري
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // إظهار التنبيه العائم
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 2500);
  }

  // التشغيل الأولي
  initCategories();
  renderProducts();
  renderCart();
});
