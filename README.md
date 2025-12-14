# TDD-Kata-Sweet-Shop-Management-System
# 🍬 SweetSuite

## 📖 Project Description
The **Sweet Shop Management System** is a full-stack web application developed using **Test-Driven Development (TDD)** principles.  
It allows users to browse and purchase sweets, while admin users can manage sweet inventory including adding, updating, deleting, purchasing, and restocking sweets.

The project demonstrates practical usage of:
- RESTful API design
- JWT-based authentication and authorization
- MongoDB Atlas for persistent storage
- React-based Single Page Application
- Automated testing using Jest and Supertest
- Ethical and transparent use of AI tools

---

## 🎯 Key Features
- User registration and login
- Role-based access control (User / Admin)
- Sweet management (CRUD operations)
- Inventory purchase and restocking
- Search sweets by name, category, and price range
- Responsive frontend UI
- High test coverage using TDD

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js

### Frontend
- React.js
- Axios
- CSS

### Testing
- Jest
- Supertest

---

## 🔐 Authentication & Authorization
- Secure user authentication using JWT
- Password hashing using bcrypt
- Middleware-based route protection
- Admin-only access for sensitive operations

---

## 📡 API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
```

### Sweets (Protected)
```
POST   /api/sweets              (Admin only)
GET    /api/sweets
GET    /api/sweets/search
PUT    /api/sweets/:id           (Admin only)
DELETE /api/sweets/:id           (Admin only)
```

### Inventory Management
```
POST /api/sweets/:id/purchase
POST /api/sweets/:id/restock     (Admin only)
```

---

## ⚙️ Local Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account
- Git

---

### Backend Setup
```bash
git clone https://github.com/your-username/sweet-shop-management-system.git
cd backend
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm run dev
```

Run backend tests:
```bash
npm test
```

---

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend will run on:
```
http://localhost:3000
```

---

## 🧪 Test Report

### Testing Tools Used
- Jest
- Supertest

### Test Coverage Includes
- Authentication logic
- Sweet CRUD operations
- Inventory purchase & restock logic
- Authorization checks
- Edge cases (out-of-stock, invalid inputs)

### Sample Test Output
```
Test Suites: 8 passed, 8 total
Tests:       52 passed, 52 total
Snapshots:   0 total
Time:        ~4s
```

All tests were written **before implementation** following strict **Red → Green → Refactor** methodology.

---

## 🖼️ Application Screenshots

- Login Page
- Sweet Dashboard
- Admin Panel

📌 Screenshots are stored inside the `/screenshots` directory.

---

## 🤖 My AI Usage

### AI Tools Used
- ChatGPT
- GitHub Copilot
- Google Gemini

### How I Used AI
- I used **ChatGPT** to understand backend architecture, JWT authentication flow, and to brainstorm REST API structures.
- I used **GitHub Copilot** during development to assist with boilerplate code, test case suggestions, and refactoring repetitive logic.
- I used **Google Gemini** for frontend UI ideas and to understand how search and filter features could be implemented efficiently.

### Reflection on AI Impact
AI tools played a significant role in improving my productivity and learning experience. They helped me write cleaner test cases, debug errors faster, and understand best practices in backend and frontend development.

However, I ensured that **all AI-generated code was reviewed, modified, and fully understood** before committing it. AI was used as a **supporting assistant**, not a shortcut, and the final implementation reflects my own understanding and effort.

---

## 📜 AI Usage Policy Compliance

### AI Co-authorship in Git Commits
For every commit where AI tools were used, AI was added as a co-author as per the policy.

### Example Commit Message
```
feat: implement user registration endpoint

Used an AI assistant to generate initial boilerplate for controller and service,
then manually added validation and error handling logic.

Co-authored-by: ChatGPT <AI@users.noreply.github.com>
```

This ensures **full transparency and ethical AI usage**.

---

## 👨‍💻 Author
**Aditya Kumar Gupta**  
