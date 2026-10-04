# 🛍️ AestheticHub — Fashion E-Commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="MERN Stack"/>
  <img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe"/>
</p>

<p align="center">
  <b>👕 Modern Fashion Shopping • 🔐 Secure Authentication • 💳 Stripe Payments • 📦 Complete Order Management</b>
</p>

---

## 📌 Overview

**AestheticHub** is a full-stack **Fashion Outlet E-Commerce Website** built using the **MERN Stack** with integrated **Stripe Payment Gateway**.

The platform provides a seamless and responsive shopping experience where users can explore and purchase fashion products including:

* 👕 T-Shirts
* 👖 Pants
* 👟 Sneakers
* 🧢 Caps
* 👜 Bags
* 👗 Clothing & Accessories

The project demonstrates the implementation of a modern e-commerce workflow, from **product discovery and authentication to cart management, checkout, payment processing, and order management**.

---

## 🎯 Project Objectives

The main objective of AestheticHub is to design and develop a modern full-stack e-commerce platform that provides a **secure, responsive, and engaging online shopping experience**.

The project demonstrates practical implementation of:

* 🌐 Full-stack MERN development
* 🔐 JWT-based authentication
* 🛒 Dynamic shopping cart functionality
* 💳 Stripe payment integration
* 📦 Order processing and management
* 🛠️ Admin product management
* 🔎 Product search and filtering
* 📱 Responsive UI design
* 🔗 Frontend–backend API integration

---

## ✨ Key Features

### 🛍️ 1. Product Catalog

Browse a wide variety of fashion products organized into different categories.

**Includes:**

* 👕 Clothing
* 👟 Sneakers
* 🧢 Caps
* 👜 Bags
* 👖 Pants
* 🛒 Other fashion accessories

---

### 🛒 2. Cart & Checkout

Users can easily manage their shopping cart.

**Features include:**

* ➕ Add products to cart
* 🔄 Update product quantities
* ❌ Remove products
* 💰 Automatic price calculation
* 📋 Review order before checkout
* ✅ Complete checkout workflow

---

### 💳 3. Stripe Payment Integration

AestheticHub integrates **Stripe Payment Gateway** to provide a secure and reliable payment experience.

**Payment workflow:**

```text
🛍️ Select Product
       ↓
🛒 Add to Cart
       ↓
📋 Checkout
       ↓
💳 Stripe Payment
       ↓
✅ Payment Confirmation
       ↓
📦 Order Processing
```

---

### 🔐 4. Secure User Authentication

The platform provides secure user registration and login.

**Authentication technologies:**

* 🔑 JSON Web Tokens (JWT)
* 🔒 bcrypt.js password hashing
* 👤 User account management
* 🛡️ Protected authentication flow

---

### 🔎 5. Smart Search & Filters

Users can quickly discover products using search and filtering functionality.

Products can be searched or filtered based on:

* 🔍 Product name
* 🏷️ Category
* 💰 Price range

This makes product discovery faster and more convenient.

---

### 👨‍💼 6. Admin Dashboard

Administrators can efficiently manage the e-commerce platform.

**Admin capabilities include:**

* ➕ Add products
* ✏️ Update products
* 🗑️ Remove products
* 🏷️ Manage categories
* 📦 Manage customer orders
* 👥 Manage store operations

---

### 📱 7. Responsive UI

AestheticHub is designed to provide a consistent shopping experience across different screen sizes.

```text
        💻 Desktop
           │
           ▼
     ┌─────────────┐
     │ AestheticHub│
     └─────────────┘
           ▲
           │
    📱 Mobile / Tablet
```

The interface is optimized for:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

---

### 📦 8. Complete Order Management

The platform supports the complete customer order journey:

```text
Product Selection
       ↓
Add to Cart
       ↓
Checkout
       ↓
Payment
       ↓
Order Confirmation
       ↓
Order Management
```

---

## 🧠 System Architecture

AestheticHub follows a standard **MERN full-stack architecture**.

