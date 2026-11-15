# MadeForU Project Rules & Guidelines for Agents

This file defines critical operational rules and constraints for the MadeForU e-commerce website. Any AI agent working on this codebase must strictly follow these rules.

---

## 1. URL & Product Identifier Immutability (Ad & Campaign Safety)
* **Never Delete or Mutate Existing URLs:**
  * Active Facebook ads, Instagram campaigns, WhatsApp broadcasts, and customer bookmarks point directly to product URLs (e.g. `https://madeforu-jo.github.io/mfu-101-desk-plate.html`, `?product=mfu-101-desk-plate`, `?p=101`, `desk-plate.html`).
  * Modifying, renaming, or deleting an existing URL or redirect file breaks active ads and causes 404 errors, wasting advertising budget.
* **Backward Compatibility via Aliases:**
  * If a product's title or marketing text is revised in the future, its canonical `slug`, `sku`, `code`, and all previous URLs must remain supported.
  * Always preserve and append old URLs or variations to the product's `aliases` array in `products.js`.

---

## 2. Pre-Check Checklist Before Adding New Products
Before adding any new product to `products.js` or creating landing pages:
1. **Check for Uniqueness (Zero Collisions):**
   * **SKU:** Ensure the new SKU (e.g. `MFU-102`, `MFU-301`) is unique across the entire catalog.
   * **Numeric Code:** Ensure the short code (e.g. `102`, `301`) does not collide with any existing product.
   * **URL Slug:** Ensure the slug (e.g. `mfu-102-desk-clock`) is unique and descriptive.
   * **Aliases:** Verify no alias conflicts with any existing product's slug, code, or alias.
   * **Redirect HTML Files:** Ensure any new `.html` file does not overwrite or collide with existing files.
2. **Follow the SKU / Series Convention:**
   * `100` series: Desk Name Plates & Office Items (`MFU-101`, `MFU-102`...).
   * `200` series: Puzzles & Wall Art (`MFU-201`, `MFU-202`...).
   * `300` series: Wooden Rifles, Props, & Antiques (`MFU-301`...).
   * `400` series: Resin Crafts & Home Decor (`MFU-401`...).

---

## 3. Materials & Craft Rules
* **Desk Name Plates:**
  * Exclusively crafted from **Natural Beech Wood** (`خشب زان طبيعي صلب`), 40×10 cm thick.
  * Custom laser engraving on the front (Name, Profession, Logo) and optional back-face personal message.
  * Optional luxury gift box (+3 JD).
  * Requires a minimum **10 JD down payment** via CliQ / e-wallet before production.
* **Puzzles & Geometric Wall Art:**
  * Strictly made from **Solid MDF Wood** (`خشب MDF صلب`) or **Modern Acrylic** (`أكريليك عصري صلب`).
  * **NEVER** list beech wood or natural wood for puzzles.
  * Base price 7 JD (MDF) / 10 JD (Acrylic), with +3 JD optional laser custom engraving.

---

## 4. Language & Tone Guidelines
* **User Communication:** English.
* **Website UI & Customer Facing Text:** Warm, friendly, non-technical everyday Arabic (`لهجة عربية واضحة ومفهومة للزبائن`). Avoid overly complex industrial terms (use "حفر ليزر" instead of "ماكينة CO2 ليزر").
