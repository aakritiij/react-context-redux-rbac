# Context API + Redux Toolkit (RBAC Demo)

This project demonstrates **role-based access control (RBAC)** in a React application using:

- **React Context API** for authentication and role management
- **Redux Toolkit** for product state management

The goal is to clearly separate **authentication logic** from **business data** and enforce different permissions for different user roles.

---

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

---

## Roles and Permissions

| Role  | View Products | Add Product | Delete Product |
|------|---------------|------------|----------------|
| User | ✅ Yes         | ❌ No       | ❌ No          |
| Admin| ✅ Yes         | ✅ Yes      | ✅ Yes         |

---

## Tech Stack

- React
- React Context API
- Redux Toolkit
- React Redux
- JavaScript (ES6)

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