```text
                   👤 USER
                     │
                     ▼
              ⚛️ React.js
              Frontend UI
                     │
                     │ REST API
                     ▼
             🟢 Node.js
                     │
                     ▼
             🚂 Express.js
              Backend API
              /         \
             /           \
            ▼             ▼
      🍃 MongoDB       💳 Stripe
       Database       Payment API
```

### Architecture Components

| Layer             | Technology               | Responsibility             |
| ----------------- | ------------------------ | -------------------------- |
| 🎨 Frontend       | React.js                 | User interface             |
| ⚙️ Backend        | Node.js + Express.js     | REST APIs & business logic |
| 🗄️ Database      | MongoDB                  | Product, user & order data |
| 🔐 Authentication | JWT + bcrypt.js          | Secure user authentication |
| 💳 Payments       | Stripe API               | Payment processing         |
| 🎨 Styling        | Tailwind CSS / Bootstrap | Responsive UI              |

---

## 🛠️ Technologies Used

### 🎨 Frontend

* ⚛️ React.js
* 🟨 JavaScript
* 🌐 HTML5
* 🎨 CSS3
* 💨 Tailwind CSS / Bootstrap
* ⚛️ React Hooks
* 🔄 Context API

### ⚙️ Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔗 REST APIs

### 🗄️ Database

* 🍃 MongoDB
* 🐍 Mongoose

### 🔐 Authentication

* 🔑 JSON Web Tokens
* 🔒 bcrypt.js

### 💳 Payment

* 💳 Stripe API

---

## 🔄 Application Workflow

```text
                    ┌──────────────┐
                    │     User     │
                    └──────┬───────┘
                           │
                           ▼
                  🔐 Authentication
                           │
                           ▼
                  🛍️ Browse Products
                           │
                           ▼
                    🔎 Search / Filter
                           │
                           ▼
                      🛒 Add to Cart
                           │
                           ▼
                       📋 Checkout
                           │
                           ▼
                    💳 Stripe Payment
                           │
                           ▼
                    ✅ Confirmation
                           │
                           ▼
                    📦 Order Created
                           │
                           ▼
                    👨‍💼 Admin Panel
```

---

## 🗃️ Core Data Models

The application can be organized around the following primary entities:

```text
👤 User
   │
   ├── Authentication
   └── Orders
          │
          ▼
📦 Order
   │
   └── Products
          │
          ▼
🛍️ Product
   │
   └── Category
```

### Example Data Entities

| Entity       | Purpose                       |
| ------------ | ----------------------------- |
| 👤 User      | Customer/admin information    |
| 🛍️ Product  | Product details and pricing   |
| 🏷️ Category | Product classification        |
| 🛒 Cart      | Selected products             |
| 📦 Order     | Customer purchase information |
| 💳 Payment   | Payment transaction details   |

---

## 📂 Suggested Project Structure

```text
AestheticHub/
│
├── 📁 client/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 context/
│   │   ├── 📁 hooks/
│   │   ├── 📁 services/
│   │   └── 📄 App.jsx
│   │
│   └── 📄 package.json
│
├── 📁 server/
│   ├── 📁 controllers/
│   ├── 📁 models/
│   ├── 📁 routes/
│   ├── 📁 middleware/
│   ├── 📁 config/
│   ├── 📄 server.js
│   └── 📄 package.json
│
├── 📄 README.md
└── 📄 .gitignore
```

> 💡 Adjust the folder names above according to your actual repository structure.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rohitCoder-14/AestheticHub.git
cd AestheticHub
```

### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

### 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

PORT=5000
```

For the frontend, configure the required API URL and Stripe-related public configuration according to your implementation.

> ⚠️ **Never commit `.env` files or secret API keys to GitHub.**

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

Open another terminal:

```bash
cd client
npm start
```

The application should then be available through the configured local frontend URL.

---

## 💳 Stripe Payment Flow

AestheticHub uses Stripe to handle online payments.

