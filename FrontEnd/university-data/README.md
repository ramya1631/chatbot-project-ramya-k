# 🎓 University Data with Chatbot

## 🚀 Project Overview

"University Data with Chatbot" is a full-stack web application built to assist students and administrators in accessing and managing university-related information. It offers a clean, user-friendly interface for browsing university data, interacting with a smart chatbot for quick help, and administering notices, logs, and feedback through a secure admin dashboard. This project was developed as part of the LaunchCode Unit 2 Final Project.

## 🛠️ Technologies Used

### Frontend
- React (Vite)
- React Router DOM
- Axios
- CSS3 (Flexbox & Grid)

### Backend
- Java Spring Boot 3
- Spring Web
- Spring Data JPA
- Hibernate ORM
- MySQL Database

### Tools & Platforms
- IntelliJ IDEA
- Visual Studio Code
- Git & GitHub
- MySQL Workbench
- Netlify (Frontend Deployment)
- Postman (API Testing)

---

## 💻 Installation Instructions

To run this project locally on your machine:

### 🔧 Backend (Spring Boot)

1. Clone the backend repository:
   ```bash
   git clone <your-backend-repo-url>
   cd <your-backend-folder>
   cd <your-backend-folder>
Set up a MySQL database and update the application.properties file:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
spring.datasource.username=your_username
spring.datasource.password=your_password
Run the backend server:

bash

./mvnw spring-boot:run
Or run it directly from your IDE.

🌐 Frontend (React + Vite)
Clone the frontend repository:


git clone <your-frontend-repo-url>
cd <your-frontend-folder>
Install dependencies:


npm install
Start the development server:

npm run dev
Visit the app at:


http://localhost:5173
🔗 Project Artifacts
📐 Wireframes: View Wireframes

🗃️ ER Diagram: View ER Diagram

🛠️ Known Issues
❌ Chatbot does not support voice input yet.

🔐 Only basic authentication is implemented; no JWT/token-based security.

🌱 Future Enhancements
🗣️ Integrate voice recognition and speech synthesis into the chatbot.

🔒 Implement JWT-based authentication for secure access.

🔍 Add filter and search functionality for admin dashboard (logs, posts, feedback).

📁 Enable CSV export for chatbot logs and feedback.

👤 Add profile management for students (view/edit details, view activity).

📊 Add analytics dashboard for admin (site usage, feedback stats, etc).

📎 Additional Notes
Ensure MySQL server is running before launching the backend.

Tested on modern browsers (Chrome, Edge).

Fully responsive UI (mobile-first design).









