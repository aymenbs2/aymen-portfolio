# Aymen Ben Salah - Portfolio


## 📁 Project Structure

\`\`\`
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   └── main.js             # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
\`\`\`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Lucide Icons**: Beautiful, consistent icons
- **GitHub Actions**: Automated deployment

## 📱 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Personal background and experience overview
3. **Skills**: Technical skills and technologies
4. **Experience**: Professional work history
5. **Projects**: Featured projects and applications
6. **Contact**: Contact form and information
7. **Certifications**: Education and certifications

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/aymenbs2/aymen-portfolio.git
   cd aymen-portfolio
   \`\`\`
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Deployment
The portfolio automatically deploys to GitHub Pages when you push to the `main` branch.

**Live Site**: [https://aymenbs2.github.io/aymen-portfolio](https://aymenbs2.github.io/aymen-portfolio)

## 🔧 Setup Instructions

### 1. Repository Setup
1. Create a new repository on GitHub named `aymen-portfolio`
2. Push your code to the `main` branch

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

### 3. Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in repository settings

## 📈 Deployment Status

The site automatically deploys when you:
- Push changes to the `main` branch
- Manually trigger the workflow from the Actions tab

Check the deployment status in the [Actions tab](https://github.com/aymenbs2/aymen-portfolio/actions).

## 🎨 Customization

### Colors and Styling
Edit the CSS custom properties in `css/styles.css`:
\`\`\`css
:root {
  --primary: #3b82f6;        /* Primary color */
  --primary-dark: #2563eb;   /* Primary hover color */
  --background: #ffffff;     /* Background color */
  --foreground: #0f172a;     /* Text color */
  /* ... more variables */
}
\`\`\`

### Content
Update the content directly in `index.html` - no build process needed!

### Adding Images
1. Create an `assets/images/` folder
2. Add your images
3. Update the image paths in `index.html`

## 📞 Contact
- **LinkedIn**: [Aymen Ben Salah](https://www.linkedin.com/in/aymen-ben-salah-b60b5a153/)
- **GitHub**: [aymenbs2](https://github.com/aymenbs2)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
\`\`\`

```plaintext file="CNAME"
aymen-portfolio.dev
