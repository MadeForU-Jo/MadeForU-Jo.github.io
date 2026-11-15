// ==========================================
// MADEFORU JO - وظائف المتجر وسلة الشراء
// دعم لوحات المكاتب من خشب الزان الطبيعي الصلب + البازل الفنية
// حفر ليزر مخصص للوجهين (الاسم، الوظيفة، الشعار، وإهداء الوجه الخلفي) + خيار صندوق الإهداء (3 د.أ)
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
  let currentMaterial = STORE_CONFIG.materials[0]; // افتراضي: خشب زان طبيعي صلب
  let currentColor = currentMaterial.colors[0];

  const CURRENCY = STORE_CONFIG.currency || "د.أ";

  // حساب سعر المنتج بحسب الخيارات
  function getProductCalculatedPrice(product, material) {
    if (!product) return 12.0;
    const base = product.price || 12.0;
    const offset = material && material.priceOffset ? material.priceOffset : 0;
    return base + offset;
  }

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

  // عناصر خيارات لوحة الاسم المكتبية
  const deskPlateCustomizationBlock = document.getElementById("deskPlateCustomizationBlock");
  const deskPlateNameInput = document.getElementById("deskPlateName");
  const deskPlateTitleInput = document.getElementById("deskPlateTitle");
  const deskPlateLogoInput = document.getElementById("deskPlateLogo");
  const deskPlateBackMsgInput = document.getElementById("deskPlateBackMsg");
  const deskPlateBoxToggle = document.getElementById("deskPlateBoxToggle");

  // عناصر خيارات البازل
  const puzzleOptionsBlock = document.getElementById("puzzleOptionsBlock");
  const modalMaterialOptions = document.getElementById("modalMaterialOptions");
  const modalColorOptions = document.getElementById("modalColorOptions");
  const selectedColorLabel = document.getElementById("selectedColorLabel");
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
  const checkoutAddonsRow = document.getElementById("checkoutAddonsRow");
  const checkoutAddonsTotal = document.getElementById("checkoutAddonsTotal");
  const checkoutUpfrontAmount = document.getElementById("checkoutUpfrontAmount");
  const checkoutCodAmount = document.getElementById("checkoutCodAmount");
  const checkoutFormContainer = document.getElementById("checkoutFormContainer");
  const orderSuccessView = document.getElementById("orderSuccessView");
  const successOrderNumber = document.getElementById("successOrderNumber");
  const doneBtn = document.getElementById("doneBtn");
  const toast = document.getElementById("toast");

  // تفاعل صندوق الإهداء للوحة المكتبية (+3 د.أ)
  if (deskPlateBoxToggle) {
    deskPlateBoxToggle.addEventListener("change", () => {
      if (!selectedProduct) return;
      const hasBox = deskPlateBoxToggle.checked;
      const boxPrice = hasBox ? (selectedProduct.boxFee || 3.0) : 0;
      modalPrice.textContent = `${(selectedProduct.price + boxPrice).toFixed(2)} ${CURRENCY}`;
    });
  }

  // تفاعل حفر الليزر للبازل
  if (modalEngravingToggle) {
    modalEngravingToggle.addEventListener("change", () => {
      const isEngraved = modalEngravingToggle.checked;
      if (engravingInputWrap) engravingInputWrap.style.display = isEngraved ? "block" : "none";
      if (engravingBox) engravingBox.classList.toggle("active", isEngraved);
      
      const extraFee = isEngraved ? (STORE_CONFIG.engravingFee || 3.0) : 0;
      const basePrice = getProductCalculatedPrice(selectedProduct, currentMaterial);
      modalPrice.textContent = `${(basePrice + extraFee).toFixed(2)} ${CURRENCY}`;
    });
  }

  // حساب أجرة التوصيل
  function getSelectedDeliveryFee() {
    if (!custCitySelect) return STORE_CONFIG.deliveryAmman || 1.0;
    const opt = custCitySelect.options[custCitySelect.selectedIndex];
    const fee = opt ? parseFloat(opt.getAttribute("data-fee")) : 1.0;
    return isNaN(fee) ? 1.0 : fee;
  }

  function updateCheckoutTotals() {
    const fee = getSelectedDeliveryFee();
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const grandTotal = subtotal + fee;

    // حساب العربون المطلوب: 10 دنانير على الأقل لأي عمل مخصص
    const customItemsCount = cart.filter(i => i.isDeskPlate || i.hasEngraving).reduce((sum, i) => sum + i.qty, 0);
    const minDeposit = customItemsCount > 0 ? Math.max(10.0, 10.0 * customItemsCount) : 0;
    const upfrontDeposit = Math.min(subtotal, minDeposit);
    const remainingCod = (subtotal - upfrontDeposit) + fee;

    if (checkoutSubtotal) checkoutSubtotal.textContent = `${subtotal.toFixed(2)} ${CURRENCY}`;
    if (checkoutDeliveryFee) checkoutDeliveryFee.textContent = `${fee.toFixed(2)} ${CURRENCY}`;
    if (checkoutDeliveryLabel) {
      checkoutDeliveryLabel.textContent = fee === 1.0 ? "أجرة التوصيل (داخل عمان):" : "أجرة التوصيل (خارج عمان):";
    }
    if (checkoutOrderTotal) checkoutOrderTotal.textContent = `${grandTotal.toFixed(2)} ${CURRENCY}`;

    if (checkoutUpfrontAmount) checkoutUpfrontAmount.textContent = `${upfrontDeposit.toFixed(2)} ${CURRENCY}`;
    if (checkoutCodAmount) checkoutCodAmount.textContent = `${remainingCod.toFixed(2)} ${CURRENCY}`;
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

  // عرض المنتجات
  function renderProducts() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = PRODUCTS.filter(item => {
      const matchesCat = activeCategory === "الكل" || item.category === activeCategory;
      const matchesQuery = !q ||
        item.title.toLowerCase().includes(q) ||
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
          <img class="product-img" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='images/MadeForU Logo Trans.png'">
        </div>
        <div class="product-body">
          <div class="product-category">${item.category}</div>
          <h3 class="product-title">${item.title}</h3>
          <div class="product-specs">
            <span>📏 ${item.dimensions || "يدوي الصنع"}</span> • <span>✨ حفر ليزر مخصص</span>
          </div>
          <p class="product-desc">${item.shortDesc}</p>
          <div class="product-footer">
            <div>
              <span class="product-price">${item.price.toFixed(2)} ${CURRENCY}</span>
              ${item.isDeskPlate ? `<span style="font-size:0.75rem; color:#8F415C; display:block; font-weight:700;">+ حفر الوجهين متاح ✨</span>` : ''}
            </div>
            <button class="add-btn add-to-cart-quick" data-id="${item.id}">
              ${item.isDeskPlate ? 'تخصيص اللوحة والحفر' : 'خيارات البازل والحفر'}
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

  // خيارات البازل
  function renderPuzzleOptionsUI() {
    if (!modalMaterialOptions || !modalColorOptions || !selectedProduct) return;

    modalMaterialOptions.innerHTML = STORE_CONFIG.materials.map(mat => {
      const calcPrice = getProductCalculatedPrice(selectedProduct, mat);
      return `
        <div class="material-card-btn ${mat.id === currentMaterial.id ? 'active' : ''}" data-mat-id="${mat.id}">
          <div class="material-card-title">
            <span>${mat.name}</span>
            <span class="material-card-price">${calcPrice.toFixed(2)} ${CURRENCY}</span>
          </div>
          <div class="material-card-desc">${mat.desc}</div>
        </div>
      `;
    }).join("");

    modalMaterialOptions.querySelectorAll(".material-card-btn").forEach(card => {
      card.addEventListener("click", () => {
        const matId = card.getAttribute("data-mat-id");
        currentMaterial = STORE_CONFIG.materials.find(m => m.id === matId) || STORE_CONFIG.materials[0];
        currentColor = currentMaterial.colors[0];

        const isEngraved = modalEngravingToggle && modalEngravingToggle.checked;
        const extraFee = isEngraved ? (STORE_CONFIG.engravingFee || 3.0) : 0;
        const basePrice = getProductCalculatedPrice(selectedProduct, currentMaterial);
        modalPrice.textContent = `${(basePrice + extraFee).toFixed(2)} ${CURRENCY}`;
        modalWood.textContent = currentMaterial.name;

        renderPuzzleOptionsUI();
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
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalBadge.textContent = item.badge || item.category;
    modalTitle.textContent = item.title;
    modalDimensions.textContent = item.dimensions || "40 × 10 سم تقريباً";
    modalDesc.textContent = item.description;

    if (item.isDeskPlate) {
      // إظهار قسم اللوحة المكتبية وإخفاء البازل
      if (deskPlateCustomizationBlock) deskPlateCustomizationBlock.style.display = "block";
      if (puzzleOptionsBlock) puzzleOptionsBlock.style.display = "none";
      if (modalWood) modalWood.textContent = "خشب زان طبيعي صلب (سماكة عالية)";

      // تصفير حقول اللوحة المكتبية
      if (deskPlateNameInput) deskPlateNameInput.value = "";
      if (deskPlateTitleInput) deskPlateTitleInput.value = "";
      if (deskPlateLogoInput) deskPlateLogoInput.value = "";
      if (deskPlateBackMsgInput) deskPlateBackMsgInput.value = "";
      if (deskPlateBoxToggle) deskPlateBoxToggle.checked = false;

      modalPrice.textContent = `${item.price.toFixed(2)} ${CURRENCY}`;
    } else {
      // إظهار قسم البازل وإخفاء اللوحة المكتبية
      if (deskPlateCustomizationBlock) deskPlateCustomizationBlock.style.display = "none";
      if (puzzleOptionsBlock) puzzleOptionsBlock.style.display = "block";

      currentMaterial = STORE_CONFIG.materials[0];
      currentColor = currentMaterial.colors[0];
      if (modalWood) modalWood.textContent = currentMaterial.name;

      // تصفير خيار الحفر
      if (modalEngravingToggle) {
        modalEngravingToggle.checked = false;
        if (engravingInputWrap) engravingInputWrap.style.display = "none";
        if (engravingBox) engravingBox.classList.remove("active");
        if (modalEngravingText) modalEngravingText.value = "";
      }

      modalPrice.textContent = `${getProductCalculatedPrice(item, currentMaterial).toFixed(2)} ${CURRENCY}`;
      renderPuzzleOptionsUI();
    }

    // معرض الصور والمخطط التوضيحي
    const thumbsContainer = document.getElementById("modalGalleryThumbnails");
    if (thumbsContainer) {
      if (item.gallery && item.gallery.length > 1) {
        thumbsContainer.style.display = "flex";
        thumbsContainer.innerHTML = item.gallery.map((gImg, idx) => `
          <img src="${gImg}" alt="صورة ${idx + 1}" style="width: 62px; height: 62px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid ${idx === 0 ? 'var(--brand-primary)' : 'var(--border-subtle)'};" class="modal-thumb-btn">
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
      addToCartWithOptions(selectedProduct);
      productModal.classList.remove("active");
    }
  });

  // إضافة عنصر إلى السلة
  function addToCartWithOptions(product) {
    if (product.isDeskPlate) {
      const engravedName = deskPlateNameInput ? deskPlateNameInput.value.trim() : "";
      const engravedTitle = deskPlateTitleInput ? deskPlateTitleInput.value.trim() : "";
      const engravedLogo = deskPlateLogoInput ? deskPlateLogoInput.value.trim() : "";
      const backMessage = deskPlateBackMsgInput ? deskPlateBackMsgInput.value.trim() : "";
      const hasBox = deskPlateBoxToggle ? deskPlateBoxToggle.checked : false;
      const boxFee = hasBox ? (product.boxFee || 3.0) : 0;
      const finalPrice = product.price + boxFee;

      const cartItemId = `desk_${product.id}_${encodeURIComponent(engravedName)}_${hasBox ? 'box' : 'nobox'}_${Date.now()}`;

      cart.push({
        cartItemId,
        productId: product.id,
        isDeskPlate: true,
        title: product.title,
        materialName: "خشب زان طبيعي صلب (40×10 سم)",
        engravedName: engravedName || "حسب التنسيق بالواتساب",
        engravedTitle,
        engravedLogo,
        backMessage,
        hasBox,
        boxFee,
        price: finalPrice,
        image: product.image,
        qty: 1
      });
    } else {
      // منتج بازل
      const hasEngraving = modalEngravingToggle ? modalEngravingToggle.checked : false;
      const engravingText = hasEngraving ? (modalEngravingText.value.trim() || "حفر اسم / إهداء مخصص") : "";
      const engravingFee = hasEngraving ? (STORE_CONFIG.engravingFee || 3.0) : 0;
      const basePrice = getProductCalculatedPrice(product, currentMaterial);
      const finalPrice = basePrice + engravingFee;
      const cartItemId = `puz_${product.id}_${currentMaterial.id}_${currentColor.id}_${hasEngraving ? 'eng_' + encodeURIComponent(engravingText) : 'std'}`;

      const existing = cart.find(c => c.cartItemId === cartItemId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          cartItemId,
          productId: product.id,
          isDeskPlate: false,
          title: product.title,
          materialName: currentMaterial.name,
          colorName: currentColor.name,
          hasEngraving,
          engravingText,
          engravingFee,
          price: finalPrice,
          image: product.image,
          qty: 1
        });
      }
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
    localStorage.setItem("puzzleme_cart", JSON.stringify(cart));
  }

  function renderCart() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.textContent = totalCount;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #888;">
          <p style="font-size: 3rem; margin-bottom: 0.5rem;">💼</p>
          <p style="font-weight: 700; color: #444; font-size: 1.1rem;">السلة فارغة حالياً</p>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">اختر لوحة اسم مكتبية خشب زان أو بازل فنية لبدء طلبك وتخصيص الحفر!</p>
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

      let customDetailsHtml = '';
      if (item.isDeskPlate) {
        customDetailsHtml = `
          <div style="font-size:0.75rem; color:#6B2940; margin-top:3px; background:#FDF4E9; padding:4px 8px; border-radius:6px; line-height:1.4;">
            <div><strong>👤 الاسم:</strong> ${item.engravedName}</div>
            ${item.engravedTitle ? `<div><strong>💼 الوظيفة:</strong> ${item.engravedTitle}</div>` : ''}
            ${item.engravedLogo ? `<div><strong>⚖️ الشعار:</strong> ${item.engravedLogo}</div>` : ''}
            ${item.backMessage ? `<div><strong>💌 خلفية:</strong> "${item.backMessage}"</div>` : ''}
            ${item.hasBox ? `<div style="color:#8F415C; font-weight:700;">🎁 مشمول صندوق هدايا فاخر (+3 د.أ)</div>` : '<div style="color:#888;">بدون صندوق هدايا</div>'}
          </div>
        `;
      } else {
        customDetailsHtml = `
          <div class="cart-item-variant">
            <span>${item.materialName}</span> ${item.colorName ? `• <strong>${item.colorName}</strong>` : ''}
          </div>
          ${item.hasEngraving ? `
            <div style="font-size:0.75rem; color:#8F415C; font-weight:700; margin-top:3px; background:#FDF1F4; padding:2px 6px; border-radius:4px; display:inline-block;">
              ✨ حفر ليزر (+${(item.engravingFee || 3).toFixed(0)} د.أ): "${item.engravingText}"
            </div>
          ` : ''}
        `;
      }

      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='images/MadeForU Logo Trans.png'">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            ${customDetailsHtml}
            <div class="cart-item-price" style="margin-top:0.35rem;">${item.price.toFixed(2)} ${CURRENCY}</div>
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

  // ربط الدوال مع النطاق العام
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
      alert("يرجى ملء الاسم ورقم الهاتف وعنوان التوصيل أولاً لتجهيز تفاصيل طلبك بدقة!");
      return;
    }

    const orderNumber = "MFU-" + Math.floor(1000 + Math.random() * 9000);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const grandTotal = subtotal + deliveryFee;

    // حساب العربون (10 دنانير على الأقل للعمل المخصص)
    const customItemsCount = cart.filter(i => i.isDeskPlate || i.hasEngraving).reduce((sum, i) => sum + i.qty, 0);
    const minDeposit = customItemsCount > 0 ? Math.max(10.0, 10.0 * customItemsCount) : 0;
    const upfrontDeposit = Math.min(subtotal, minDeposit);
    const remainingCod = (subtotal - upfrontDeposit) + deliveryFee;

    // حفظ نسخة محلية احتياطية
    const orderData = {
      orderNumber,
      customer: { name, phone, city, address, notes },
      items: [...cart],
      subtotal,
      deliveryFee,
      grandTotal,
      upfrontDeposit,
      remainingCod,
      paymentMethod: "عربون (10 د.أ على الأقل) عبر CliQ + متبقي كاش عند الاستلام",
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

    // صياغة رسالة الواتساب بدقة واحترافية
    let itemsText = cart.map(i => {
      let line = `• ${i.title} (${i.qty} قطع) = ${(i.price * i.qty).toFixed(2)} ${CURRENCY}\n` +
                 `  └ الخامة: ${i.materialName}`;
      if (i.isDeskPlate) {
        line += `\n  └ 👤 الاسم المطلوب: ${i.engravedName}`;
        if (i.engravedTitle) line += `\n  └ 💼 الوظيفة/المنصب: ${i.engravedTitle}`;
        if (i.engravedLogo) line += `\n  └ ⚖️ الشعار/الرمز: ${i.engravedLogo}`;
        if (i.backMessage) line += `\n  └ 💌 إهداء الوجه الخلفي: "${i.backMessage}"`;
        line += `\n  └ 🎁 صندوق هدايا فاخر (+3 د.أ): ${i.hasBox ? 'نعم (مشمول)' : 'لا (بدون صندوق)'}`;
      } else if (i.hasEngraving) {
        line += `\n  └ ✨ حفر ليزر مخصص (+${(i.engravingFee || 3).toFixed(0)} د.أ): "${i.engravingText}"`;
      }
      return line;
    }).join("\n\n");

    const deliveryNote = deliveryFee === 1.0 ? "1.00 د.أ (داخل عمان)" : "2.00 د.أ (خارج عمان / المحافظات)";

    const message = `*طلب جديد — مشغل MadeForU للنجارة الحرفية*\n\n` +
      `🔢 *رقم الطلب:* #${orderNumber}\n` +
      `👤 *الاسم:* ${name}\n` +
      `📞 *رقم الهاتف:* ${phone}\n` +
      `📍 *المنطقة:* ${city}\n` +
      `🏠 *العنوان:* ${address}\n` +
      (notes ? `📝 *ملاحظات إضافية:* ${notes}\n` : "") +
      `\n*تفاصيل المنتجات والتخصيص المطلوب:*\n${itemsText}\n\n` +
      `💵 مجموع المنتجات: ${subtotal.toFixed(2)} ${CURRENCY}\n` +
      `🚚 أجرة التوصيل: ${deliveryNote}\n` +
      `💰 *المجموع الكلي للطلب: ${grandTotal.toFixed(2)} ${CURRENCY}*\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `⚠️ *سياسة دفع العمل المخصص:*\n` +
      `💳 *عربون التفصيل المطلوب تحويله مسبقاً (10 دنانير على الأقل عبر CliQ / المحفظة):* ${upfrontDeposit.toFixed(2)} ${CURRENCY}\n` +
      `   • (سيتم تزويدك برقم الـ CliQ فوراً لبدء تفصيل اللوحة بالاسم والشعار)\n` +
      `💵 *المتبقي كاش عند الاستلام:* ${remainingCod.toFixed(2)} ${CURRENCY}\n` +
      `━━━━━━━━━━━━━━━━━━━━`;

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
