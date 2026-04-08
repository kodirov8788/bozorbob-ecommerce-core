# Bozorbob E-commerce Core 🚀

A premium full-stack e-commerce application focused on high-conversion storefront dynamics, multilingual support, and robust product management.

**Live demo:** [bozorbob-uz-original.vercel.app](https://bozorbob-uz-original.vercel.app)

---

## 🌟 Premium Enhancements (New)
This version features a **Portfolio-Ready Demo Mode**:
- **High-Fidelity Product Visuals:** Replaced generic placeholders with studio-grade lifestyle photography.
- **Glassmorphic UI Elements:** Subtle background blurs and premium shadow hierarchies for a state-of-the-art look.
- **Micro-Animations:** Smooth transitions on product cards and interactive banners.
- **Zero-Config Demo:** Run `npm run dev` and see a fully populated storefront without needing a local MongoDB setup (toggle via `DEMO_MODE=true` in `.env`).

---

## 🏗️ Technical Architecture
### Storefront Logic
- **Next.js 12 (App Router transition ready):** Optimized for SEO with fast server-side rendering.
- **Multilingual Support:** Localized strings for Uzbek/Russian markets.
- **Responsive Merchandising:** Dynamic carousels using Swiper/React-Slick.

### Backend & Data
- **MongoDB + Mongoose:** Flexible schema designed for evolving catalog requirements.
- **API Features:** Built-in filtering, sorting, and pagination logic on the Node.js API layer.
- **Modular Auth:** Custom JWT implementation with bcrypt password hashing.

---

## 🛠️ Stack
- **Frontend:** React 17, Next.js, CSS Modules (Premium Vanilla CSS focus)
- **Backend:** Node.js API Routes, JWT, Bcrypt
- **Database:** MongoDB (via Mongoose)
- **UI Libraries:** Swiper, React Slick, Axios

---

## 🚀 Getting Started

1. **Clone & Install:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env` file (or use the provided one):
   ```env
   # Set to true to view premium mock data without a database
   DEMO_MODE=true
   MONGODB_URL=your_mongodb_uri_here
   ```

3. **Run Locally:**
   ```bash
   npm run dev
   ```

---

## 💼 Why This Matters (Portfolio Context)
This project demonstrates more than just code; it shows **Commerce Domain Expertise**:
- **SEO Strategy:** Semantic HTML and optimized metadata.
- **UX Engineering:** Focus on "Aha moments" with high-quality imagery and smooth interactions.
- **Reliability:** Graceful handling of DB connection states and robust API patterns.

---
*Created with focus on visual excellence and engineering rigor.*
