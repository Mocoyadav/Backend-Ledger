📒 Backend Ledger System
📌 Overview

A backend system for managing accounts, transactions, and balances using a double-entry ledger system. Built with Node.js, Express, and MongoDB.

🚀 Features
User Authentication (JWT-based)
Account Creation & Management
Balance Calculation via Ledger
Secure Transactions with Idempotency
Double-entry Bookkeeping (Debit/Credit)
Email Notifications
Token Blacklisting (Logout Security)
🏗️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
Nodemailer
📁 Project Structure
project-root/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
│
├── app.js
├── db.js
⚙️ Setup Instructions
1. Clone Repository
git clone <repo-url>
cd backend-ledger
2. Install Dependencies
npm install
3. Add Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

EMAIL_USER=your_email
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REFRESH_TOKEN=your_refresh_token
4. Run Project
npm start
📡 API Endpoints
🔐 Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
🏦 Accounts
POST /api/accounts/
GET /api/accounts/
GET /api/accounts/balance/:accountId
💸 Transactions
POST /api/transaction/
POST /api/transaction/system/initial-funds
🔄 Transaction Flow
Validate request
Check idempotency
Verify accounts
Check balance
Create transaction
Debit entry
Credit entry
Mark completed
💡 Key Concepts
Ledger System
Every transaction creates:
DEBIT (sender)
CREDIT (receiver)
Balance Formula
Balance = Credit - Debit
Security
JWT Authentication
Protected Routes
Token Blacklisting📒 Backend Ledger System
📌 Overview

A backend system for managing accounts, transactions, and balances using a double-entry ledger system. Built with Node.js, Express, and MongoDB.

🚀 Features
User Authentication (JWT-based)
Account Creation & Management
Balance Calculation via Ledger
Secure Transactions with Idempotency
Double-entry Bookkeeping (Debit/Credit)
Email Notifications
Token Blacklisting (Logout Security)
🏗️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
Nodemailer
📁 Project Structure
project-root/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
│
├── app.js
├── db.js
⚙️ Setup Instructions
1. Clone Repository
git clone <repo-url>
cd backend-ledger
2. Install Dependencies
npm install
3. Add Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

EMAIL_USER=your_email
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REFRESH_TOKEN=your_refresh_token
4. Run Project
npm start
📡 API Endpoints
🔐 Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
🏦 Accounts
POST /api/accounts/
GET /api/accounts/
GET /api/accounts/balance/:accountId
💸 Transactions
POST /api/transaction/
POST /api/transaction/system/initial-funds
🔄 Transaction Flow
Validate request
Check idempotency
Verify accounts
Check balance
Create transaction
Debit entry
Credit entry
Mark completed
💡 Key Concepts
Ledger System
Every transaction creates:
DEBIT (sender)
CREDIT (receiver)
Balance Formula
Balance = Credit - Debit
Security
JWT Authentication
Protected Routes
Token Blacklisting
