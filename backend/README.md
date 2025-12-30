# R-W Restaurant Backend

This is the backend server for the R-W Restaurant application, providing authentication services with MySQL database integration.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MySQL (XAMPP or standalone MySQL server)
- Database named "liu" with a "users" table

### Database Setup
1. Start your MySQL server (via XAMPP or standalone)
2. Create a database named `liu`
3. Create a `users` table with the following structure:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  fname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## API Endpoints

### POST /Signup
Creates a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "fname": "John Doe"
}
```

**Response:**
```json
{
  "message": "Signup successful",
  "userId": 1
}
```

### POST /Login
Authenticates a user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "fname": "John Doe"
  }
}
```

## Error Responses
- `400`: Bad Request (missing required fields)
- `401`: Unauthorized (invalid credentials)
- `409`: Conflict (email already exists)
- `500`: Internal Server Error

## Configuration
Update the database configuration in `server.js` if needed:
```javascript
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "liu",
  port: 3306, // Change to 3307 if using XAMPP with port 3307
});
```