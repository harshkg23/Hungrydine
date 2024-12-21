# HungryDine - Food Delivery App

HungryDine is a full-stack food delivery application that provides an intuitive platform for ordering food online, combining a powerful backend, dynamic frontend, and an efficient admin panel. The frontend is built with React, ensuring a responsive and user-friendly experience across all devices, allowing customers to browse the menu, add items to the cart, and place secure payments through Stripe. The backend, powered by Node.js and Express, efficiently handles user requests, manages orders, and communicates with a MongoDB database. JWT-based authentication ensures secure user logins, while the admin panel allows administrators to manage menu items, track orders, and monitor the system. With its seamless integration of frontend, backend, and payment processing, HungryDine offers a comprehensive and secure food delivery service.

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

---

## **Features**
- **Frontend**: Built with React for a responsive and dynamic user experience.
- **Backend**: Powered by Node.js and Express.js to handle requests efficiently.
- **Payments**: Secure payment integration using Stripe.
- **Admin Panel**: Manage food orders, add or delete food items from the menu.
- **Authentication**: JWT-based authentication for secure user login.
- **Responsive Design**: Optimized for all screen sizes.

---

## **Tech Stack**
- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js, Stripe
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Payment Gateway**: Stripe API

---

## **Folder Structure**

Hungrydine/<br>
│
├── admin/         # Admin panel for managing orders and menu<br>
│
├── backend/       # Backend API built with Node.js and Express<br>
│
├── frontend/      # React frontend for customer interface<br>
│
└── README.md      # Project documentation<br>

## **Installation**
### Steps

1. Install dependencies for each folder:
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

   - **Frontend**:
     ```bash
     cd ../frontend
     npm install
     ```

   - **Admin**:
     ```bash
     cd ../admin
     npm install
     ```

2. Set up environment variables (see below).

3. Start the development servers:
   - **Backend**:
     ```bash
     npm run dev
     ```
   - **Frontend**:
     ```bash
     npm run dev
     ```
   - **Admin Panel**:
     ```bash
     npm run dev
     ```

---

## **Usage**
1. Open the frontend at: [http://localhost:5173](http://localhost:5173)
2. Access the admin panel at: [http://localhost:5174](http://localhost:5174)
3. Use the admin panel to add/delete menu items and manage orders.
4. Use the frontend to browse the menu, add items to the cart, and place orders with Stripe payment processing.


---
## **Environment Variables**
Create a `.env` file in the backend folder and add the following variables:
```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
```
---

## **Contact**
- **Author**: Harsh Kumar Gupta  
- **Email**: harshkumargupta2023@gmail.com  
- **GitHub**: [https://github.com/harshkg23](https://github.com/harshkg23)







