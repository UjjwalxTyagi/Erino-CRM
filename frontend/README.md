# Contact Management App

## Description

This Contact Management App is a simple MERN stack (MongoDB, Express, React, Node.js) application designed to manage a list of contacts. The app allows users to add, view, update, and delete contacts. Each contact includes the following information: First Name, Last Name, Email, Phone, Company, and Job Title.

### Major Technical Decisions:
- **Frontend**: The frontend of the application is built using ReactJS with Material-UI components for the UI. The app is structured to use functional components and hooks for state management.
- **Backend**: The backend is developed using Express.js to handle HTTP requests and MongoDB (via Mongoose) for storing contact data. The backend is responsible for handling CRUD operations for the contacts.
- **Database**: MongoDB is used to store contacts. Mongoose is used for easy interaction with MongoDB and to define the contact schema.

### Key Features:
- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **Responsive UI**: The app uses Material-UI for responsive design.
- **Real-time updates**: When a new contact is added, it gets updated on the screen without the need for a page refresh.

## Setup Instructions

### Prerequisites:
- Node.js (>=16.x)
- MongoDB (you can use MongoDB Atlas for a cloud instance or a local MongoDB server)
- npm or yarn for package management

### Steps to Run the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/contact-management-app.git
    cd contact-management-app
    ```

2. **Install dependencies for the backend**:
   Navigate to the backend directory and run:
    ```bash
    cd backend
    npm install
    ```

3. **Set up MongoDB**:
   - If you're using MongoDB locally, ensure your MongoDB server is running.
   - If you're using MongoDB Atlas, create a MongoDB cluster, and obtain the connection string.
   - Add the connection string to the `.env` file:
     ```bash
     MONGO_URI=mongodb://your-mongo-uri
     ```

4. **Start the backend server**:
    ```bash
    npm start
    ```
    This will start the server on `http://localhost:5000`.

5. **Install dependencies for the frontend**:
   Navigate to the frontend directory and run:
    ```bash
    cd frontend
    npm install
    ```

6. **Start the frontend server**:
    ```bash
    npm start
    ```
    This will start the React development server on `http://localhost:3000`.

### Database Schema Script

The MongoDB schema for storing contacts is defined as follows:

```javascript
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
