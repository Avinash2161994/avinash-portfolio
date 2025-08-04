# Avinash Behara – Developer Portfolio

This is a full-stack personal portfolio project built with **React.js (frontend)** and **Node.js/Express (backend)**. It includes an interactive contact form with email functionality, a responsive layout, and clean styling — designed to showcase my experience, projects, and academic background in a recruiter-friendly format.

---

## 📁 Project Structure

avinash_portfolio/
│
├── backend/ # Node.js backend with contact email API
│ ├── routes/ # Express route for sending emails
│ ├── .env # Environment variables (email credentials)
│ └── server.js # Entry point
│
├── frontend/ # React.js frontend UI
│ ├── public/ # Static files & index.html
│ ├── src/
│ │ ├── App.js # Main component with sections
│ │ ├── App.css # Custom CSS styling
│ │ └── ...
│ └── package.json
│
└── README.md # This file

---

## 🚀 Features

- 📄 Downloadable Resume Button
- 🎯 Career Objective, Projects, Academic Background
- 💬 Contact Form with Email Notification (via Nodemailer)
- 🎨 Modern UI with smooth scroll and highlight effects
- 🌐 Responsive layout across desktop and mobile

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Avinash2161994/avinash-portfolio.git
cd avinash_portfolio

Backend Setup (/backend)
cd backend
npm install

Add a .env file with:
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password

Then run the server:
npm start

Frontend Setup (/frontend)

cd ../frontend
npm install
npm start


 Contact Form (Nodemailer Setup)
The contact form submits data to /api/contact.

Nodemailer uses Gmail's SMTP to send emails to your inbox.

Use App Password (not your real password) if using Gmail. How to create app password(https://support.google.com/accounts/answer/185833)
