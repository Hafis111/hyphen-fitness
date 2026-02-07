# Hyphen Fitness - Static Website

A modern React-based static website for Hyphen Fitness, showcasing fitness programs and nutrition plans.

## Features

- 🏠 **Home/Profile Page**: Welcome section with profile overview and feature highlights
- 💪 **Fitness Section**: Display of fitness programs with image gallery
- 🥗 **Nutrition Section**: Meal plans and nutrition tips
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradients and smooth animations

## Project Structure

```
hyphen fitness/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Fitness.js
│   │   ├── Fitness.css
│   │   ├── Nutrition.js
│   │   └── Nutrition.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── fitness/          # Fitness program images
├── nutrion/          # Nutrition/meal plan images
├── package.json
└── README.md
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Move Images to Public Folder

The images need to be accessible from the public folder. Run these commands:

```bash
# Create directories in public folder
mkdir -p public/fitness
mkdir -p public/nutrion

# Copy images to public folder
cp -r fitness/* public/fitness/
cp -r nutrion/* public/nutrion/
```

### 3. Start Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized static files ready for deployment.

## Deployment

You can deploy the static website to various platforms:

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel

1. Import your project
2. Build command: `npm run build`
3. Output directory: `build`

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to package.json:

```json
"homepage": "https://yourusername.github.io/hyphen-fitness",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

## Navigation

- **Home**: Profile overview and welcome section
- **Fitness**: Browse fitness programs
- **Nutrition**: Explore nutrition plans and tips

## Technologies Used

- React 18
- React Router DOM
- CSS3 with modern features
- Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved
