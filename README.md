# 🚀 Data Science Portfolio Website

A beautiful, modern portfolio website to showcase your data science projects from GitHub. Features a responsive design with smooth animations and an elegant dark theme.

## ✨ Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Dynamic Project Loading**: Projects loaded from JSON for easy management
- **Modern UI**: Deep ocean theme with smooth animations
- **SEO Friendly**: Semantic HTML structure
- **Easy Customization**: Simple JSON-based content management
- **GitHub Pages Ready**: Static site, no build step required

## 📁 Project Structure

```
portfolio/
├── index.html              # Homepage
├── project.html            # Project detail template
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── main.js             # Homepage JavaScript
│   └── project.js          # Project page JavaScript
├── data/
│   └── projects.json       # Your projects data
├── assets/
│   ├── profile.jpg         # Your profile photo
│   ├── resume.pdf          # Your resume
│   └── projects/           # Project images
└── README.md
```

## 🚦 Quick Start Guide

### Step 1: Personalize Your Information

1. **Open `index.html`** and update:
   - Your name (replace "Your Name")
   - Your tagline/title
   - Your introduction paragraph
   - Social media links (GitHub, LinkedIn)
   - Location

2. **Add your profile photo**:
   - Save your photo as `assets/profile.jpg`
   - Recommended size: 400x400 pixels (square)

3. **Add your resume**:
   - Save your resume as `assets/resume.pdf`

### Step 2: Add Your Projects

1. **Open `data/projects.json`**

2. **Edit project entries**. Each project has:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "description": "Brief description shown on homepage",
  "image": "assets/projects/your-image.jpg",
  "readTime": "5 min read",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "sections": [
    {
      "id": "section-id",
      "title": "Section Title",
      "content": "<p>HTML content here</p>",
      "subsections": [...]
    }
  ]
}
```

3. **Add project images**:
   - Save images to `assets/projects/`
   - Recommended size: 800x400 pixels
   - Use descriptive filenames

### Step 3: Reorder Projects

Simply change the order of projects in `data/projects.json`. The first project in the array appears first on the homepage.

### Step 4: Test Locally

You need a local server because the site loads JSON files (which requires HTTP).

**Option A: Using Python (recommended)**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Option B: Using Node.js**
```bash
# Install serve globally
npm install -g serve

# Run server
serve .

# Then open the provided URL
```

**Option C: Using VS Code**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `your-username.github.io` (for user site) or any name (for project site)
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click **Create repository**

### Step 2: Push Your Code

Open terminal in your portfolio folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your portfolio is now live at:
- User site: `https://your-username.github.io`
- Project site: `https://your-username.github.io/repo-name`

## 🎨 Customization

### Changing Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --bg-primary: #0a1628;      /* Main background */
    --accent-primary: #00d4aa;   /* Primary accent (teal) */
    --accent-secondary: #ff6b6b; /* Secondary accent (coral) */
    --text-primary: #e8f1f8;     /* Main text color */
}
```

### Changing Fonts

The site uses Google Fonts. To change fonts:

1. Go to [fonts.google.com](https://fonts.google.com)
2. Select fonts and get the embed code
3. Replace the `<link>` tags in `index.html` and `project.html`
4. Update CSS variables:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Adding More Sections to Projects

Edit the project in `data/projects.json`:

```json
"sections": [
    {
        "id": "new-section",
        "title": "New Section Title",
        "content": "<p>Your HTML content</p>"
    }
]
```

## 📝 Content Tips

### Writing Project Descriptions

- **Homepage description**: Keep it to 1-2 sentences (max 150 characters)
- **Detailed description**: Use the Context-Action-Results format
- **Tags**: Use 3-5 relevant technology/method tags

### Estimating Read Time

Calculate read time based on word count:
- Average reading speed: 200-250 words per minute
- 500 words ≈ 2-3 min read
- 1000 words ≈ 4-5 min read
- 2000 words ≈ 8-10 min read

### Project Images

- Use screenshots, diagrams, or visualizations
- Maintain consistent aspect ratio (2:1 recommended)
- Optimize images for web (compress to under 500KB)

## 🔧 Troubleshooting

### Projects not loading?

- Make sure you're using a local server (not opening HTML directly)
- Check browser console for errors (F12 → Console)
- Verify `data/projects.json` has valid JSON (use [jsonlint.com](https://jsonlint.com))

### Images not showing?

- Check file paths in `data/projects.json`
- Verify image files exist in `assets/projects/`
- File names are case-sensitive

### Styles not updating?

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

## 📄 License

MIT License - feel free to use and modify for your own portfolio!

---

Built with ❤️ for data scientists and ML engineers

