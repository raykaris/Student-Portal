# 🎓 Student Portal API

A full-stack CRUD API for managing a Student Portal using **Node.js**, **Express**, and **MySQL**. This application provides routes for managing students, courses, instructors, and enrollments.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MySQL
- **Frontend**: (Optional) React or any frontend framework
- **Architecture**: MVC (Model-View-Controller)

---

## 📁 Project Structure

    ```bash
    student-portal/
    ├── controllers/
    │ ├── studentController.js
    │ ├── courseController.js
    │ ├── instructorController.js
    │ └── enrollmentController.js
    ├── routes/
    │ ├── studentRoutes.js
    │ ├── courseRoutes.js
    │ ├── instructorRoutes.js
    │ └── enrollmentRoutes.js
    ├── middleware/
    │ └── (auth, error handlers, etc.)
    ├── config/
    │ └── db.js
    ├── .env
    ├── index.js
    └── README.md