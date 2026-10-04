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
│   │   ├──
```
