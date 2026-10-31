# 🪵 Timber & Grain — Handcrafted Woodworking Catalog

A fast, lightweight, and modern website to showcase handcrafted woodworking items with **Cash on Delivery (COD)** checkout. No complex e-commerce platforms or credit card fees required!

Designed to be hosted **100% free on GitHub Pages** using standard HTML, CSS, and JavaScript.

---

## 🚀 Quick Start (Test on your PC right now)

1. Open your folder: `f:\PuzzlemeWebsite`
2. Double-click **`index.html`** in your file explorer.
3. It will immediately open in your web browser (Chrome, Edge, Firefox)!
4. Try adding items to the cart, searching, and testing the Cash on Delivery checkout.

---

## 🛠️ How to Customize Your Store

All store items and settings are in one single, friendly file: **`products.js`**.

### 1. Change your Store Name & Phone Number
Open `products.js` in Notepad or your favorite editor and update:
```javascript
const STORE_CONFIG = {
  storeName: "My Woodshop Name",
  currency: "$",
  whatsappNumber: "1234567890", // Your phone number with country code (no + or spaces)
  contactEmail: "yourname@example.com"
};
```

### 2. Add or Edit Woodworking Items
In `products.js`, each item looks like this:
```javascript
{
  id: 1,
  title: "Handmade End-Grain Walnut Cutting Board",
  category: "Kitchen & Dining",
  price: 85,
  woodType: "Black Walnut & Hard Maple",
  dimensions: "16\" x 12\" x 1.75\"",
  badge: "Bestseller",
  shortDesc: "Durable, knife-friendly cutting board...",
  description: "Crafted with precision...",
  image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80"
}
```
* **Photos**: You can paste web image links, or put your own photos in an `images/` folder (e.g. `"images/table.jpg"`).

---

## 🌐 How to Publish to GitHub (Free Hosting with GitHub Pages)

Since you have Git installed, here are the step-by-step instructions:

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up if you don't already have an account.

### Step 2: Create a New Repository on GitHub
1. Click the **+** icon in the top right of GitHub and select **New repository**.
2. Name it (for example: `woodworking-shop` or `timber-grain`).
3. Set it to **Public**.
4. Leave "Add a README" **unchecked** (we already have files).
5. Click **Create repository**.

### Step 3: Push Your Code using Git
Open PowerShell or Command Prompt in this folder (`f:\PuzzlemeWebsite`), then copy and run these commands one by one:

```bash
git init
git add .
git commit -m "Initial launch of woodworking website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name).*

### Step 4: Turn On GitHub Pages (Live in 30 Seconds!)
1. In your GitHub repository, click on **Settings** (tab with the gear icon).
2. In the left sidebar, click **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Within 1-2 minutes, GitHub will give you a live website link like:
   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

---

## 📦 How Orders Work

Customers browse your items, add them to their cart, and click **"Order via Cash on Delivery"**.
1. **WhatsApp Order**: Customers can click "Send Order via WhatsApp". A pre-formatted message with their selected items, total, and full delivery address will automatically open directly to your phone.
2. **Direct Submit**: Orders placed on the website are also saved locally and can be viewed anytime by opening `orders.html`.
