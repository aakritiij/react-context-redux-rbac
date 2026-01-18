# Context API + Redux Toolkit (RBAC Demo)

This project demonstrates **role-based access control (RBAC)** in a React application using:

- **React Context API** for authentication and role management
- **Redux Toolkit** for product state management

The goal is to clearly separate **authentication logic** from **business data** and enforce different permissions for different user roles.

## Features
- Login system using React Context API
- Role-based access control (Admin vs User)
- Admin can:
  - Add products
  - Delete products
- User can:
  - View products only
- Global product state managed using Redux Toolkit
- Clean and simple UI focused on functionality


## Roles and Permissions

| Role  | View Products | Add Product | Delete Product |
|------|---------------|------------|----------------|
| User | ✅ Yes         | ❌ No       | ❌ No          |
| Admin| ✅ Yes         | ✅ Yes      | ✅ Yes         |


## Tech Stack

- React
- React Context API
- Redux Toolkit
- JavaScript 

---

## Folder Structure

```text
src/
├── components/
│   ├── Login.js
│   ├── ProductList.js
│   └── ProductManager.js
│
├── context/
│   └── AuthContext.js
│
├── redux/
│   ├── productsSlice.js
│   └── store.js
│
├── App.js
└── index.js

How It Works
-Authentication state (user, role, login/logout) is handled using Context API
-Product data is stored and managed globally using Redux Toolkit
-Role checks are enforced at the component level to restrict access to admin actions
-Users cannot access admin functionality through UI or logic

How to Run the Project
-npm install
-npm start

Learning Outcome
-Proper use of Context API for authentication
-Clean separation of concerns between Context and Redux
-Practical implementation of role-based access control in React