```text
        🛒 Cart
          │
          ▼
      📋 Checkout
          │
          ▼
   💳 Stripe Checkout
          │
          ▼
   🔐 Secure Payment
          │
          ▼
    ✅ Confirmation
          │
          ▼
    📦 Create Order
```

The integration separates payment processing from the application's core business logic while providing a secure checkout experience.

---

## 🔒 Security

Security is an important part of the application.

Implemented security concepts include:

* 🔐 JWT-based authentication
* 🔒 Password hashing with bcrypt.js
* 🛡️ Protected API routes
* 🔑 Environment-based secret management
* 💳 Secure payment processing through Stripe
* 🚫 Sensitive credentials excluded from source control

---

## 📸 Screenshots

Add screenshots of the application here to make the repository more attractive:

### 🏠 Home Page

> Add your homepage screenshot here.

### 🛍️ Product Catalog

> Add product listing screenshot here.

### 🛒 Shopping Cart

> Add cart screenshot here.

### 💳 Checkout

> Add Stripe checkout screenshot here.

### 👨‍💼 Admin Dashboard

> Add admin dashboard screenshot here.

---

## 📊 Project Highlights

| Feature             | Implementation             |
| ------------------- | -------------------------- |
| 🛍️ Product Catalog | React + MongoDB            |
| 🛒 Shopping Cart    | React Hooks / Context API  |
| 🔐 Authentication   | JWT + bcrypt.js            |
| 💳 Payments         | Stripe API                 |
| 🔎 Search & Filters | React + Backend APIs       |
| 👨‍💼 Admin Panel   | React + Express            |
| 🗄️ Database        | MongoDB + Mongoose         |
| 📦 Orders           | Express + MongoDB          |
| 📱 Responsive UI    | CSS / Tailwind / Bootstrap |

---

## 🌟 Why AestheticHub?

AestheticHub demonstrates how different technologies can be combined to build a complete production-style e-commerce application.

The project covers the complete development cycle:

```text
🎨 Frontend Development
        +
⚙️ Backend Development
        +
🗄️ Database Management
        +
🔐 Authentication
        +
💳 Payment Integration
        +
📦 Order Processing
        ↓
🚀 Full-Stack E-Commerce Platform
```

---

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:

* ⚛️ Building dynamic React applications
* 🟢 Developing REST APIs using Node.js and Express
* 🍃 Working with MongoDB and Mongoose
* 🔐 Implementing JWT authentication
* 🔒 Password hashing using bcrypt.js
* 💳 Integrating Stripe payments
* 🛒 Building shopping cart functionality
* 📦 Managing e-commerce orders
* 🔎 Implementing search and filtering
* 📱 Designing responsive interfaces
* 🔗 Connecting frontend and backend systems

---

## 🔮 Future Improvements

Potential future enhancements include:

* 🤖 AI-powered product recommendations
* ❤️ Wishlist functionality
* ⭐ Product ratings and reviews
* 📧 Email order notifications
* 📊 Advanced admin analytics
* 🎁 Discount and coupon system
* 📦 Real-time order tracking
* 🌐 Multi-language support
* 💳 Additional payment methods
* 🔔 Real-time notifications

---

## 👨‍💻 Author

### Rohit Singh Rawat

🎓 **MCA — Data Science**

<p>
  <a href="https://github.com/rohitCoder-14">
    <img src="https://img.shields.io/badge/GitHub-rohitCoder--14-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
  <a href="https://www.linkedin.com/in/rohit-singh-rawat1407/">
    <img src="https://img.shields.io/badge/LinkedIn-Rohit%20Singh%20Rawat-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</p>

---

## 📄 License

This project is intended for **educational and portfolio purposes**.

If you plan to publish the project with a specific open-source license, add the corresponding `LICENSE` file to the repository.

---

<p align="center">
  🛍️ <b>AestheticHub</b> — Fashion Meets Technology
  <br/>
  <sub>Built with ❤️ using the MERN Stack</sub>
</p>
