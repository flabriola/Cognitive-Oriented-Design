# Cognitive-Oriented Design (COD) Website

Visit page: https://flabriola.github.io/Cognitive-Oriented-Design/

A minimalist, interactive website showcasing the Cognitive-Oriented Design paradigm.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
The website will open at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Built files are in the `dist/` folder.

### View Built Files
Simply open `dist/index.html` in your browser.

## 🎨 Features

- **Minimalist Design**: Inspired by WOVE website with futuristic vibes
- **Smooth Animations**: Fade-in, slide-in animations with CSS transitions
- **Responsive Layout**: Works on desktop and mobile devices
- **Interactive Navigation**: Rotating bezel navigation (desktop) / top navigation (mobile)
- **Content Sections**: All sections from DOCUMENTATION.md with proper formatting
- **Icon Classifications**: ELC and FLC classification displays with SVG icons
- **EDE Diagram**: Interactive diagram visualization

## 🏗️ Structure

- `src/components/` - React components
- `src/styles/` - Global CSS and component styles
- `src/data/` - Content data from documentation
- `src/types/` - TypeScript type definitions
- `public/` - SVG icons and assets
- `dist/` - Built production files

## 🎯 Content Sections

1. **Hero** - Main quote and introduction
2. **Overview** - COD paradigm explanation
3. **MIF** - Machine Involvement Framework
4. **Implementation** - Guidelines and philosophy
5. **EDE** - Event-Derived Execution
6. **Communication** - MCP standards
7. **Structure** - COD layers
8. **Dimensions** - Additional perspectives

## 🎨 Design Philosophy

- Light gray background (#f5f5f5)
- Dark text (#1a1a1a)
- Purple accent (#6366f1)
- Smooth transitions (0.3s ease-out)
- Thin lines and subtle animations
- Futuristic, minimalist aesthetic

## 📱 Responsive Design

- **Desktop**: Rotating bezel navigation on the left
- **Mobile**: Top navigation bar with horizontal layout
- **Breakpoints**: 768px and 480px for mobile optimization

## 🚀 Technologies

- **React 18** with TypeScript
- **Vite 4** for fast development and building
- **CSS Custom Properties** for maintainable styling
- **CSS Animations** for smooth transitions
- **Responsive Grid/Flexbox** layouts 
