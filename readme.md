# Task Management System - Backend

## Overview
This is a robust backend for a Task Management System designed for **REGRIP INDIA PVT. LTD.**  
The backend provides secure user authentication, task management functionality, and activity logging while following RESTful API principles.

---

## Tech Stack
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MySQL / PostgreSQL (choose as per preference)  
- **Authentication:** JWT with email-based OTP  
- **Documentation:** Swagger  

**Libraries & Tools Used:**  
- `jsonwebtoken` – For JWT token generation and verification  
- `bcryptjs` – Password/OTP hashing  
- `express-rate-limit` – Rate limiting for security  
- `express-validator` – Input validation and sanitization  
- `winston` / `morgan` – Activity logging  
- `dotenv` – Environment variable management  

**Design Decisions:**  
- RESTful API structure for clean and maintainable endpoints.  
- Middleware-based approach for cross-cutting concerns like authentication, authorization, validation, logging, and error handling.  
- JWT short-lived access tokens with refresh tokens for security.  
- MySQL/PostgreSQL relational database to store users, tasks, and logs efficiently.  

---

## Features

### 1. Authentication & Security
- Email-based OTP login flow  
- Short-lived **access tokens** and refresh tokens for session management  
- Strict **authorization**: Users can only access their own data  

### 2. Task Management
Authenticated users can:  
- **Create Task** – Add new tasks with `title`, `description`, `status`, etc.  
- **View Tasks** – Fetch all tasks of the logged-in user  
- **Update Task** – Modify an existing task  
- **Delete Task** – Remove a task permanently  

### 3. Middleware
- **Authentication:** Verifies JWT token for protected routes  
- **Authorization:** Checks user permissions for tasks  
- **Validation:** Sanitizes and validates incoming request data  
- **Rate Limiting:** Limits OTP requests and API usage to prevent abuse  
- **Global Error Handling:** Centralized error management for all routes  

---

## 4. Activity Logging
The system logs critical events in the database for auditing:  
- **Security Events:** Login attempts, OTP generation, password changes  
- **Task Operations:** Task creation, updates, deletions  
- **API Usage:** General user activity and access patterns  

---

## 5. Deployment
The backend is deployed and publicly accessible.  
- **Hosting Platforms:** Render, Railway, AWS, or Heroku (choose one)  
- **Hosted Backend URL:** `<YOUR_HOSTED_BACKEND_URL>`  

---

## 6. API Documentation
API endpoints are documented using Swagger.  
- **Swagger Documentation Link:** `<YOUR_SWAGGER_DOCS_LINK>`  

---

## 7. Running Locally

### Requirements
- Node.js v18+  
- npm v10+  
- MySQL / PostgreSQL database  

---
### Steps
1. Clone the repository:  
  
   - git clone [(https://github.com/roopeshkumar11/Regrip-Backend-Assignment.git)]
   
2. Install dependencies:

- npm install


3. Setup environment variables:
 - Create a .env file or copy .env.example and configure:

- PORT=5000
- DB_HOST=<DB_HOST>
- DB_USER=<DB_USER>
- DB_PASSWORD=<DB_PASSWORD>
- DB_NAME=<DB_NAME>
- JWT_SECRET=<YOUR_JWT_SECRET>
- OTP_EXPIRATION=<OTP_EXPIRATION_TIME>


4. Start the server:

 - npm run dev

---


## Floder Structure

- src/
- config/
  - db.js                 # Database configuration
- controllers/
  - authController.js     # Handles authentication logic
  - taskController.js     # Handles task CRUD operations
- middleware/
  - apiRateLimiter.js     # Global API rate limiter
  - authMiddleware.js     # JWT authentication middleware
  - authRateLimiter.js    # Auth-specific rate limiter
- models/
  - ActivityLog.models.js # Activity log schema
  - Task.models.js        # Task schema
  - User.models.js        # User schema
- routes/
  - authRoutes.js         # Authentication routes
  - taskRoutes.js         # Task routes
- utils/
  - generateOTP.js        # Function to generate OTP
  - jwt.js                # JWT token generation & verification
  - logger.js             # Logging utility
  - sendEmail.js          # Email sending utility
- app.js                  # Express app setup
- index.js                # Entry point
- sync.js                 # Optional DB sync script
- .env                    # Environment variables
- package.json            # Project dependencies
- package-lock.json       # Lockfile
- node_modules/           # Installed modules
- readme.md               # Project documentation
               # Project documentation



## API Endpoints
| Method | Endpoint       | Description                |
| ------ | -------------- | -------------------------- |
| GET    | /api/tasks     | Get all tasks for the user |
| POST   | /api/tasks     | Create a new task          |
| PUT    | /api/tasks/:id | Update a task              |
| DELETE | /api/tasks/:id | Delete a task              |




This version is fully formatted, clean, and ready to paste directly into a `README.md`.  

If you want, I can also make a **1-page ultra-slim version** perfect for submitting with the assignment—it keeps everything professional but reduces length.  

Do you want me to do that?


## API Documentation

You can view and test the Task Management API using **Postman**:

[Open API in Postman](https://www.postman.com/study3-8479/regrip-backend/request/36616432-deee29a2-f5ad-4c4a-acda-102a96ef3af1?tab=body)

> This Postman collection contains all endpoints for:
> - Authentication (Send OTP, Verify OTP)
> - Task Management (Create, Read, Update, Delete Tasks)
> 
> You can import the collection into Postman and test the API directly.
