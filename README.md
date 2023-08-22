

# Eventify - Event Management App

Eventify is an event management application that allows you to create, manage, and discover upcoming events. This README provides comprehensive instructions for installing, testing, running, and understanding the app.

## Table of Contents
- [System Architecture Overview](#system-architecture-overview)
- [System Requirements Specification](#System-requirements-specification)
- [How to Use the App](#how-to-use-the-app)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Security Measures](#security-measures)
- [Environment Variables](#environment-variables)
- [Third-Party APIs](#third-party-apis)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## System Architecture Overview

The Event Management System's architecture consists of several interconnected components that work together to deliver the desired functionalities. The application follows a client-server architecture, where the client (web browser) interacts with the server (backend) to access and manipulate data.

### System Modules:

- **Frontend (Client):** This module encompasses the user interfaces and interactions. It's responsible for rendering views, handling user inputs, and sending requests to the backend.

- **Backend (Server):** The backend module handles data processing, storage, and communication with the frontend. It provides API endpoints to perform CRUD operations and manages user authentication.

- **Database:** The database module stores event details, user information, and other relevant data.

### Distribution of Functions:

- **Frontend:** Responsible for user registration/authentication, displaying event lists/details, handling user interactions, and sending requests to the backend.

- **Backend:** Manages user authentication, provides API endpoints for CRUD operations, processes requests, interacts with the database, and performs necessary business logic.

- **Database:** Stores event information, user profiles, and any other relevant data.

### Architectural Components for Reuse:

- **Authentication Middleware:** A component that handles user authentication and role-based access control can be reused across different endpoints.

- **Database Models:** Data models for events, users, and other entities can be defined as reusable components.

### Web Stack and Choice of Architecture

#### Web Stack:

- **Frontend:** React for building dynamic user interfaces.
- **Backend:** Express.js for building the server and API.
- **Database:** MongoDB for storing event and user data.
- **Node.js:** Powers the backend server and aligns with the MERN stack for a cohesive development experience.

### Use of Bootstrap

#### Reasons to Use Bootstrap:

- **Responsive Design:** Bootstrap provides responsive grid systems and components, ensuring the application looks good on various devices and screen sizes.

- **Consistency:** Bootstrap offers a consistent design language and pre-designed components that save development time.

- **Customization:** While Bootstrap provides default styles, I can customize the theme to match my application's branding.


## How to Use the App

### Register As a Regular User (Without Admin Privileges):

1. To register as a regular user, enter your username and password.
2. Ensure that your email is valid (e.g., includes @gmail.com or @yahoo.com) and that your password is longer than 8 characters.
3. Do not click the "Is Admin" checkbox.
4. Once registered, the page will redirect you to the login page.
5. Log in using the same details used for registration.
6. If successful, the page will redirect you to your dashboard, where you can view all events.

### Register As Admin:

1. To register as an admin, enter your username and password.
2. Ensure that your email is valid (e.g., includes @gmail.com or @yahoo.com) and that your password is longer than 8 characters.
3. Click the "Is Admin" checkbox.
4. Once registered, the page will redirect you to the login page.
5. Log in using the same details used for registration.
6. If successful, the page will redirect you to your admin dashboard, where you can view all events and perform admin actions such as creating, editing, and deleting events.

### Creating New Events (Admin):

- After logging in as an admin, you can create a new event, specifying details such as title, date, time, location, and description. The new event will be added to the existing events.

### Editing Events (Admin):

- Events are displayed within cards. To edit an event, click the "Update" button located within the event card. Modify any section within the event card, and click the "Update" button at the bottom of the form to finalize the update.

### Deleting Events (Admin):

- To delete an event, click the "Delete" button located next to the "Update" button within the event card.

### Updating Event Status (Admin):

- To update the event status, click the dropdown menu within the event card and choose a valid status from the options.

## Installation

To run the application on your local machine, follow these steps:

### Prerequisites

Ensure that you have the following software installed on your machine:

- Node.js (version 14 or higher)
- npm (Node.js package manager)

### Install Backend Dependencies

```bash
npm install --prefix backend

Install Frontend Dependencies

npm install --prefix frontend
Running the App
Start the Backend Server:

npm start --prefix backend
The backend server will run on port 5000 by default. To change the port, modify it in the index.js file inside the backend folder.

Start the Frontend Development Server:

npm start --prefix frontend
The frontend server will run on port 3000 by default. To change the port, modify it in the package.json file inside the frontend folder.

Open your Web Browser:

Once both the backend and frontend servers are running, open your web browser and visit http://localhost:3000 to access the application.

Testing
The application includes automated tests to ensure its functionality. To run the tests, use the following commands:

Run Backend Tests:

npm test --prefix backend
The tests use Jest and Supertest for testing the API endpoints.

Run Frontend Tests:

npm test --prefix frontend
The tests use Jest and React Testing Library for testing the React components.

Security Measures
Eventify follows best practices for securing user data and APIs. User passwords are hashed before storage, and JWT tokens are used for authentication.

Environment Variables
This app uses environment variables to manage sensitive information and configuration settings. The environment variables are stored in separate .env files for both the frontend and backend.

Backend .env File
The backend .env file, located in the backend folder, contains configuration settings for the backend server, such as the server port and any API keys or secrets needed for external services.

For security reasons, the .env file is not included in the version control system (e.g., Git) to prevent sensitive information from being exposed publicly. Instead, it is added to the .gitignore file, so it won't be pushed to the repository.

You can create your own .env file in the backend folder and include the necessary environment variables for your app. Here's an example of how it might look:

PORT=5000
API_KEY=my_secret_api_key
Frontend .env File
The frontend .env file, located in the frontend folder, contains configuration settings specific to the frontend, such as the API base URL.

Similar to the backend, the frontend .env file is also not included in version control to protect sensitive information.

Create your own .env file in the frontend folder and add the required environment variables. Here's an example:

REACT_APP_API_BASE_URL=http://localhost:5000/auth
Error Handling
Proper error handling is implemented to handle and log errors securely without revealing sensitive information to end-users.

### CORS and Helmet Middleware
The backend server uses CORS middleware to restrict cross-origin requests.
The backend server uses Helmet middleware to set various HTTP headers, enhancing security.
MongoDB URI
Eventify uses MongoDB to store event data. To configure the MongoDB URI:

Create a .env file in the server directory:
server/.env
Open the .env file and add your MongoDB URI:

MONGO_URI=your_mongodb_uri_here

Deployment
Separate Deployment
For larger applications or improved scalability, I have deployed the backend and frontend separately. The backend serves as an API server, and the frontend is a standalone application that communicates with the API.

### Contributing
Contributions to Eventify are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Enjoy using Eventify for managing and discovering events!
