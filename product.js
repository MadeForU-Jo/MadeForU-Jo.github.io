// ==========================================
// PRODUCT PAGE JS — product.js
// صفحة المنتج المنفردة — مشغل MadeForU
// يقرأ slug من URL ويعرض بيانات المنتج من products.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // السنة في الفوتر
  const yearEl = document.getElementById("yearSpan");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const CURRENCY = STORE_CONFIG.currency || "د.أ";
  const WA_NUMBER = STORE_CONFIG.whatsappNumber || "962789423717";

  // ===== قراءة slug من URL =====
  function getSlugFromUrl() {
    const params = new URLSearchParams(window.location.search);
    // دعم أشكال URL متعددة للتوافق مع الإعلانات القديمة
    const slug = params.get("slug") ||
                 params.get("product") ||
                 params.get("p") ||
                 params.get("item") ||
                 params.get("id") ||
                 params.get("sku") ||
                 params.get("code") || "";
    const hash = window.location.hash ? window.location.hash.replace("#", "").trim() : "";
    return (slug || hash).trim().toLowerCase();
  }

  // ===== البحث عن المنتج =====
  function findProduct(key) {
    if (!key) return null;
    const str = String(key).trim().toLowerCase().replace(/^[#?]/, "").trim();
    return PRODUCTS.find(p =>
      (p.sku && p.sku.toLowerCase() === str) ||
      (p.code && String(p.code).toLowerCase() === str) ||
      (p.slug && p.slug.toLowerCase() === str) ||
      (p.id && String(p.id).toLowerCase() === str) ||
      (Array.isArray(p.aliases) && p.aliases.some(a => String(a).toLowerCase() === str)) ||
      (p.code && str.split(/[-_]/).includes(String(p.code)))
    ) || null;
  }

  // ===== حساب السعر =====
  let selectedProduct = null;
  let currentMaterial = STORE_CONFIG.materials[0];
  let currentColor = currentMaterial.colors[0];

  function getBasePrice(product, material) {
    if (!product) return 0;
    const base = product.price || 0;
    const offset = material && material.priceOffset ? material.priceOffset : 0;
    return base + offset;
  }

  // ===== تحديث السعر المعروض =====
  function refreshPrice() {
    const finalPriceEl = document.getElementById("ppFinalPrice");
    const topPriceEl = document.getElementById("ppPrice");
    if (!selectedProduct || !finalPriceEl) return;

    let total = selectedProduct.price || 0;

    if (selectedProduct.isDeskPlate) {
      const boxToggle = document.getElementById("ppDeskBoxToggle");
      if (boxToggle && boxToggle.checked) total += (selectedProduct.boxFee || STORE_CONFIG.boxFee || 3);

    } else if (selectedProduct.isTray || selectedProduct.isPendant) {
      // صواني وقلائد — السعر ثابت ومحدد بدون إضافات
      total = selectedProduct.price || 0;

    } else {
      // بازل
      total = getBasePrice(selectedProduct, currentMaterial);
      const engToggle = document.getElementById("ppPuzzleEngravingToggle");
      if (engToggle && engToggle.checked) total += (STORE_CONFIG.engravingFee || 3);
    }

    finalPriceEl.textContent = `${total.toFixed(2)} ${CURRENCY}`;
    if (topPriceEl) topPriceEl.textContent = `${total.toFixed(2)} ${CURRENCY}`;
  }

  // ===== معرض الصور =====
  function setupGallery(product) {
    const mainImg = document.getElementById("ppMainImg");
    const thumbsContainer = document.getElementById("ppThumbs");
    if (!mainImg) return;

    mainImg.src = product.image || "";
    mainImg.alt = product.title || "";

    if (!thumbsContainer) return;
    thumbsContainer.innerHTML = "";

    if (!product.gallery || product.gallery.length <= 1) return;

    product.gallery.forEach((src, idx) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `صورة ${idx + 1}`;
      img.className = "pp-thumb" + (idx === 0 ? " active" : "");
      img.loading = "lazy";
      img.addEventListener("click", () => {
        mainImg.src = src;
        thumbsContainer.querySelectorAll(".pp-thumb").forEach(t => t.classList.remove("active"));
        img.classList.add("active");
      });
      thumbsContainer.appendChild(img);
    });
  }

  // ===== خيارات البازل =====
  function setupPuzzleOptions(product) {
    const materialCardsEl = document.getElementById("ppMaterialCards");
    const colorSwatchesEl = document.getElementById("ppColorSwatches");
    const colorLabelEl = document.getElementById("ppSelectedColorLabel");
    const engToggle = document.getElementById("ppPuzzleEngravingToggle");
    const engWrap = document.getElementById("ppPuzzleEngravingWrap");

    if (!materialCardsEl || !colorSwatchesEl) return;

    function renderMaterials() {
      materialCardsEl.innerHTML = STORE_CONFIG.materials.map(mat => {
        const price = getBasePrice(product, mat);
        return `
          <div class="pp-material-card ${mat.id === currentMaterial.id ? 'active' : ''}" data-mat-id="${mat.id}">
            <div class="pp-material-card-title">
              <span>${mat.name}</span>
              <span class="pp-material-card-price">${price.toFixed(2)} ${CURRENCY}</span>
            </div>
            <div class="pp-material-card-desc">${mat.desc}</div>
          </div>
        `;
      }).join("");

      materialCardsEl.querySelectorAll(".pp-material-card").forEach(card => {
        card.addEventListener("click", () => {
          const matId = card.getAttribute("data-mat-id");
          currentMaterial = STORE_CONFIG.materials.find(m => m.id === matId) || STORE_CONFIG.materials[0];
          currentColor = currentMaterial.colors[0];
          const matTag = document.getElementById("ppMaterial");
          if (matTag) matTag.textContent = currentMaterial.name;
          renderMaterials();
          renderColors();
          refreshPrice();
        });
      });
    }

    function renderColors() {
      if (colorLabelEl) colorLabelEl.textContent = currentColor.name;
      colorSwatchesEl.innerHTML = currentMaterial.colors.map(col => `
        <button type="button" class="pp-color-swatch ${col.id === currentColor.id ? 'active' : ''}" data-col-id="${col.id}">
          <span class="pp-color-dot" style="background: ${col.hex}; ${col.border ? `border: 1px solid ${col.border};` : ''}"></span>
          <span>${col.name}</span>
        </button>
      `).join("");

      colorSwatchesEl.querySelectorAll(".pp-color-swatch").forEach(btn => {
        btn.addEventListener("click", () => {
          const colId = btn.getAttribute("data-col-id");
          currentColor = currentMaterial.colors.find(c => c.id === colId) || currentMaterial.colors[0];
          if (colorLabelEl) colorLabelEl.textContent = currentColor.name;
          colorSwatchesEl.querySelectorAll(".pp-color-swatch").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    }

    renderMaterials();
    renderColors();

    if (engToggle && engWrap) {
      engToggle.addEventListener("change", () => {
        engWrap.style.display = engToggle.checked ? "block" : "none";
        refreshPrice();
      });
    }
  }

  // ===== بناء رسالة الواتساب =====
  function buildWhatsAppMessage(product) {
    let details = "";
    let finalPrice = product.price || 0;

    if (product.isDeskPlate) {
      const engText = (document.getElementById("ppDeskEngravingDetails")?.value || "").trim();
      const hasBox = document.getElementById("ppDeskBoxToggle")?.checked || false;
      const boxFee = hasBox ? (product.boxFee || STORE_CONFIG.boxFee || 3) : 0;
      finalPrice += boxFee;

      details = `\n📋 *تفاصيل الحفر بالليزر:*\n${engText || "سيتم التنسيق بالواتساب"}`;
      if (hasBox) details += `\n🎁 صندوق هدايا فاخر: مشمول (+${boxFee.toFixed(2)} ${CURRENCY})`;
      else details += `\n🎁 صندوق هدايا: غير مشمول`;
      details += `\n\n⚠️ سياسة الدفع: عربون 10 دنانير على الأقل مسبقاً عبر CliQ لبدء التجهيز، والمتبقي كاش عند الاستلام.`;

    } else if (product.isTray || product.isPendant) {
      // صواني وقلائد — طلب مباشر بدون إضافات
      details = "";
      finalPrice = product.price || 0;

    } else {
      // بازل
      finalPrice = getBasePrice(product, currentMaterial);
      const hasEng = document.getElementById("ppPuzzleEngravingToggle")?.checked || false;
      const engText = (document.getElementById("ppPuzzleEngravingText")?.value || "").trim();
      let engInfo = "";
      if (hasEng) {
        const fee = STORE_CONFIG.engravingFee || 3;
        finalPrice += fee;
        engInfo = `\n✨ حفر ليزر مخصص (+${fee.toFixed(2)} ${CURRENCY}): "${engText || 'سيتم التنسيق بالواتساب'}"`;
      }
      details = `\n🎨 الخامة: ${currentMaterial.name}\n🖌 اللون: ${currentColor.name}${engInfo}`;
    }

    const orderNum = "MFU-" + Math.floor(1000 + Math.random() * 9000);
    const pageUrl = window.location.href;

    const msg =
      `*طلب جديد — مشغل MadeForU* 🪵\n\n` +
      `🔢 رقم الطلب: #${orderNum}\n` +
      `📦 المنتج: ${product.title}\n` +
      `🏷 كود: ${product.sku || product.id}\n` +
      `🔗 الصفحة: ${pageUrl}\n` +
      `${details}\n\n` +
      `💰 *السعر: ${finalPrice.toFixed(2)} ${CURRENCY}* (لا يشمل التوصيل)\n` +
      `🚚 التوصيل: داخل عمان 1 ${CURRENCY} / خارج عمان 2 ${CURRENCY}\n\n` +
      `يرجى تزويدي باسمي الكامل وعنوان التوصيل ووقت مناسب 🙏`;

    return msg;
  }

  // ===== عرض المنتج =====
  function renderProductPage(product) {
    selectedProduct = product;

    // العنوان والـ meta
    document.title = `${product.title} | MadeForU`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogTitle) ogTitle.setAttribute("content", `${product.title} | MadeForU`);
    if (ogDesc) ogDesc.setAttribute("content", product.shortDesc || "");
    if (ogImg) ogImg.setAttribute("content", `https://madeforu-jo.github.io/${product.image || ""}`);

    // Breadcrumb
    const catDef = STORE_CATEGORIES.find(c => c.id === product.categorySlug);
    const breadcrumbCat = document.getElementById("breadcrumbCategory");
    const breadcrumbProd = document.getElementById("breadcrumbProduct");
    if (breadcrumbCat && catDef) {
      breadcrumbCat.textContent = catDef.name;
      breadcrumbCat.href = catDef.page;
    }
    if (breadcrumbProd) {
      breadcrumbProd.textContent = product.sku || product.title;
    }

    // تمييز القسم النشط في شريط الأقسام
    document.querySelectorAll(".nav-cat-link").forEach(link => {
      link.classList.remove("active");
      if (catDef && link.getAttribute("href") === catDef.page) {
        link.classList.add("active");
      }
    });

    // Badge
    const badgeEl = document.getElementById("ppBadge");
    if (badgeEl) {
      badgeEl.textContent = product.badge || "";
      badgeEl.style.display = product.badge ? "block" : "none";
    }

    // SKU + Title + Meta
    const skuEl = document.getElementById("ppSku");
    const titleEl = document.getElementById("ppTitle");
    const materialEl = document.getElementById("ppMaterial");
    const dimensionsEl = document.getElementById("ppDimensions");
    const priceEl = document.getElementById("ppPrice");
    const descEl = document.getElementById("ppDescription");

    if (skuEl) skuEl.textContent = `كود: ${product.sku || product.id}`;
    if (titleEl) titleEl.textContent = product.title || "";
    if (materialEl) materialEl.textContent = product.materialInfo || "";
    if (dimensionsEl) dimensionsEl.textContent = product.dimensions || "";
    if (priceEl) priceEl.textContent = `${(product.price || 0).toFixed(2)} ${CURRENCY}`;
    if (descEl) descEl.textContent = product.description || product.shortDesc || "";

    // معرض الصور
    setupGallery(product);

    // إخفاء جميع أقسام الخيارات
    ["ppDeskPlateOptions", "ppPuzzleOptions"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    // إظهار القسم المناسب
    if (product.isDeskPlate) {
      const block = document.getElementById("ppDeskPlateOptions");
      if (block) block.style.display = "block";

      // ربط التغييرات بتحديث السعر
      document.getElementById("ppDeskBoxToggle")?.addEventListener("change", refreshPrice);

    } else if (product.isPuzzle) {
      // بازل
      const block = document.getElementById("ppPuzzleOptions");
      if (block) block.style.display = "block";
      currentMaterial = STORE_CONFIG.materials[0];
      currentColor = currentMaterial.colors[0];
      setupPuzzleOptions(product);
    }

    // تعيين السعر الابتدائي
    refreshPrice();

    // ربط زر الطلب
    const orderBtn = document.getElementById("ppOrderBtn");
    if (orderBtn) {
      orderBtn.addEventListener("click", () => {
        // التحقق من إدخال تفاصيل الحفر للوحة المكتبية
        if (product.isDeskPlate) {
          const engText = document.getElementById("ppDeskEngravingDetails")?.value?.trim() || "";
          if (!engText) {
            document.getElementById("ppDeskEngravingDetails")?.focus();
            const hint = document.querySelector(".pp-options-hint");
            if (hint) {
              hint.style.color = "#c0392b";
              hint.style.fontWeight = "700";
              setTimeout(() => {
                hint.style.color = "";
                hint.style.fontWeight = "";
              }, 2500);
            }
            return;
          }
        }

        const msg = buildWhatsAppMessage(product);
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
      });
    }

    // زر العودة الذكي (تاريخ المتصفح مع الرجوع للقسم إذا كان الزائر قادماً من رابط خارجي)
    const backBtn = document.getElementById("ppBackBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (window.history.length > 1 && document.referrer && document.referrer.includes(window.location.host)) {
          window.history.back();
        } else {
          const cat = STORE_CATEGORIES.find(c => c.id === product.categorySlug);
          window.location.href = cat ? cat.page : "index.html";
        }
      });
    }

    // إظهار المحتوى
    const loadingEl = document.getElementById("productPageLoading");
    const contentEl = document.getElementById("productPageContent");
    if (loadingEl) loadingEl.style.display = "none";
    if (contentEl) contentEl.style.display = "block";
  }

  // ===== نقطة الدخول =====
  function init() {
    const slug = getSlugFromUrl();

    if (!slug) {
      // لا يوجد معرف في الرابط — أعد التوجيه للصفحة الرئيسية
      window.location.replace("index.html");
      return;
    }

    const product = findProduct(slug);

    if (!product) {
      const loadingEl = document.getElementById("productPageLoading");
      const errorEl = document.getElementById("productPageError");
      if (loadingEl) loadingEl.style.display = "none";
      if (errorEl) errorEl.style.display = "block";
      return;
    }

    renderProductPage(product);
  }

  try { init(); } catch (err) { console.error("Product page init error:", err); }
});
