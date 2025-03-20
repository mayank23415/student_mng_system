# Student Management System API

## Overview

This is a Student Management System API built using Node.js, Express.js, TypeScript, and MongoDB Atlas. The system allows an admin to manage students and assign tasks, while students can view and update their assigned tasks.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Typed JavaScript
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables management
- **express-validator** - Input validation

## Setup Instructions

1. **Clone the Repository**
2. **Install Dependencies**
3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following:

4. **Start the Server**

    - **Development Mode** (Auto-restart with Nodemon)
    - **Production Mode**

## API Endpoints

### Auth Routes

| Method | Endpoint     | Description         | Request Body                           |
|--------|--------------|---------------------|----------------------------------------|
| POST   | /auth/login  | Login as Admin/Student | `{ "email": "string", "password": "string" }` |

### Admin Routes

| Method | Endpoint           | Description       | Request Body                                                                 |
|--------|--------------------|-------------------|------------------------------------------------------------------------------|
| POST   | /admin/add-student | Add a new student | `{ "name": "string", "email": "string", "department": "string", "password": "string" }` |
| POST   | /admin/assign-task | Assign task to student | `{ "studentId": "string", "task": "string", "dueDate": "YYYY-MM-DD" }` |

### Student Routes

| Method | Endpoint            | Description              | Request Body                           |
|--------|---------------------|--------------------------|----------------------------------------|
| GET    | /student/tasks      | Get assigned tasks       | -                                      |
| PATCH  | /student/task-status| Update task status (completed) | `{ "taskId": "string", "status": "completed" }` |


## Author

👤 **Mayank23415**
