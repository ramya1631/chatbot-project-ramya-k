🎓 University Data with Chatbot
🚀 Project Overview
University Data with Chatbot is a full-stack web application built to assist students and administrators in accessing and managing university-related information.

It offers:

A clean, user-friendly interface for browsing university content

A chatbot for quick help and info

An admin dashboard to manage notices, logs, feedback, and admissions

This project was developed as part of the LaunchCode Unit 2 Final Project.

🛠️ Technologies Used

🖼️ Frontend
React (with Vite)

React Router DOM

Axios

CSS3 (Flexbox & Grid)

⚙️ Backend
Java Spring Boot 3

Spring Web

Spring Data JPA

Hibernate ORM

MySQL

🧰 Tools & Platforms
IntelliJ IDEA

Git & GitHub

MySQL Workbench

Postman (API Testing)

💻 Installation Instructions

🔧 Backend (Spring Boot)
Clone the backend repository:


git clone <your-backend-repo-url>
cd <your-backend-folder>
Set up a MySQL database and update your application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name  
spring.datasource.username=your_username  
spring.datasource.password=your_password  
Run the backend server:

./mvnw spring-boot:run
Or run it directly from IntelliJ.

🌐 Frontend (React + Vite)
Clone the frontend repository:

git clone <your-frontend-repo-url>
cd <your-frontend-folder>
Install dependencies:

npm install
Start the development server:


npm run dev
Open the app in your browser:


http://localhost:5173

🔗 Project Artifacts

📐 Wireframes: https://balsamiq.cloud/s7vrxaz/pyy2iv8/r2278

🗃️ ER Diagram: https://miro.com/app/board/uXjVJd1-a0A=/?share_link_id=200666328506

🛠️ Known Issues
🗣️ Chatbot does not support voice input yet

🔐 Only basic authentication is implemented; no JWT or OAuth

🌱 Future Enhancements
🗣️ Voice recognition and speech synthesis for the chatbot

🔐 Implement JWT-based authentication for secure user sessions

🔍 Filter and search functionality for admin dashboard (logs, feedback, posts)

📁 CSV export for chatbot logs and feedback

👤 Profile management for students (view/edit details, activity history)

📊 Admin analytics dashboard (site usage, feedback statistics)

📎 Additional Notes
✅ Ensure MySQL server is running before launching the backend

🌐 Tested on latest Chrome

📱 Fully responsive UI 

