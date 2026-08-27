# Akbar's Academy IT Institute - Professional Website

> A modern, responsive landing page for Akbar's Academy IT Institute built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-teal?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🎓 About Akbar's Academy

**Celebrating 25 Years of Teaching Excellence**

Akbar's Academy IT Institute is a premier training center offering professional IT courses with:
- ✨ 25+ years of teaching excellence
- 👨‍🏫 Industry expert instructors
- 💼 100% job placement assistance
- 🎯 Practical, hands-on training
- 📍 Located in Mumbai, India

---

## 📚 Professional Courses Offered

1. **Full Stack Developer** - Web development with React, Node.js, and databases
2. **Cloud Computing** - AWS, Azure, DevOps, and cloud architecture
3. **MSCIT** - Microsoft Office suite certification (Word, Excel, PowerPoint, Outlook)
4. **IT Infra Pro** - Network administration, server management, and IT security
5. **Digital Business Growth** - Social media marketing, funnel building, performance marketing
6. **AI Mastery** (Flagship) - ChatGPT, Claude, Midjourney, automation tools, and AI coding

---

## 🚀 Features

### User Experience
- ✅ **Mobile-First Responsive Design** - Optimized for all devices
- ✅ **Modern UI/UX** - Clean, professional interface with smooth animations
- ✅ **Fast Loading** - Optimized for performance (Lighthouse 90+)
- ✅ **Accessibility** - WCAG AA compliant with proper semantic HTML
- ✅ **SEO Ready** - Meta tags, structured data, sitemaps

### Functionality
- 📋 **Course Listing** - Display 6 professional courses with filtering
- 🎯 **Course Details** - Comprehensive course information and outcomes
- 📝 **Enrollment Form** - Lead capture with course selection
- 💬 **WhatsApp Integration** - Direct messaging for instant support
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🗺️ **Location Embed** - Google Maps integration
- 💬 **Testimonials** - Student success stories

### Technical
- ⚛️ **React 18** - Modern component-based architecture
- ⚡ **Vite** - Lightning-fast build tool
- 🎨 **Tailwind CSS** - Utility-first styling
- 🎯 **Lucide Icons** - Beautiful, lightweight icons
- 📦 **Component Isolation** - Reusable, well-organized components

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI framework | 18.2.0 |
| **Vite** | Build tool | 5.0.8 |
| **Tailwind CSS** | Styling | 3.3.5 |
| **Lucide React** | Icons | 0.263.1 |
| **PostCSS** | CSS processing | 8.4.31 |

---

## 📦 Installation & Setup

### Quick Start (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/yourusername/akbars-academy.git
cd akbars-academy

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local

# 4. Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Output files in 'dist' directory ready for deployment
```

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md).

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation and header
│   ├── Hero.jsx                # Hero section with CTAs
│   ├── AIMasterySection.jsx    # AI Mastery flagship course
│   ├── CoursesGrid.jsx         # 5 professional courses
│   ├── TestimonialsSection.jsx # Student testimonials
│   ├── AdmissionModal.jsx      # Enrollment form modal
│   ├── AkbarsLogo.jsx          # Brand logo component
│   └── Footer.jsx              # Footer with contact info
├── coursesData.js              # Course data & institute info
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

---

## 🎨 Customization Guide

### Change Brand Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      navy: {
        600: '#0F172A', // Change primary color
      },
      gold: {
        500: '#f59e0b', // Change accent color
      },
    },
  }
}
```

### Update Course Data

Edit `coursesData.js`:

```javascript
export const courses = [
  {
    id: 1,
    title: "Your Course Name",
    description: "Your course description",
    skills: [
      { name: "Skill Name", icon: "Code" },
      // ... more skills
    ],
    // ... other properties
  }
];
```

### Modify Content & Copy

Most content is stored in `coursesData.js`:
- Course titles and descriptions
- Testimonials
- FAQs
- Institute information
- Contact details

### Add/Remove Sections

Each major section is a separate component. To add/remove sections, edit `App.jsx`:

```jsx
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AIMasterySection />
      <CoursesGrid />
      {/* Add your component here */}
      <Footer />
    </div>
  );
}
```

