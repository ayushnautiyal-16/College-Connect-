# 🎓 Campus Finder - College Discovery Platform

A modern, responsive React web application designed to help students discover and explore colleges and campuses across India. Built with a professional architecture and scalable folder structure, Campus Finder provides an intuitive interface for browsing college information, viewing campus galleries, and connecting with institutions.

## 📝 Description

Campus Finder is a comprehensive college discovery platform that simplifies the process of finding the right educational institution. The application features:

- **Interactive College Cards**: Browse through colleges with detailed information cards featuring images, ratings, and key details
- **Advanced Search & Filtering**: Find colleges based on location, courses, fees, and other parameters
- **Detailed College Pages**: In-depth information about each college including facilities, courses, admission process, and contact details
- **Responsive Photo Galleries**: Explore campus life through beautifully organized photo galleries
- **Smooth Animations**: Enhanced user experience with scroll animations and transitions
- **Contact Forms**: Easy "Get in Touch" functionality to connect with colleges directly
- **WhatsApp Integration**: Quick connect option via WhatsApp for instant communication
- **Statistics Counter**: Real-time display of platform statistics and achievements
- **Testimonials Section**: Read reviews and experiences from current students
- **Blog Section**: Stay updated with latest educational news and articles

## ✨ Key Features

- ✅ **React Router** for seamless navigation
- ✅ **Component-based architecture** for maintainability
- ✅ **Responsive design** - works perfectly on mobile, tablet, and desktop
- ✅ **Tailwind CSS** for modern styling
- ✅ **Cloudinary integration** for optimized image delivery
- ✅ **Custom hooks** for scroll animations and reusable logic
- ✅ **Modular folder structure** for scalability
- ✅ **Hero slider** with engaging visuals
- ✅ **Logo ticker** for partner colleges
- ✅ **Animated section headers** for better UX
- ✅ **Professional footer** with social links

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/ayushnautiyal-16/College-Connect-.git
cd campusFinder
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory and add your Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Refer to `CLOUDINARY_SETUP.md` for detailed Cloudinary setup instructions.

4. **Start development server**

```bash
npm start
# or
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`

## 🛠️ Development

### Start Development Server

```bash
npm start
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
campusFinder/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header/             # Navigation header
│   │   ├── Footer/             # Footer with links
│   │   ├── HeroSlider/         # Homepage hero carousel
│   │   ├── CollegeCard/        # College display card
│   │   ├── FeatureCard/        # Feature highlights
│   │   ├── TestimonialCard/    # Student testimonials
│   │   ├── StepCard/           # Process steps
│   │   ├── PhotoGallery/       # Image gallery component
│   │   ├── LogoTicker/         # Partner logos carousel
│   │   ├── StatsCounter/       # Animated statistics
│   │   ├── GetInTouchPopup/    # Contact form popup
│   │   ├── WhatsAppButton/     # WhatsApp integration
│   │   ├── AnimatedSectionHeader/  # Animated headers
│   │   └── SimpleAnimatedHeader/   # Simple headers
│   ├── pages/                  # Page components
│   │   ├── Home/               # Landing page
│   │   ├── About/              # About us page
│   │   ├── Campuses/           # College listing
│   │   ├── CollegeDetails/     # Individual college page
│   │   ├── Blog/               # Blog listing
│   │   └── Contact/            # Contact page
│   ├── layouts/                # Layout wrappers
│   │   └── MainLayout/         # Main site layout
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollAnimation.js  # Scroll animation hook
│   ├── utils/                  # Utility functions
│   │   ├── constants.js        # App constants
│   │   ├── helpers.js          # Helper functions
│   │   ├── collegesData.js     # College data
│   │   └── cloudinary.js       # Cloudinary config
│   ├── services/               # API services
│   ├── context/                # React Context providers
│   ├── assets/                 # Static assets
│   ├── App.js                  # Main App with routing
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── webpack.config.js           # Webpack configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── .babelrc                    # Babel configuration
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🌐 Available Pages

- **Home** (`/`) - Landing page with hero section, features, statistics, and testimonials
- **About** (`/about`) - About the platform with mission and vision
- **Campuses** (`/campuses`) - Comprehensive college listing with search and filters
- **College Details** (`/college/:id`) - Detailed information about specific colleges
- **Blog** (`/blog`) - Educational articles and news
- **Contact** (`/contact`) - Contact form and information

## 🎨 Tech Stack

- **React 18.2** - UI library
- **React Router DOM 6.20** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Webpack 5** - Module bundler
- **Babel 7** - JavaScript compiler
- **Cloudinary** - Image optimization and delivery
- **PostCSS** - CSS processing

## 🔧 Adding New Features

### Create a New Page

1. Create a new folder in `src/pages/YourPage/`
2. Create `YourPage.js` component
3. Add route in `src/App.js`:

```javascript
import YourPage from "./pages/YourPage/YourPage";
// Add to routes
<Route path="/your-page" element={<YourPage />} />;
```

### Create a New Component

1. Create a new folder in `src/components/YourComponent/`
2. Create `YourComponent.js` and optional CSS file
3. Import and use in your pages:

```javascript
import YourComponent from "../../components/YourComponent/YourComponent";
```

### Add Custom Hooks

Place custom hooks in `src/hooks/` folder:

```javascript
// src/hooks/useYourHook.js
export const useYourHook = () => {
  // Hook logic
};
```

### Add Utility Functions

Place utility functions in `src/utils/` folder:

```javascript
// src/utils/yourUtil.js
export const yourFunction = () => {
  // Utility logic
};
```

### Add API Services

Place API service functions in `src/services/` folder:

```javascript
// src/services/yourService.js
export const fetchData = async () => {
  // API call logic
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Ayush Nautiyal**

- GitHub: [@ayushnautiyal-16](https://github.com/ayushnautiyal-16)

## 🙏 Acknowledgments

- Thanks to all college administrators who provided data
- React community for excellent documentation
- Tailwind CSS for the amazing utility framework
- Cloudinary for image optimization solutions

## 📞 Support

For support, email or raise an issue in the GitHub repository.

---

Made with ❤️ for students seeking their perfect college
