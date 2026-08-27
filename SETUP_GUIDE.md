# Akbar's Academy - Website Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Step 1: Project Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/akbars-academy.git
cd akbars-academy

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Update .env.local with your configuration values
```

### Step 2: Development Server

```bash
# Start the development server (runs on http://localhost:3000)
npm run dev

# The app will automatically open in your browser
```

### Step 3: Build for Production

```bash
# Build the optimized production bundle
npm build

# Preview the production build locally
npm run preview

# Output files will be in the 'dist' directory
```

---

## 📁 Project Structure

```
akbars-academy/
├── src/
│   ├── components/
│   │   ├── AIMasterySection.jsx      # AI Mastery flagship course section
│   │   ├── AdmissionModal.jsx        # Enrollment form modal
│   │   ├── AkbarsLogo.jsx            # Brand logo components
│   │   ├── CoursesGrid.jsx           # 5 professional courses grid
│   │   ├── Footer.jsx                # Footer with contact info & map
│   │   ├── Header.jsx                # Navigation header
│   │   ├── Hero.jsx                  # Hero section with CTAs
│   │   └── TestimonialsSection.jsx   # Alumni testimonials
│   ├── App.jsx                       # Main application component
│   ├── coursesData.js                # Course data, institute info, FAQs
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global styles & Tailwind imports
├── public/                           # Static assets (placeholder)
├── .env.example                      # Environment variables template
├── index.html                        # HTML entry point with meta tags
├── package.json                      # Dependencies & scripts
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS customization
├── vite.config.js                    # Vite bundler configuration
└── SETUP_GUIDE.md                    # This file
```

---

## 🎨 Design System & Customization

### Color Palette
- **Primary Navy**: `#0F172A` (brand blue)
- **Gold/Amber**: `#D97706` or `#F59E0B` (accents)
- **White**: `#FFFFFF` (backgrounds)
- **Neutrals**: Gray scale for text

### Fonts
- **Headings**: Plus Jakarta Sans (via Google Fonts)
- **Body**: Inter (via Google Fonts)
- **Monospace**: Fira Code (for code snippets)

All fonts are loaded in `index.html` from Google Fonts.

### Customizing Colors & Fonts

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      navy: { 600: '#0F172A' }, // Change primary color
      gold: { 500: '#f59e0b' },  // Change accent color
    },
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
      display: ['Your Display Font', 'sans-serif'],
    }
  }
}
```

---

## 🔧 Component API Reference

### Header Component
```jsx
<Header
  onEnrollClick={() => {}} // Callback when "Enroll Now" is clicked
  onCourseClick={(course) => {}} // Callback when course is selected
/>
```

### Hero Component
```jsx
<Hero
  onEnrollClick={() => {}} // Open enrollment modal
  onAIMasteryClick={() => {}} // Scroll to AI Mastery section
/>
```

### CoursesGrid Component
```jsx
<CoursesGrid
  onEnrollClick={(courseName) => {}} // Called with course title on inquiry
/>
```

### AdmissionModal Component
```jsx
<AdmissionModal
  isOpen={boolean} // Control modal visibility
  onClose={() => {}} // Called when modal should close
  selectedCourse={string} // Pre-select a course
/>
```

---

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints (customizable in `tailwind.config.js`):
- **sm**: 640px (tablets)
- **md**: 768px (small desktops)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)
- **2xl**: 1536px (extra large screens)

Example usage:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, tablet: 2 columns, desktop: 3 columns */}
</div>
```

---

## 🌐 SEO & Meta Tags

### Pre-configured in `index.html`:
- ✅ Meta title & description
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ JSON-LD structured data
- ✅ Google Analytics tracking code

### To Update:
Edit meta tags directly in `index.html` or use a React Helmet library for dynamic updates.

### Course Schema
Each course automatically includes structured data (JSON-LD) for search engines. Add more courses in `coursesData.js`.

---

## 📧 Email Integration

### Option 1: SendGrid
```javascript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

await sgMail.send({
  to: formData.email,
  from: 'noreply@akbarsacademy.com',
  subject: 'Welcome to Akbar\'s Academy',
  html: '<h1>Welcome!</h1><p>Your enrollment has been received.</p>'
});
```

