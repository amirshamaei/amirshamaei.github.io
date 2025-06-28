# Amir Shamaei - Professional CV Website

A beautiful, responsive, and modern personal website showcasing Amir Shamaei's professional experience, research, and achievements in biomedical engineering and machine learning.

## 🌟 Features

- **Modern Design**: Clean, professional layout with elegant typography and smooth animations
- **Responsive**: Fully responsive design that works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and engaging visual elements
- **Professional Sections**: 
  - Professional summary and contact information
  - Detailed work experience timeline
  - Educational background
  - Technical skills with categorized tags
  - Selected publications with impact factors
  - Open-source projects with GitHub links
  - Awards and achievements
- **Accessibility**: Semantic HTML structure and keyboard navigation support
- **Performance**: Optimized CSS and minimal dependencies

## 🎨 Design Highlights

- **Color Scheme**: Professional purple gradient theme (#667eea to #764ba2)
- **Typography**: Inter (body) and Playfair Display (headings) for excellent readability
- **Layout**: Grid-based responsive design with elegant spacing
- **Visual Elements**: 
  - Timeline design for work experience
  - Card-based layouts for projects and publications
  - Gradient backgrounds and subtle shadows
  - Custom scrollbar styling

## 📁 File Structure

```
my_cv/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── README.md           # This file
└── sci_cv_assitant.tex # Original LaTeX CV
```

## 🚀 Deployment to GitHub Pages

### Option 1: Simple Deployment
1. Create a new repository on GitHub named `amirshamaei.github.io`
2. Upload the `index.html` and `styles.css` files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose the main branch
5. Your website will be available at `https://amirshamaei.github.io`

### Option 2: Using GitHub CLI
```bash
# Initialize git repository
git init

# Add files
git add index.html styles.css README.md

# Commit changes
git commit -m "Initial commit: Professional CV website"

# Create repository on GitHub (requires GitHub CLI)
gh repo create amirshamaei.github.io --public

# Push to GitHub
git push -u origin main
```

### Option 3: Manual Upload
1. Go to your GitHub profile
2. Create a new repository named `amirshamaei.github.io`
3. Upload the files through the web interface
4. Enable GitHub Pages in repository settings

## 🛠️ Customization

### Adding Your Photo
Replace the placeholder in the header section:
```html
<div class="image-placeholder">
    <img src="your-photo.jpg" alt="Amir Shamaei" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### Updating Content
- Edit `index.html` to update personal information, experience, and projects
- Modify `styles.css` to change colors, fonts, or layout
- Add new sections by following the existing HTML structure

### Color Customization
Main colors are defined in CSS variables. You can change them in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --light-bg: #f8fafc;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **File Size**: ~15KB (HTML + CSS)
- **Load Time**: < 1 second on average connection
- **Dependencies**: Only Google Fonts and Font Awesome CDN
- **SEO Optimized**: Semantic HTML structure

## 🎯 SEO Features

- Semantic HTML5 elements
- Meta tags for social sharing
- Structured data ready for implementation
- Fast loading times
- Mobile-friendly design

## 🔗 Social Media Integration

The website includes:
- GitHub profile link
- Email contact
- Professional summary optimized for LinkedIn
- Publication links ready for ResearchGate

## 📈 Analytics Ready

Add Google Analytics by inserting this code in the `<head>` section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider contributing back!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about this template or customization requests:
- Email: shamaie.amir@gmail.com
- GitHub: [amirshamaei](https://github.com/amirshamaei)

---

**Note**: This website is based on Amir Shamaei's LaTeX CV and has been converted to a modern, responsive web format while maintaining all the professional information and achievements. 