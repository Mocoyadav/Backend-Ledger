# 📒 Backend Ledger System

A robust backend ledger system built using **Node.js, Express, MongoDB**, designed to handle **accounts, transactions, and balance tracking** using a **double-entry bookkeeping system**.

---

## 🚀 Features
- 🔐 User Authentication (Register, Login, Logout using JWT)
- 🏦 Account Management
- 💰 Real-time Balance Calculation (via Ledger)
- 🔄 Secure Transactions with Idempotency
- 📊 Double-entry Ledger System (Debit/Credit)
- 📧 Email Notifications (Registration & Transactions)
- 🚫 Token Blacklisting (Logout Security)
- 🔒 Protected Routes with Middleware
- ⚡ MongoDB Transactions (ACID compliance)

---

## 🏗️ Tech Stack
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Nodemailer (Email Service)  

---

## 📁 Project Structure
```bash
backend-ledger/
│
├── controllers/
│   ├── auth.controller.js
│   ├── account.controller.js
│   ├── transaction.controller.js
│
├── models/
│   ├── user.model.js
│   ├── account.model.js
│   ├── transaction.model.js
│   ├── ledger.model.js
│   └── blackList.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── account.routes.js
│   └── transaction.routes.js
│
├── middleware/
│   └── auth.middleware.js
│
├── services/
│   └── email.service.js
│
├── app.js
├── db.js

# ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/backend-ledger.git

# Navigate to project folder
cd backend-ledger

# Install dependencies
npm install

# Create .env file

---
## 🔑 Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
## ▶️ Run the Project
# Development
npm run dev

# Production
npm start
## 🔐 Authentication APIs
| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| POST   | /api/auth/logout   | Logout user   |

## 🏦 Account APIs
| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | /api/account/create | Create account      |
| GET    | /api/account/:id    | Get account details |

## 💸 Transaction APIs
| Method | Endpoint                  | Description         |
| ------ | ------------------------- | ------------------- |
| POST   | /api/transaction/transfer | Transfer money      |
| GET    | /api/transaction/history  | Transaction history |

## 📊 How Ledger System Works
-Uses double-entry bookkeeping
-Every transaction creates:
-Debit entry
-Credit entry
-Ensures:
-Data consistency
-Accurate balance calculation
-Audit-friendly records
## 🔒 Security Features
-JWT-based authentication
-Token blacklisting on logout
-Protected routes with middleware
-MongoDB ACID transactions
-Idempotency for safe transactions
## 📬 Email Notifications
-Sent on:
--User registration
--Successful transactions


🧪 Future Improvements
✅ Add unit & integration tests
📊 Admin dashboard
📱 Frontend integration
🔔 Real-time notifications (WebSockets)