---

## 🌐 Integration Guide

### Email Service (SendGrid)

```bash
npm install @sendgrid/mail
```

Update `.env.local`:
```
VITE_SENDGRID_API_KEY=your_key_here
```

### Payment Gateway (Stripe)

```bash
npm install @stripe/react-stripe-js @stripe/js
```

Update `.env.local`:
```
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key
```

### Analytics (Google Analytics)

Update `.env.local`:
```
VITE_GA_MEASUREMENT_ID=G_XXXXXXXXXX
```

### CRM/Email Marketing

- **HubSpot**: Use HubSpot Forms embed
- **Mailchimp**: Use Mailchimp form embed
- **ActiveCampaign**: Use form API

---

## 📊 Performance Metrics

### Target Lighthouse Scores
- 🟢 Performance: 90+
- 🟢 Accessibility: 90+
- 🟢 Best Practices: 90+
- 🟢 SEO: 90+

### Optimizations
- Code splitting & lazy loading
- Image optimization (use next/image alternative)
- CSS & JS minification
- Efficient re-renders with React
- CSS in JS (Tailwind)

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket/
```

### Traditional Hosting
Upload `dist/` folder contents to your web server.

For detailed deployment guide, see [SETUP_GUIDE.md](./SETUP_GUIDE.md#deployment-options).

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full support |
| Firefox | Latest | ✅ Full support |
| Safari | Latest | ✅ Full support |
| Edge | Latest | ✅ Full support |
| IE 11 | - | ❌ Not supported |

---

## 🔐 Security Features

- ✅ XSS Protection (React escaping)
- ✅ HTTPS only in production
- ✅ Environment variables for secrets
- ✅ Input validation
- ✅ CORS configured
- ✅ No hardcoded API keys

---

## 📞 Support & Contact

- **Phone**: +91 9769073820
- **WhatsApp**: https://wa.me/919769073820
- **Email**: info@akbarsacademy.com
- **Address**: G/A-4/6, Cheeta Camp, Mumbai 400031

---

## 📝 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Type check (if using TypeScript)
npm run type-check
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Credits

Built with ❤️ for Akbar's Academy IT Institute by professional developers.

**Design System**: Custom design inspired by modern SaaS websites
**Icons**: Lucide React
**Fonts**: Google Fonts (Inter, Plus Jakarta Sans)
**Images**: Placeholder images ready for real assets

---

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Landing page with 6 courses
- ✅ Enrollment form
- ✅ Responsive design
- ✅ SEO setup

### Phase 2 (Planned)
- 📋 Detailed course pages
- 📅 Course scheduling system
- 💳 Payment integration
- 📧 Automated email sequences

### Phase 3 (Future)
- 👨‍🎓 Student dashboard
- 📱 Mobile app
- 🎓 LMS integration
- 📊 Analytics dashboard

---

## ❓ FAQ

**Q: Can I use this for other institutes?**
A: Yes! The code is highly customizable. Just update the data in `coursesData.js`.

**Q: How do I add more courses?**
A: Add a new object to the `courses` array in `coursesData.js`.

**Q: How do I change colors?**
A: Edit the color values in `tailwind.config.js`.

**Q: Is this mobile-responsive?**
A: Yes! Built mobile-first with responsive Tailwind classes.

**Q: How do I deploy this?**
A: See [SETUP_GUIDE.md](./SETUP_GUIDE.md#deployment-options) for deployment options.

---

## 📸 Screenshots

[Add screenshots of key pages here]

---

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

---

## 💡 Feature Requests

Have an idea? Submit a feature request with:
- Clear description of the feature
- Why this feature would be useful
- Potential implementation approach

---

## 📚 Documentation

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup and configuration
- [Component API Reference](./SETUP_GUIDE.md#component-api-reference) - Component props and usage
- [Customization Guide](./SETUP_GUIDE.md#design-system--customization) - How to customize colors and content

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: ✅ Production Ready

---

<p align="center">
  Made with ❤️ for Akbar's Academy IT Institute
  <br/>
  <strong>Learn Today, Lead Tomorrow</strong>
</p>
