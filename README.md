# Campus Finder React App

A professional React frontend application built from scratch with a scalable folder structure. Ready for building a complete website.

## Features

- ✅ React Router for navigation
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Modular folder structure
- ✅ Reusable layouts and components
- ✅ Ready for further development

## Installation

Install all dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```
or
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
campusFinder/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/              # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Campuses/
│   │   └── Contact/
│   ├── layouts/            # Layout components
│   │   └── MainLayout/
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── services/           # API services
│   ├── context/            # React Context providers
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── App.js              # Main App component with routing
│   └── index.js            # Entry point
├── webpack.config.js
├── .babelrc
├── package.json
└── README.md
```

## Available Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - About page
- **Campuses** (`/campuses`) - Campus listing page
- **Contact** (`/contact`) - Contact form page

## Adding New Features

### Create a New Page

1. Create a new folder in `src/pages/YourPage/`
2. Create `YourPage.js` and `YourPage.css`
3. Add route in `src/App.js`

### Create a New Component

1. Create a new folder in `src/components/YourComponent/`
2. Create `YourComponent.js` and `YourComponent.css`
3. Import and use in your pages or components

### Add Custom Hooks

Place custom hooks in `src/hooks/` folder

### Add Utility Functions

Place utility functions in `src/utils/` folder

### Add API Services

Place API service functions in `src/services/` folder

