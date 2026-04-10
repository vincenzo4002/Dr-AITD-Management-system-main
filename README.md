# Dr AITD Management System

A comprehensive, modern Enterprise Resource Planning (ERP) solution designed specifically for **Dr AITD**. This system streamlines administrative tasks, empowers teachers with digital tools, and engages students through a unified, user-friendly platform.

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-yellow)
![Architecture](https://img.shields.io/badge/Architecture-MVC%20%2B%20Modular-orange)

---

## 🚀 Key Features

### 🎓 Student Portal
*   **Dashboard**: Real-time overview of attendance, notices, and upcoming events.
*   **Academics**: Access to lecture notes, study materials, assignments, and exam results.
*   **Administrative**: View fee status, payment history, and apply for leave.
*   **Timetable**: Personalized class schedules.
*   **Profile Management**: Update personal details and manage account security.
*   **Learning Resources**: Access a digital library of course materials (Videos, PDFs, Notes).
*   **Library Access**: Browse and search available books.

### 👨‍🏫 Teacher Portal
*   **Class Management**: Efficiently mark attendance and manage subject-wise student lists.
*   **Academic Tools**: Upload and manage assignments, marks, and learning resources.
*   **Communication**: Post class-specific notices and announcements.
*   **Analytics**: View detailed attendance reports and student performance metrics.
*   **Timetable**: View assigned teaching schedules.
*   **Leave Management**: Apply for leave and track status.
*   **Resource Management**: Upload and organize learning materials for students.

### 🛡️ Admin Portal
*   **User Management**: Full control over Student, Teacher, and Admin accounts.
*   **Course & Subject Management**: Create and configure courses, branches, and subjects.
*   **Timetable Management**: Create and modify class schedules for all courses.
*   **Fee Management**: Track student fee payments, dues, and generate reports.
*   **Library Management**: Manage book inventory, issue/return books, and track overdue items.
*   **Reports**: Generate comprehensive reports for attendance, academics, and enrollment.
*   **Notices Management**: Create and manage institution-wide announcements.
*   **System Settings**: Configure institution details and system preferences.

---

## 🛠️ Tech Stack & Architecture

### Backend (Clean Architecture)
*   **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
*   **Models**: Domain-Driven Design (Users, Academics, Activities, Operations)
*   **Security**: 
    *   JWT (JSON Web Tokens) for stateless authentication (30-day expiry)
    *   BCrypt for password hashing
    *   CORS configured for secure cross-origin requests
    *   HttpOnly cookies for enhanced security
*   **File Handling**: Multer for local file storage (assignments, materials, resources)
*   **Email**: Nodemailer for password reset and notifications

### Frontend
*   **Framework**: [React.js](https://reactjs.org/) (v18) with [Vite](https://vitejs.dev/)
*   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
*   **Routing**: [React Router DOM](https://reactrouter.com/) v6
*   **HTTP Client**: Axios with interceptors for token management
*   **UI Components**: Custom ShadCN-style components
*   **Icons**: Lucide React
*   **Notifications**: React Toastify

---

## 📋 System Requirements

### Development Environment
*   **Node.js**: v18.0.0 or higher
*   **MongoDB**: v5.0 or higher (local or Atlas)
*   **npm**: v8.0.0 or higher
*   **Operating System**: Windows, macOS, or Linux

### Production Environment
*   **Memory**: Minimum 512MB RAM (1GB recommended)
*   **Storage**: 1GB minimum for application and uploads
*   **Network**: Stable internet connection for cloud deployment

---

## ⚙️ Local Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Dr AITD Management system"
```

### 2. Install All Dependencies (Recommended)
```bash
npm run install-all
```
This will install dependencies for both backend and frontend.

### 3. Backend Configuration

Navigate to backend directory:
```bash
cd backend
```

Create a `.env` file in `backend/` directory:
```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/college-erp
JWT_SECRET=your_secure_secret_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NODE_ENV=development
```

### 4. Frontend Configuration

Create a `.env.local` file in `frontend/` directory:
```env
VITE_API_URL=http://localhost:4000
```

### 5. Database Seeding (Required for First Run)

Initialize the database with default accounts and sample data:
```bash
cd backend
node seed_auth_users.js
```

**Default Credentials:**
*   **Admin**: `admin` / `admin123`
*   **Teacher**: `teacher` / `teacher123`
*   **Student**: `STU2025` / `student123` (Roll No: STU2025)

---

## 🏃‍♂️ Running the Application

### Option 1: Concurrent Start (Recommended)
From the root directory:
```bash
npm start
```
This runs both backend and frontend simultaneously.

### Option 2: Separate Terminals

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:4000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Accessing the Application
*   **Frontend**: `http://localhost:5173`
*   **Backend API**: `http://localhost:4000/api`
*   **API Health Check**: `http://localhost:4000/`

---

## 🔧 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Authentication Endpoints

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123",
  "role": "admin"
}
```

#### Logout
```http
POST /api/auth/logout
```

### Public Endpoints
*   `GET /api/courses` - Get all active courses
*   `GET /api/subjects` - Get all active subjects

### Protected Endpoints (Require Authentication)

#### Admin Routes
*   `GET /api/admin/dashboard` - Dashboard statistics
*   `GET /api/admin/students` - All students
*   `POST /api/admin/students` - Create student
*   `PUT /api/admin/students/:id` - Update student
*   `DELETE /api/admin/students/:id` - Delete student
*   `GET /api/admin/teachers` - All teachers
*   `POST /api/admin/teachers` - Create teacher
*   `GET /api/admin/courses` - All courses
*   `POST /api/admin/courses` - Create course
*   `GET /api/admin/subjects` - All subjects
*   `POST /api/admin/subjects` - Create subject

#### Teacher Routes
*   `GET /api/teacher/:teacherId/dashboard` - Teacher dashboard
*   `GET /api/teacher/:teacherId/subjects` - Assigned subjects
*   `GET /api/teacher/:teacherId/students` - Students list
*   `POST /api/teacher/:teacherId/attendance` - Mark attendance
*   `POST /api/teacher/:teacherId/assignments` - Create assignment
*   `POST /api/teacher/:teacherId/marks` - Add marks

#### Student Routes
*   `GET /api/student/:studentId/dashboard` - Student dashboard
*   `GET /api/student/:studentId/subjects` - Enrolled subjects
*   `GET /api/student/:studentId/attendance` - Attendance records
*   `GET /api/student/:studentId/marks` - Marks/grades
*   `GET /api/student/:studentId/assignments` - Assignments
*   `GET /api/student/:studentId/fees` - Fee details

---

## 📂 Project Structure

```
Dr AITD Management system/
├── backend/
│   ├── controller/              # Business Logic
│   │   ├── adminController.js
│   │   ├── teacherController.js
│   │   ├── studentController.js
│   │   └── authController.js
│   ├── database/
│   │   └── db.js               # MongoDB Connection
│   ├── middleware/
│   │   ├── Auth.js             # JWT Verification
│   │   ├── upload.js           # File Upload Handler
│   │   ├── errorHandler.js     # Global Error Handler
│   │   └── validateId.js       # ID Validation
│   ├── models/                 # Mongoose Schemas
│   │   ├── Users.js            # Admin, Teacher, Student
│   │   ├── Academics.js        # Course, Subject, Timetable
│   │   ├── Activities.js       # Attendance, Marks, Assignments
│   │   ├── Operations.js       # Fee, Library, Leave
│   │   └── index.js            # Model Exports
│   ├── routes/
│   │   └── completeRoutes.js   # All API Routes
│   ├── uploads/                # File Storage
│   ├── .env                    # Environment Variables
│   ├── index.js                # Server Entry Point
│   ├── package.json
│   └── seed_auth_users.js      # Database Seeding Script
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstance.js    # Configured Axios
│   │   ├── app/
│   │   │   └── Store.js            # Redux Store
│   │   ├── components/
│   │   │   ├── layout/             # Sidebar, Navbar
│   │   │   ├── ui/                 # Reusable UI Components
│   │   │   ├── RequireAuth.jsx     # Route Protection
│   │   │   └── ErrorBoundary.jsx
│   │   ├── constants/
│   │   │   └── api.js              # API Base URL
│   │   ├── features/
│   │   │   └── UserSlice.js        # Redux User State
│   │   ├── hooks/
│   │   │   └── useAutoLogout.js    # Auto Logout Hook
│   │   ├── Pages/
│   │   │   ├── Admin/              # Admin Pages
│   │   │   ├── Teacher/            # Teacher Pages
│   │   │   ├── Student/            # Student Pages
│   │   │   └── Common/             # Login, Register
│   │   ├── services/
│   │   │   ├── adminService.js     # Admin API Calls
│   │   │   └── authService.js      # Auth API Calls
│   │   ├── Layout.jsx              # Main Layout
│   │   ├── main.jsx                # App Entry Point
│   │   └── index.css               # Global Styles
│   ├── .env.local                  # Frontend Environment
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
├── package.json                    # Root Package (Scripts)
└── README.md                       # This File
```

---

## 🔍 Troubleshooting

### Common Issues & Solutions

#### 1. "No courses available" in Registration
**Cause**: API endpoint mismatch or backend not running  
**Solution**:
```bash
# Ensure backend is running
cd backend
npm start

# Verify courses exist
node check_courses.js
```

#### 2. Login fails with 401 Unauthorized
**Cause**: Invalid credentials or database not seeded  
**Solution**:
```bash
cd backend
node seed_auth_users.js
```

#### 3. Sidebar not visible
**Cause**: Token not stored properly  
**Solution**: Clear browser cache and localStorage, then login again

#### 4. Port already in use
**Cause**: Previous instance still running  
**Solution**:
```bash
# Windows
netstat -ano | findstr :4000
taskkill /F /PID <process_id>

# Linux/Mac
lsof -ti:4000 | xargs kill -9
```

#### 5. CORS errors
**Cause**: Frontend and backend origins mismatch  
**Solution**: Verify `VITE_API_URL` in frontend `.env.local` matches backend URL

#### 6. MongoDB connection failed
**Cause**: MongoDB not running or wrong connection string  
**Solution**:
```bash
# Start MongoDB (Windows)
net start MongoDB

# Or use MongoDB Atlas cloud database
```

---

## 🚀 Deployment

### Render Deployment (Recommended)

#### Option 1: Blueprint Deployment
1. Push repository to GitHub
2. Log in to [Render](https://render.com)
3. Click **New +** → **Blueprint**
4. Select your repository
5. Configure environment variables:
   - `MONGO_URI`: MongoDB Atlas connection string
   - `JWT_SECRET`: Secure random string
   - `VITE_API_URL`: Your backend URL

#### Option 2: Manual Setup

**Backend (Web Service)**
*   **Root Directory**: `backend`
*   **Build Command**: `npm install`
*   **Start Command**: `node index.js`
*   **Environment Variables**: 
    - `MONGO_URI`
    - `JWT_SECRET`
    - `PORT` (auto-assigned by Render)

**Frontend (Static Site)**
*   **Root Directory**: `frontend`
*   **Build Command**: `npm install && npm run build`
*   **Publish Directory**: `dist`
*   **Environment Variables**: 
    - `VITE_API_URL` (Backend URL)

### Vercel Deployment (Frontend Only)
```bash
cd frontend
npm install -g vercel
vercel
```

### Heroku Deployment
```bash
# Backend
heroku create your-app-backend
git subtree push --prefix backend heroku main

# Frontend
heroku create your-app-frontend
git subtree push --prefix frontend heroku main
```

---

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

### Manual Testing Checklist
- [ ] Admin can login and access dashboard
- [ ] Admin can create/edit/delete students
- [ ] Admin can create/edit/delete teachers
- [ ] Admin can create courses and subjects
- [ ] Teacher can mark attendance
- [ ] Teacher can upload assignments
- [ ] Student can view marks and attendance
- [ ] Student can register with course selection
- [ ] Password reset flow works
- [ ] File uploads work correctly

---

## 🔐 Security Features

*   **JWT Authentication**: Secure token-based authentication with 30-day expiry
*   **Password Hashing**: BCrypt with salt rounds for secure password storage
*   **HttpOnly Cookies**: Prevents XSS attacks on authentication tokens
*   **CORS Protection**: Configured allowed origins
*   **Input Validation**: Mongoose schema validation
*   **Error Handling**: Global error handler prevents information leakage
*   **Role-Based Access Control**: Separate routes and permissions for Admin/Teacher/Student
*   **Auto Logout**: Configurable session timeout for inactive users

---

## 📊 Database Schema

### Users Collection
*   **Admin**: System administrators
*   **Teacher**: Faculty members
*   **Student**: Enrolled students

### Academics Collection
*   **Course**: Degree programs (B.Tech, M.Tech, etc.)
*   **Subject**: Individual subjects/courses
*   **Timetable**: Class schedules

### Activities Collection
*   **Attendance**: Daily attendance records
*   **Marks**: Exam and assessment marks
*   **Assignments**: Homework and projects
*   **Notices**: Announcements

### Operations Collection
*   **Fee**: Fee structure and payments
*   **Library**: Book inventory and transactions
*   **Leave**: Leave applications

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
*   Follow ESLint configuration
*   Use meaningful variable and function names
*   Add comments for complex logic
*   Write unit tests for new features
*   Update documentation for API changes

---

## 📝 Changelog

### Version 2.1.0 (2026-03-25)
*   ✅ Conducted a full repository audit and removed unused dead components/hooks to optimize the application footprint.
*   ✅ Validated and preserved all core MERN domain models and modules.
*   ✅ Prepared structural blueprint for enterprise-grade MERN architectures.

### Version 2.0.0 (2025-12-13)
*   ✅ Fixed course API endpoint mismatch
*   ✅ Enhanced CORS configuration
*   ✅ Added localStorage token fallback
*   ✅ Fixed sidebar visibility issues
*   ✅ Improved error handling and logging
*   ✅ Updated documentation

### Version 1.0.0 (2025-11-18)
*   Initial release
*   Complete MERN stack implementation
*   Role-based access control
*   File upload functionality
*   Responsive UI design

---

## 📞 Support

For issues and questions:
*   **Email**: support@draitd.edu
*   **Issues**: Create an issue on GitHub

---

## 📄 License

MIT License - Developed for **Dr AITD**

Copyright (c) 2025 Dr AITD Management System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

---

## 🙏 Acknowledgments

*   Built with ❤️ for educational institutions
*   Powered by the MERN stack
*   UI inspired by modern design principles
*   Special thanks to all contributors

---

**Made with 💙 by the Gulshan Kumar**
