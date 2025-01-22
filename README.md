# Address_Diary

## Overview
The Address Diary is a web application designed to help users save there Address . It supports full CRUD operations (Create, Read, Update, Delete).


The application is built with a **MERN** stack.

**. Frontend:** React.js for a responsive and user-friendly UI.


**. Backend:** Node.js and Express.js for API and business logic.

**. Database:** MongoDB for scalable and flexible data storage.

### Key Features

**. Task Creation:** Add new tasks with a title and description.


**. Task Viewing:** Display a list of all tasks, with options to view individual task details.

**. Task Updates:** Modify task information, including title, description, and status.

**. Task Deletion:** Remove tasks from the system when no longer needed.


## Getting Started

To run the project locally, follow these steps:

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/TVVinudev/Address_Diary.git
    ```
2. open server file in terminal ,
   ```bash
   npm install
   ```
3. Create a .env file and set
    PORT = <your port number>

4. Run your mongodb
   ```bash
    sudo systemctl start mongod
   ```

6. Start the server:
    ```bash
    npm run dev
    ```
7. Navigate to the project directory:
    ```bash
    cd frontend
    ```
8. Install the dependencies:
    ```bash
    npm install
    ```
9. Create a .env file and set
    PROXY_URL = <set your proxy url>
    
10. Start the ui:
    ```bash
    npm run dev
    ```
    
11. Here is the ```bash vite.config.js ``` file you'll be using.
   
   ```bash
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react()],
      server:{
        port:5000, 
        proxy: {
          "/api": {
            target: "http://localhost:3000",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/,""),
          }
        }
      },
    })
   ```

### API Documentation
### Task Management
### 1. Create Task


**Endpoint:**/api/createTask

**Method:** POST


**Request Body:**
```bash
    {
  "id": "1001",
  "name": "Vinudev",
  "address":"Thakidiyi, Karimpani, Kottayam",
  "phone":"9876543210",
    }
```
### 2. Update Task

**Endpoint:** /api/updateTask

**Method:** PUT

**Request Body:**
```bash
    {
  "name": "Vinudev",
  "address":"Thakidiyi, Karimpani, Kottayam",
  "phone":"9876543210",
    }
```
### 3. Delete Task

**Endpoint:** /api/delete/1001


**Method:** DELETE

**Request params:**
```bash
    {
    "_id":"678fc7c90fe1d3bc8846e1f2"
    }
```
### 4. Get Task using id

**Endpoint:** /api/view

**Method:** GET

**Request params:**
```bash
    {
    "_id":"678fc7c90fe1d3bc8846e1f2"
    }
```
