# Online Complaint Register and Management System

This project is an Online Complaint Register and Management System built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register complaints and manage them efficiently.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Technology Documentation](#technology-documentation)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [Support](#support)
- [Authors](#authors)
- [Team Members](#team-members)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone (https://github.com/abhikr02/online-complaint-managment-sytem.git)
   cd online-complaint-register
   
2.  Install the dependencies for both the client and server:

    -  Navigate to the server directory and install dependencies:
    ```bash
    cd server
    npm install
    ```
    -  Navigate to the client directory and install dependencies:
    ```
    cd ../client
    npm install
    ```
3.  Start the development servers:
    -  Start the server:
    ```bash
    cd server
    npm start
    ```
    -  In a new terminal, start the client:
    ```bash
    cd client
    npm start
    ```
   Open http://localhost:3000 to view the application in your browser. The page will reload when you make changes.

## Available Scripts
In the project directory, you can run:

### For the Client
-  `npm start`: Runs the React app in development mode.
-  `npm test`: Launches the test runner in interactive watch mode.
-  `npm run build`: Builds the app for production to the build folder.
### For the Server
-  `npm start`: Runs the Node.js server.
-  `npm test`: Launches the test runner for the server.

## Features
-  User registration and authentication
-  Complaint submission and tracking
-  Admin dashboard for managing complaints
-  Real-time notifications for complaint status updates

## Technologies Used
-  **Frontend:** React, Redux, Axios
-  **Backend:** Node.js, Express.js
-  **Database:** MongoDB
-  **Others:** Mongoose, JWT for authentication, Bootstrap for styling

## Technology Documentation
### MongoDB
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It allows for easy scalability and is well-suited for applications that require high availability and performance.

-  **Documentation:** [MongoDB Documentation](https://www.mongodb.com/docs/)
### Express.js
Express.js is a web application framework for Node.js, designed for building web applications and APIs. It simplifies the process of handling HTTP requests and responses.

-  **Documentation:** [Express.js Documentation](https://expressjs.com/)
### React
React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the application state efficiently.

-  **Documentation:** [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
### Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript on the server side, enabling the development of scalable network applications.

-  **Documentation:** [Node.js Documentation](https://nodejs.org/docs/latest/api/)
### Redux
Redux is a state management library for JavaScript applications, often used with React. It provides a centralized store for managing application state and allows for predictable state transitions.

-  **Documentation:** [Redux Documentation](https://redux.js.org/)
### Axios
Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests and handling responses, making it easier to interact with APIs.

-  **Documentation:** [Axios Documentation](https://axios-http.com/docs/intro)
### Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes built-in type casting, validation, and query building.

-  **Documentation:** [Mongoose Documentation](https://mongoosejs.com/docs/)
### JSON Web Token (JWT)
JWT is an open standard for securely transmitting information between parties as a JSON object. It is commonly used for authentication and information exchange in web applications.

-  Documentation: [JWT Documentation](https://jwt.io/introduction/)
Bootstrap Bootstrap is a front-end framework for developing responsive and mobile-first websites. It provides a collection of CSS and JavaScript components that help in designing user interfaces quickly and efficiently.

-  **Documentation:** [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Project Structure
The project is structured as follows:
```
online-complaint-register-and--management-system/
           ├── frontend/              # React frontend
           │   ├── public/            # Public assets
           │   ├── src/               # Source files
           │   ├── package.json       # Client dependencies
           │   └── ...
           └── backend/               # Node.js backend
               ├── models/            # Mongoose models
               ├── routes/            # API routes
               ├── controllers/       # Request handlers
               ├── config/            # Configuration files
               ├── package.json       # Server dependencies
               └── ...
```

## API Integration
The application integrates with a RESTful API built using Express.js. Key API endpoints include:

-  **User Registration**: `POST /api/users/register`
-  **User Login**: `POST /api/users/login`
-  **Submit Complaint**: `POST /api/complaints`
-  **Get Complaints**: `GET /api/complaints`
-  **Update Complaint Status**: `PUT /api/complaints/:id`
  
Refer to the [Documentation](https://www.freecodecamp.org/news/how-to-write-api-documentation-like-a-pro/) section for more details on request and response formats.

## Styling
The application uses Bootstrap for styling, providing a responsive and modern user interface. Custom CSS is also included to enhance the design and user experience.

## Testing
Testing is an essential part of the development process. The project includes unit tests for both the frontend and backend. You can run tests using the following commands:

### For the Client
   ```bash
   cd client
   npm test
   ```
### For the Server
   ```
   cd server
   npm test
   ```

## Deployment
To deploy the application, you can use platforms like Heroku or Vercel, along with MongoDB Atlas for your database. Below are the steps for deploying to Heroku and connecting to MongoDB Atlas.

**Step 1: Set Up MongoDB Atlas**
  1.  **Create a MongoDB Atlas Account**: If you don't have one, sign up at MongoDB Atlas.
  2.  **Create a New Cluster:**
      -   After logging in, click on "Build a Cluster."
      -  Choose the free tier (M0) and follow the prompts to create your cluster.
  3.  **Configure Database Access:**
      -  Go to the "Database Access" tab and create a new database user with a username and password.
      -  Make sure to grant the user read and write access to your database.
  4.  **Network Access:**
      -  Go to the "Network Access" tab and click on "Add IP Address."
      -  You can allow access from all IP addresses (0.0.0.0/0) for development purposes, but for production, it's recommended to restrict access to specific IP addresses.
  5.  **Get Connection String:**
      -  Click on "Connect" for your cluster and choose "Connect your application."
      -  Copy the connection string provided. It will look something like this:
        ```
        mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        ```
        -  Replace <username> and <password> with the credentials you created earlier.
### Step 2: Deploying to Heroku
  1.  **Create a Heroku Account:** If you don't have one, sign up at [Heroku](https://www.heroku.com/).
  2.  **Install the Heroku CLI:** Download and install the Heroku Command Line Interface (CLI) from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
  3.  **Login to Heroku:** Open your terminal and log in to your Heroku account:
       ```
       heroku login
       ```
  4.  **Create a New Heroku App**: Navigate to your project directory and create a new Heroku app:
      ```
      cd server
      heroku create your-app-name
  5.  **Set Environment Variables:** Set the MongoDB connection string and any other necessary environment variables:
      ```
      heroku config:set MONGODB_URI="your_mongodb_connection_string"
      heroku config:set JWT_SECRET="your_jwt_secret"
      ```
  6.  **Build the Client:** Build the React application:
      ```
      cd ../client
      npm run build
  7.  **Serve Static Files:** Ensure your server is set up to serve the static files from the React build. In your server code, add the following lines:
      ```
      const path = require('path');
      app.use(express.static(path.join(__dirname, 'client/build')));
      app.get('*', (req, res) => {
               res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });
      ```
  8.  **Commit Your Changes:** Make sure all your changes are committed:
      ```
      git add .
      git commit -m "Prepare for deployment"
      ```
  9.  **Deploy to Heroku:** Push your code to Heroku:
       ```
       git push heroku main
       ```
  10.  **Open Your App:** Once the deployment is complete, you can open your app in the browser:
       ```
       heroku open
       ```
### Step 3: Verify MongoDB Connection
  1.  **Check Logs:** After deployment, you can check the logs to ensure that your application is connecting to MongoDB correctly:
      ```
      heroku logs --tail
      ```
  2.  **Test the Application:** Visit your deployed application and test the features that interact with the database to ensure everything is functioning as expected.

## Learn More
You can learn more in the Create React App documentation and the MERN stack documentation.

To learn React, check out the React documentation.

## Support
For support, email abhishek.kr.git02@gmail.com or visit [GitHub](https://github.com/abhikr02).

## Authors
-  [@Md Nurullah](https://github.com/SheikhNoor)
## Team Members
1.  [@Abhishek Kumar](https://github.com/abhikr02)
2.  [@Md Nurullah](https://github.com/SheikhNoor) 