### Option 2: Backend API
Create an API endpoint on your backend to handle form submissions:
```javascript
const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/enrollments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 💳 Payment Integration

### Stripe Integration (Example)
```bash
npm install @stripe/react-stripe-js @stripe/js
```

```javascript
import { loadStripe } from '@stripe/js';

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const { error, sessionId } = await stripe.redirectToCheckout({
  sessionId: response.sessionId
});
```

---

## 📊 Analytics Setup

### Google Analytics 4
1. Get your GA4 Measurement ID from Google Analytics Console
2. Update in `.env.local`:
   ```
   VITE_GA_MEASUREMENT_ID=G_XXXXXXXXXX
   ```
3. Tracking code is automatically included in `index.html`

### Event Tracking Example
```javascript
function trackEnrollmentClick(courseName) {
  window.gtag?.('event', 'course_enrollment', {
    course_name: courseName,
    timestamp: new Date().toISOString()
  });
}
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Traditional Hosting (cPanel, etc.)
```bash
# Build the project
npm run build

# Upload the 'dist' folder contents to your hosting server
# Set document root to the dist folder
```

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Use HTTPS** - Always use HTTPS in production
3. **Validate input** - Server-side validation for all form submissions
4. **XSS Prevention** - React automatically escapes content
5. **CORS** - Configure properly if using a separate backend
6. **Rate Limiting** - Implement rate limiting for form submissions on backend

---

## 🎯 Performance Optimization

### Implemented Features:
- ✅ Code splitting (components loaded on-demand)
- ✅ Image optimization (use `<img>` with proper sizes)
- ✅ CSS minification
- ✅ JS minification & terser
- ✅ Lazy loading support

### Additional Optimizations:
```javascript
// Lazy load components
const AIMasterySection = lazy(() => import('./AIMasterySection'));

<Suspense fallback={<div>Loading...</div>}>
  <AIMasterySection />
</Suspense>
```

### Lighthouse Targets:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 🧪 Testing

### Install Testing Libraries
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Example Test
```javascript
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders navigation links', () => {
  render(<Header onEnrollClick={() => {}} />);
  expect(screen.getByText('Courses')).toBeInTheDocument();
});
```

Run tests:
```bash
npm run test
```

---

## 📝 Adding New Courses

1. **Edit `coursesData.js`**:
```javascript
export const courses = [
  // ... existing courses
  {
    id: 6,
    index: "06",
    title: "New Course Name",
    category: "Category",
    badge: "Professional Course",
    skills: [
      { name: "Skill 1", icon: "Code" },
      { name: "Skill 2", icon: "Database" }
    ],
    description: "Course description here",
    duration: "X Weeks",
    difficulty: "Level",
    color: "from-color-500 to-color-600"
  }
];
```

2. **Update Hero CTAs** if needed in `Hero.jsx`

3. **Update Admission Modal** courses list - it auto-updates from `coursesData.js`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Run on different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+Del)
- Check `index.css` imports
- Verify Tailwind config paths in `tailwind.config.js`

### Components Not Rendering
- Check browser console for errors
- Verify all imports are correct
- Ensure component props are passed correctly

---

## 📞 Support & Contact

- **Institute**: Akbar's Academy IT Institute
- **Phone**: +91 9769073820
- **WhatsApp**: https://wa.me/919769073820
- **Email**: info@akbarsacademy.com
- **Address**: G/A-4/6, Cheeta Camp, Mumbai

---

## 📄 License

MIT License - Feel free to use and modify for your needs.

---

## 🎉 Next Steps

1. ✅ Install dependencies and run dev server
2. ✅ Customize colors & fonts in `tailwind.config.js`
3. ✅ Update content in `coursesData.js`
4. ✅ Replace placeholder images with real assets
5. ✅ Add Google Analytics ID
6. ✅ Set up email/payment integration
7. ✅ Deploy to production
8. ✅ Monitor performance & user behavior

Happy building! 🚀
