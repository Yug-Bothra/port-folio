# 🚀 Personal Portfolio Website

> A modern, responsive portfolio website showcasing my professional journey, technical expertise, and creative projects.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://port-folio-v35m.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Yug-Bothra/port-folio)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🌟 Overview

This portfolio website serves as a comprehensive showcase of my professional work, technical skills, and creative projects. Built with modern web technologies, it offers an engaging and responsive user experience across all devices.

**Key Highlights:**
- Clean, minimalist design with smooth animations
- Fully responsive layout optimized for all screen sizes
- Fast loading times and optimized performance
- Interactive project demonstrations
- Professional presentation of skills and experience

## ✨ Features

### 🎨 **User Experience**
- **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging micro-interactions and page transitions
- **Dark/Light Theme**: Toggle between theme modes for better accessibility
- **Interactive Elements**: Hover effects and dynamic content loading

### 🛠 **Technical Features**
- **Component-Based Architecture**: Modular React components for maintainability
- **Performance Optimized**: Fast build times with Vite and lazy loading
- **SEO Friendly**: Optimized meta tags and semantic HTML structure
- **Cross-Browser Compatible**: Works across all modern browsers

### 📱 **Sections**
- **Hero Section**: Professional introduction with call-to-action
- **About**: Personal background and professional journey
- **Experience**: Work history and achievements
- **Projects**: Detailed showcase of technical projects
- **Skills**: Technical expertise and tools
- **Resume**: Downloadable PDF resume
- **Contact**: Multiple ways to connect

## 🛠 Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Development Tools**
- **Build Tool**: Vite for fast development and building
- **Package Manager**: npm/yarn for dependency management
- **Code Quality**: ESLint for code linting

### **Deployment & Hosting**
- **Platform**: Vercel for seamless deployment
- **CI/CD**: Automatic deployment on git push
- **Domain**: Custom domain with SSL certificate

## 🚀 Getting Started

Follow these steps to run the project locally:

### **Prerequisites**
- Node.js (version 16.0 or higher)
- npm or yarn package manager
- Git for version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yug-Bothra/port-folio.git
   cd port-folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### **Available Scripts**

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
port-folio/
├── public/                 # Static assets
│   ├── textures/          # 3D textures and images
│   ├── gaming-desktop.glb # 3D model file
│   ├── vite.svg          # Vite logo
│   └── Yug_Bothra_Resume.pdf # Resume file
├── src/                   # Source code
│   ├── assets/           # Asset files
│   ├── components/       # React components
│   │   ├── About.jsx     # About section component
│   │   ├── App.jsx       # Main app component
│   │   ├── Experience.jsx # Experience section
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Resume.jsx    # Resume section
│   │   └── ThreeModel.jsx # 3D model component
│   ├── styles/           # CSS stylesheets
│   │   ├── App.css       # Main styles
│   │   └── index.css     # Global styles
│   └── main.jsx          # Application entry point
├── configuration files   # Vite, ESLint, PostCSS configs
└── README.md            # Project documentation
```

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://github.com/user-attachments/assets/ca7d8810-42a1-488d-b8d8-64eeaa350db1)
*Clean, professional layout optimized for desktop viewing*

### Mobile View
![Mobile Screenshot](https://github.com/user-attachments/assets/56f3cc93-e3e8-4bfb-9cac-f339285ff7f0)
*Fully responsive design that works perfectly on mobile devices*

## 🚀 Deployment

The website is automatically deployed to Vercel with the following workflow:

### **Automatic Deployment**
1. Push changes to the `main` branch
2. Vercel automatically detects changes
3. Builds and deploys the updated version
4. Live site is updated within minutes

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to Vercel (if Vercel CLI is installed)
vercel --prod
```

### **Environment Setup**
No environment variables are required for this project as it's a static portfolio website.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Yug-Bothra/port-folio/issues).

### **How to Contribute**
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Yug Bothra**
- **Portfolio**: [https://port-folio-v35m.vercel.app](https://port-folio-v35m.vercel.app)
- **GitHub**: [@Yug-Bothra](https://github.com/Yug-Bothra)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/yug-bothra)
- **Email**: [your.email@example.com](mailto:your.email@example.com)

---

⭐ **If you found this project helpful, please consider giving it a star!**

*Built with ❤️ using React and Vite*
