

# Eventify - Event Management App

Eventify is an event management application that allows you to create, manage, and discover upcoming events. This README provides comprehensive instructions for installing, testing, running, and understanding the app.

[Visit My App](https://eventify-k3x1.onrender.com/)

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

# Event Management System - System Architecture Overview

## System Architecture Overview

The Event Management System's architecture consists of several interconnected components that work together to deliver the desired functionalities. The application follows a client-server architecture, where the client (web browser) interacts with the server (backend) to access and manipulate data.

### System Modules:

- **Frontend (Client):** This module encompasses the user interfaces and interactions. It's responsible for rendering views, handling user inputs, and sending requests to the backend.

- **Backend (Server):** The backend module handles data processing, storage, and communication with the frontend. It provides API endpoints to perform CRUD operations, manages user authentication, and ensures the security of user data.

- **Database:** The database module stores event details, user information, and other relevant data securely.

### Distribution of Functions:

- **Frontend:** Responsible for user registration/authentication, displaying event lists/details, handling user interactions, and sending requests to the backend.

- **Backend:** Manages user authentication using JSON Web Tokens (JWT), provides API endpoints for CRUD operations, processes requests, interacts with the database, and performs necessary business logic. JWT is utilized to ensure the security and integrity of user data during authentication.

- **Database:** Stores event information, user profiles, and any other relevant data, ensuring data is protected through access controls and encryption.

### Architectural Components for Reuse:

- **Authentication Middleware:** A component that handles user authentication and role-based access control is reused across different endpoints to ensure secure access to resources.

- **Database Models:** Data models for events, users, and other entities are defined as reusable components, enhancing code maintainability.

### Web Stack and Choice of Architecture

#### Web Stack:

- **Frontend:** React is chosen for building dynamic user interfaces. Its component-based architecture allows for modular development, enhancing code reusability and maintainability.

- **Backend:** Express.js is selected for building the server and API. Its lightweight and flexible nature aligns with the MERN stack, offering a robust foundation for the backend.

- **Database:** MongoDB is used for storing event and user data. Its flexibility in handling unstructured data and scalability makes it suitable for this application.

- **Node.js:** Powers the backend server, providing non-blocking I/O operations and aligning with the MERN stack for a cohesive development experience.

### Use of Bootstrap

#### Reasons to Use Bootstrap:

- **Responsive Design:** Bootstrap provides responsive grid systems and components, ensuring the application looks good on various devices and screen sizes, enhancing user experience.

- **Consistency:** Bootstrap offers a consistent design language and pre-designed components that save development time and ensure a polished UI.

- **Customization:** While Bootstrap provides default styles, it allows customization to match the application's branding, providing a unique look and feel.

### Data Protection

User data security is a top priority. JSON Web Tokens (JWT) are used for authentication to ensure user data protection during login and API interactions. Additionally, data in the database is safeguarded through access controls and encryption mechanisms.

### Motivation for Architecture Choices

- **React:** React's component-based structure streamlines UI development, making it easier to create interactive, dynamic user interfaces.

- **Express.js:** Express provides a minimalist framework for building the backend, enabling rapid development of RESTful APIs and middleware for authentication and authorization.

- **MongoDB:** MongoDB's flexibility and scalability are well-suited for handling event data and user profiles. Its NoSQL nature allows for quick adaptation to changing data structures.

### Deployment
The App will be deployed on render



## Event Management System - System Requirements Specification

### Introduction
The Event Management System is a web application designed to facilitate event organization and management. It allows administrators to create, edit, and manage events, while users can view event details for upcoming events. The application aims to simplify event coordination and provide a user-friendly experience for both administrators and users.

### Target Users
- **Administrators:** Responsible for creating, editing, and managing events. They benefit from efficient event management tools.
- **Users:** Individuals interested in attending events. They can view event details and benefit from obtaining easy access to upcoming events.

### User Stories
As an administrator, I want to:
- Create new events, specifying details such as title, date, time, location, and description.
- Edit event details, including changing event timings, locations, and descriptions.
- Delete events that have been canceled or are no longer relevant.

As a user, I want to:
- View a list of upcoming events along with their details and status.
- View events based on their status, such as upcoming, postponed, canceled.

### Benefits
**For Administrators:**
- Streamlined event management
- Easy event creation and modification
- Efficient cancellation handling

**For Users:**
- Clear event information
- Visibility into event status
- Easier event selection

## Differentiators
### Real-Life Applications

Similar systems in the real world include ticket booking platforms, conference management systems, and online event registration services. These applications share the goal of efficiently managing events, registrations, and user data, demonstrating the versatility of the Event Management System's architecture in various contexts.

## Example: Ticket Booking Platform Comparison

### Traditional Ticket Booking Platform

A traditional ticket booking platform, like "TicketMaster," focuses primarily on ticket sales for various events such as concerts, sports events, and theater performances. Users can browse available events, select seats, and make payments to secure tickets. Key features include ticket availability tracking, seat selection, and payment processing.

**Differences:**

1. **Scope:** Your Event Management System extends beyond ticket sales to encompass event creation, management, and user engagement. It provides a comprehensive solution for event organizers and attendees.

2. **Functionality:** While a ticket booking platform primarily focuses on ticket purchase transactions, your system offers a broader range of functionalities, including event creation, registration, user authentication, and management.

3. **User Base:** Ticket booking platforms primarily target event attendees interested in purchasing tickets. In contrast, your system caters to event organizers (administrators) and attendees, offering distinct user experiences and features.

4. **Data Handling:** Ticket booking platforms manage ticket inventory and sales data. Your system handles event data, user profiles, and the organization of events, requiring a more extensive database schema and data processing capabilities.

5. **Customization:** Your system allows event organizers to customize event details, such as descriptions, dates, and locations, providing flexibility and control over event promotion.

6. **Security:** Your system emphasizes user data protection with JWT-based authentication and ensures event data security through access controls and encryption mechanisms.

In summary, while ticket booking platforms specialize in ticket sales, your Event Management System offers a broader spectrum of features to manage and promote events, making it a versatile solution for event organizers and attendees.


## Functional Requirements
- User Registration and Authentication
- Admin Authentication and Role Management
- Event Creation, Editing, and Deletion
- Event Status Management (Admin)
- Event Listing (User)
- Event Details View (User)
- User-friendly Dashboard (Admin)
- CRUD Operations for Events (Admin)

## Non-Functional Requirements
- **Security:** User data and event information must be stored securely using encryption techniques.
- **Performance:** The application should be responsive and handle concurrent users without significant performance degradation.
- **Usability:** User interfaces must be user-friendly, ensuring easy navigation and interaction.
- **Scalability:** The application should handle increasing numbers of events and users gracefully.
- **Accessibility:** The application should be accessible to users with disabilities in compliance with accessibility standards.

## Conclusion
The Event Management System offers a user-friendly and efficient solution for event creation and management. Its simplicity, user experience, and status filtering feature set it apart from existing event management software.


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
The backend server will run on port 5000 by default. To change the port, modify it in the server.js file inside the backend folder.
This will also connect you to the mongo database.

Start the Frontend Development Server:

npm start --prefix frontend
The frontend server will run on port 3000 by default. To change the port, modify it in the package.json file inside the frontend folder.

Open your Web Browser:

Once both the backend and frontend servers are running, open your web browser and visit http://localhost:3000 to access the application.

Testing
The application includes automated tests to ensure its functionality. To run the tests, use the following commands:

Run Backend Tests:

npm test --prefix backend
The tests use Jest, mongoose and Supertest for testing the API endpoints.

Run Frontend Tests:

npm test --prefix frontend
The tests use Jest and React Testing Library for testing the React components.

Security Measures
Eventify follows best practices for securing user data and APIs. User passwords are hashed before storage, and JWT tokens are used for authentication.

Environment Variables
This app uses environment variables to manage sensitive information and configuration settings. The environment variables are stored in separate .env files for both the frontend and backend.

Backend .env File
The backend .env file, located in the backend folder, contains configuration settings for the backend server, such as the server port and any API keys or secrets needed for external services.

You can create your own .env file in the backend folder and include the necessary environment variables for your app. Here's an example of how it might look:

PORT=5000
API_KEY=my_secret_api_key
Frontend .env File
The frontend .env file, located in the frontend folder, contains configuration settings specific to the frontend, such as the API base URL.

Create your own .env file in the frontend folder and add the required environment variables. Here's an example:

REACT_APP_API_BASE_URL=http://localhost:5000/auth
Error Handling
Proper error handling is implemented to handle and log errors securely without revealing sensitive information to end-users.

### CORS and Helmet Middleware
The backend server uses CORS middleware to restrict cross-origin requests.
The backend server uses Helmet middleware to set various HTTP headers, enhancing security.
### MongoDB URI
Eventify uses MongoDB to store event data. To configure the MongoDB URI:

Create a .env file in the server directory:
server/.env
Open the .env file and add your MongoDB URI:

MONGO_URI=your_mongodb_uri_here

### Deployment
Separate Deployment
For larger applications or improved scalability, I have deployed the backend and frontend separately. The backend serves as an API server, and the frontend is a standalone application that communicates with the API.

### Contributing
Contributions to Eventify are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Enjoy using Eventify for managing and discovering events!
