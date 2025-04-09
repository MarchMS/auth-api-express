# Auth API

## Description
This project provides an API for user registration, login, and retrieving a list of users. It uses Node.js, Express, MongoDB, JWT, and bcrypt for password hashing.

## API Structure
- **POST /register** — Register a user (email, password)
- **POST /login** — Log in and return a JWT token
- **GET /users** — Get a list of users (only for authorized users)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MarchMS/auth-api-express.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables by creating a `.env` file in the root of the project. Example:

   ```
   MONGODB_URI=mongodb://localhost:27017/auth-api-express
   JWT_SECRET=supersecretkey
   PORT=3000
   ```

   - `MONGODB_URI`: The connection string for MongoDB.
   - `JWT_SECRET`: A secret key used to sign JWT tokens.
   - `PORT`: The port on which the application will run (default: `3000`).

4. Run the project:
   ```bash
   npm run dev
   ```

5. Swagger UI is available at:
   ```
   http://localhost:3000/swagger
   ```

## Tests
To run the tests, use the following command:
```bash
npm test
```

## Technologies
- Node.js
- Express
- MongoDB
- TypeScript
- JWT
- bcrypt
