# 🛒 BozorBob E-commerce Core

A production-grade, full-stack e-commerce engine powering a seamless shopping experience. Built with a high-performance SSR (Server-Side Rendering) architecture, advanced state management, and localized support.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Context API](https://img.shields.io/badge/State-Context_API-blue)
![i18n](https://img.shields.io/badge/Localization-i18n-green)

---

## 🚀 Key Features

### **Consumer Experience**
- **Hyper-Fast Discovery**: Optimized Product Filtering and Global Search for instant results.
- **Multilingual Support**: Full internationalization (i18n) for **Uzbek** and **English** markets.
- **Fluid UI**: Fully responsive design with high-performance carousels (Swiper/Slick) and interactive banners.
- **Secure Checkout**: Streamlined order placement with persistent cart state.

### **Management Engine**
- **Admin Command Center**: Complete dashboard for managing products, categories, and site-wide content.
- **Smart Logistics**: Integrated order tracking and management system.
- **Role-Based Security**: Nested middleware for protecting sensitive routes and administrative actions.

---

## 🛠 Tech Stack

- **Frontend**: Next.js (SSR), React 17
- **Styling**: Modern CSS with utility-first patterns and responsive sliders (Swiper, Slick)
- **Backend API**: Next.js API Routes (Serverless-ready)
- **Database**: MongoDB via Mongoose
- **Authentication**: Custom JWT-based Auth with HTTP-only cookies and bcrypt hashing
- **Global State**: React Context API + Reducer pattern logic

---

## 📂 Project Structure

```bash
/
├── components/     # High-reuse UI components & feature-specific modules
├── locales/        # Dictionary files for i18n (UZ/EN)
├── models/         # Mongoose Data Schemas (Product, User, Order, Category)
├── pages/          
│   ├── api/        # RESTful Backend endpoints
│   └── ...         # SSR Pages (Home, Product Detail, Cart, Profile)
├── store/          # Context API Providers and Global Reducers
├── utils/          # Core utilities (Auth helpers, Fetch wrappers)
└── public/         # Static assets and media
```

---

## ⚙️ Installation & Development

### Prerequisites
- Node.js (v14+)
- MongoDB instance

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/kodirov8788/bozorbob-ecommerce-core.git
   ```

2. **Configure environment**
   Create a `.env.local` file:
   ```env
   MONGO_URL=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_secret
   REFRESH_TOKEN_SECRET=your_secret
   PAYPAL_CLIENT_ID=your_id
   ```

3. **Install and Run**
   ```bash
   npm install
   npm run dev
   ```

---

## 📄 License

This project is licensed under the MIT License.

Crafted by [Kodirov Dev](https://github.com/kodirov8788)
