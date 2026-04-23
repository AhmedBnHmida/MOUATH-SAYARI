# Medenine Municipality Website

This is a bilingual (Arabic/French) website for the Municipality of Medenine.

## Architecture

This is a static website built with vanilla HTML, CSS, and JavaScript. The architecture follows a modular component-based approach:

- **Frontend Stack**: HTML5, CSS3, JavaScript (ES6+)
- **No Frameworks**: Pure vanilla JavaScript for simplicity and performance
- **Component Loading**: HTML components are loaded dynamically using `fetch()` API
- **Language Support**: Bilingual with RTL/LTR direction switching
- **Responsive Design**: Mobile-first approach with CSS media queries
- **SEO Ready**: Includes meta tags, sitemap, robots.txt, and structured data

### Project Structure
```
medenine-website/
├── index.html              # Main entry point
├── script.js               # Language switching and interactions
├── styles.css              # Main stylesheet
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # Site structure for search engines
├── components/             # Reusable HTML components
│   ├── header.html
│   ├── footer.html
│   └── landing.html
├── views/                  # Individual page views
│   ├── presentation.html
│   ├── governance.html
│   └── contact.html
└── images/                 # Static assets
```

## Features
- Bilingual support (Arabic RTL, French LTR)
- Responsive design
- Modular components loaded via JavaScript
- Language persistence in localStorage
- SEO optimized with meta tags, sitemap, and structured data

## 🎨 Design & Styling

The website now features a professional **Yellow (#FFC107) and Black (#1a1a1a)** color scheme:

- **Header**: Black gradient background with yellow accents
- **Logo**: Prominently displayed in the header with dynamic styling
- **Sections**: Yellow left border with hover effects
- **Footer**: Professional black gradient with yellow highlights
- **Buttons**: Yellow primary color with smooth transitions
- **Overall**: Modern, responsive, and accessibility-focused design

### Logo Setup

Please add your logo image to the `images/` folder as:
- **Filename**: `logo.png`
- **Recommended Size**: 60x60 pixels or larger
- **Format**: PNG with transparent background recommended
- **Location in header**: Left side of navigation bar

The logo will be automatically displayed in the header and styled to match the yellow and black theme.

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)

## How to Run

### Option 1: Direct Browser Opening
1. Open `index.html` directly in your web browser
2. Navigate between pages using browser URL or links

### Option 2: Local Development Server (Recommended)
1. Ensure Python 3.x is installed (`python --version`)
2. Run the local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and go to: `http://localhost:8000`
4. The server will serve all files and handle routing properly

### Language Switching
- Use the language buttons in the header to switch between Arabic and French
- Language preference is saved in localStorage

## SEO
- `robots.txt`: Allows all crawlers and references the sitemap
- `sitemap.xml`: Lists all pages for search engine indexing
- Meta tags: Description, keywords, Open Graph for social sharing
- Structured data: JSON-LD for GovernmentOrganization schema

## Usage
Open `index.html` in a web browser. Use the language buttons in the header to switch between Arabic and French.

## Adding Content
- Edit the HTML files in `components/` and `views/` to add more content
- Add images to the `images/` folder
- Update translations as needed