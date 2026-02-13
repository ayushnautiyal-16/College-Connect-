# 🎓 College Connect

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20TailwindCSS-deepskyblue?style=for-the-badge)

**College Connect** is a premium, modern web application designed to simplify the college search and admission process. Built with React and tailored with high-end aesthetics, it serves as a comprehensive bridge between students and their future educational institutions.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [UI/UX Highlights](#-uiux-highlights)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Notes](#-notes)

---

## 🚀 Project Overview

College Connect helps students navigate the complex landscape of higher education. The platform allows users to:

- **Discover** top-rated colleges and universities.
- **Explore** detailed campus information, courses, and facilities.
- **Stay Informed** through a curated blog section covering educational trends and tips.
- **Connect** directly with institutions for admissions and inquiries.

The project emphasizes a **user-first approach**, combining functional depth with a visually stunning interface.

---

## ✨ Key Features

### 🔍 Smart College Search

- **Comprehensive Listings:** Browse a wide array of campuses with ease.
- **Detailed Profiles:** View in-depth information about each college, including location, ranking, and facilities.
- **Advanced Filtering:** (Planned) Sort colleges by various criteria to find the best match.

### 📝 Dynamic Blog System

- **Engaging Content:** Read articles on specialized topics like "MBA in Delhi," "Top Engineering Colleges," etc.
- **Modern Layout:** A clean, card-based blog feed with hover effects and smooth transitions.
- **Dedicated Post Views:** Immersive reading experience for individual articles.

### 🎯 Seamless Application Process

- **Direct Apply:** Streamlined "Apply Now" forms to facilitate quick expressions of interest.
- **Admissions Support:** Integrated contact forms and "Get in Touch" popups for immediate assistance.

### 📱 Fully Responsive

- Optimized for desktops, tablets, and mobile devices, ensuring a consistent experience everywhere.

---

## 🎨 UI/UX Highlights

We have prioritized a **premium look and feel**:

- **Modern Typography:** Clean, readable fonts for professional appeal.
- **Glassmorphism:** Subtle glass effects on cards and overlays for depth.
- **Micro-interactions:** Smooth hover states, button animations, and transition effects.
- **Data Visualization:** Count-up animations for statistics (e.g., "Students Placed," "Courses Offered").
- **Hero Slider:** Engaging visuals on the home page with "Admissions Open" highlights.

---

## 🛠 Tech Stack

This project leverages modern web technologies for performance and maintainability:

| Category               | Technology                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) **React v18**                           |
| **Styling**            | ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) **Tailwind CSS v3** |
| **Framework**          | ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) **Next.js v14 (App Router)**      |
| **Build Tool**         | Next.js (SWC Compiler)                                                                                                  |
| **State Management**   | React Context API & Hooks                                                                                               |
| **Image CDN**          | AWS CloudFront + S3                                                                                                     |

---

## ⚡ Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/campus-finder.git
    cd campus-finder
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Setup**
    - Create a `.env.local` file in the root directory (if not present).
    - Add `NEXT_PUBLIC_CLOUDFRONT_URL=https://d1om6fetcnl3e0.cloudfront.net`.

4.  **Run the Development Server**

    ```bash
    npm run dev
    # or
    npm start
    ```

    The app will open at `http://localhost:3000`.

5.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

A high-level overview of the source code:

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (Cards, Navbar, Footer)
├── context/         # Global state management
├── data/            # Static data files (mock data for blogs/colleges)
├── layouts/         # Page layout wrappers (MainLayout, etc.)
├── pages/           # Application views
│   ├── Home/        # Landing page
│   ├── Campuses/    # List of colleges
│   ├── CollegeDetails/ # Single college view
│   ├── Blog/        # Blog feed
│   ├── Contact/     # Contact page
│   └── Apply/       # Application form
├── utils/           # Helper functions
├── App.js           # Main app component & routing
└── index.css        # Global styles & Tailwind directives
```

---

## ⚠️ Notes

- **Disclaimer:** This is a portfolio/academic project. All college data and blog content may be fictional or used for demonstration purposes only.
- **Images:** Some images are sourced from external URLs or placeholders. Ensure you have the rights to use them in a production environment.

---

### 👨‍💻 Author

Developed with ❤️ by **Ayush Nautiyal**

---
