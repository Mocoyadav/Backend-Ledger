A robust backend ledger system built using Node.js, Express, MongoDB, designed to handle accounts, transactions, and balance tracking using a double-entry bookkeeping system.

🚀 Features
🔐 User Authentication (Register, Login, Logout using JWT)
🏦 Account Management
💰 Real-time Balance Calculation (via Ledger)
🔄 Secure Transactions with Idempotency
📊 Double-entry Ledger System (Debit/Credit)
📧 Email Notifications (Registration & Transactions)
🚫 Token Blacklisting (Logout Security)
🔒 Protected Routes with Middleware
⚡ MongoDB Transactions (ACID compliance)
🏗️ Tech Stack
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Nodemailer (Email Service)
📁 Project Structure
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
│   ├── blackList.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── account.routes.js
│   ├── transaction.routes.js
│
├── middleware/
│   ├── auth.middleware.js
│
├── services/
│   ├── email.service.js
│
├── app.js
├── db.js
⚙️ Installation
git clone <your-repo-url>
cd backend-ledger
npm install
🔑 Environment Variables

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REFRESH_TOKEN=your_refresh_token
▶️ Run the Project
npm start
📡 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/auth/logout	Logout user
🏦 Account Routes (Protected)
Method	Endpoint	Description
POST	/api/accounts/	Create account
GET	/api/accounts/	Get user accounts
GET	/api/accounts/balance/:accountId	Get account balance
💸 Transaction Routes (Protected)
Method	Endpoint	Description
POST	/api/transaction/	Create transaction
POST	/api/transaction/system/initial-funds	Add initial funds (System User only)
🔄 Transaction Flow

Your system follows a 10-step secure transaction process:

Validate request
Validate idempotency key
Check account status
Fetch sender balance
Create transaction (PENDING)
Debit entry
Credit entry
Mark transaction COMPLETED
Commit DB transaction
Send email notification
💡 Key Concepts
📘 Ledger System
Every transaction creates:
DEBIT entry (sender)
CREDIT entry (receiver)
Ledger entries are immutable
💰 Balance Calculation
Balance is computed dynamically:
Balance = Total Credit - Total Debit
🔁 Idempotency
Prevents duplicate transactions using idempotencyKey
🔐 Security
JWT-based authentication
Token blacklisting after logout
Protected routes using middleware
📧 Email Notifications
Welcome email on registration
Transaction success/failure emails
⚠️ Error Handling
Invalid credentials
Insufficient balance
Duplicate transactions
Unauthorized access
📌 Future Improvements
Add transaction history pagination
Rate limiting
Admin dashboard
Multi-currency support
Docker support
