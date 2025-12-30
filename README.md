# R-W Restaurant

A modern restaurant website built with React frontend and Node.js/Express backend with MySQL authentication.

## Project Structure

```
walid-orabi/
├── backend/          # Express.js server with MySQL
│   ├── server.js
│   ├── package.json
│   └── README.md
├── src/             # React frontend
│   ├── Pages/
│   ├── Components/
│   └── Assets/
├── public/
└── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MySQL (XAMPP or standalone MySQL server)

### Database Setup
1. Start your MySQL server
2. Create a database named `liu`
3. Create the `users` table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  fname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup
1. In the root directory, install dependencies:
   ```bash
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```
   App runs on `http://localhost:3000`

## Features

- **Authentication**: User signup and login with MySQL database
- **Responsive Design**: Mobile-friendly restaurant website
- **Modern UI**: Clean, professional design with smooth animations
- **Menu System**: Interactive menu with cart functionality
- **Contact Integration**: Contact form and location information

## API Endpoints

- `POST /Signup` - User registration
- `POST /Login` - User authentication

## Technologies Used

### Frontend
- React 18
- React Router DOM
- CSS3 with modern layouts
- Font Awesome icons

### Backend
- Node.js
- Express.js
- MySQL2
- CORS

## Available Scripts

### Frontend
- `npm start` - Runs the React app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

### Backend
- `npm start` - Runs the Express server
- `npm run dev` - Runs with nodemon for development

## Deployment

1. Build the React app: `npm run build`
2. Deploy the `build` folder to your web server
3. Ensure the backend is deployed and accessible
4. Update API endpoints in the frontend if needed

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
