Here is a line-by-line breakdown of your `README.md` file located at `FrontEnd/university-data/README.md`:

1. (blank)
2. # 🎓 University Data with Chatbot
3.
4. ## 🚀 Project Overview
5.
6. **University Data with Chatbot** is a full-stack web application built to assist students and administrators in accessing and managing university-related information.
7.
8. It offers:
9. - A clean, user-friendly interface for browsing university content
10. - A chatbot for quick help and info
11. - An admin dashboard to manage notices, logs, feedback, and admissions
12.
13. This project was developed as part of the **LaunchCode Unit 2 Final Project**.
14.
15. ---
16.
17. ## 🛠️ Technologies Used
18.
19. ### 🖼️ Frontend
20. - React (with Vite)
21. - React Router DOM
22. - Axios
23. - CSS3 (Flexbox & Grid)
24.
25. ### ⚙️ Backend
26. - Java Spring Boot 3
27. - Spring Web
28. - Spring Data JPA
29. - Hibernate ORM
30. - MySQL
31.
32. ### 🧰 Tools & Platforms
33. - IntelliJ IDEA
34. - Git & GitHub
35. - MySQL Workbench
36. - Postman (API Testing)
37.
38.
39. ---
40.
41. ## 💻 Installation Instructions
42.
43. ### 🔧 Backend (Spring Boot)
44.
45. 1. Clone the backend repository:
46.
47.    ```bash
48.    git clone <your-backend-repo-url>
49.    cd <your-backend-folder>
50.
51. Set up a MySQL database and update application.properties:
52.
53. properties
54.
55. spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
56. spring.datasource.username=your_username
57. spring.datasource.password=your_password
58. Run the backend server:
59.
60.
61. ./mvnw spring-boot:run
62. Or run directly from IntelliJ
63.
64. 🌐 Frontend (React + Vite)
65. Clone the frontend repository:
66.
67.
68. git clone <your-frontend-repo-url>
69. cd <your-frontend-folder>
70. Install dependencies:
71.
72.
73. npm install
74. Start the development server:
75.
76.
77. npm run dev
78. Open in browser:
79.
80.
81. http://localhost:5173
82. 🔗 Project Artifacts
83. 📐 Wireframes: https://balsamiq.cloud/s7vrxaz/pyy2iv8/r2278
84.
85. 🗃️ ER Diagram: https://miro.com/app/board/uXjVJd1-a0A=/?share_link_id=200666328506
86.
87. 🛠️ Known Issues
88. 🗣️ Chatbot does not support voice input yet.
89.
90. 🔐 Only basic authentication is implemented; no JWT or OAuth.
91.
92. 🌱 Future Enhancements
93. 🗣️ Voice recognition and speech synthesis for the chatbot.
94.
95. 🔐 Implement JWT-based authentication for secure user sessions.
96.
97. 🔍 Filter and search functionality for admin dashboard (logs, feedback, posts).
98.
99. 📁 CSV export for chatbot logs and feedback.
100.
101. 👤 Profile management for students (view/edit details, activity history).
102.
103. 📊 Admin analytics dashboard (site usage, feedback statistics).
104.
105. 📎 Additional Notes
106. ✅ Ensure MySQL server is running before launching the backend.
107.
108. 🌐 Tested on latest Chrome, Edge.
109.
110. 📱 Fully responsive UI (mobile-first design).
