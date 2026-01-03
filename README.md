# PS Training Website

A professional, responsive static website for PS Training - a BFSI (Banking, Financial Services, and Insurance) sales training institute.

Built with **Next.js 14**, **Tailwind CSS**, and **Lucide-React** icons.

---

## Features

- **Hero Section** - Bold headline, statistics, and CTAs
- **Placement Tracker** - Grid of student placement cards with company info
- **Training Programs** - 4 program cards with details
- **Testimonials** - Student reviews section
- **Contact Form** - Formspree integration (no backend needed)
- **Responsive Design** - Mobile-first approach
- **Data-Driven** - All content managed via `data.js`

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## Configuration

### Updating Placements

Edit `app/data.js` and modify the `placements` array:

```javascript
export const placements = [
  {
    id: 1,
    name: "Student Name",
    photo: "/placements/student.jpg", // Optional
    company: "Company Name",
    companyLogo: "/companies/logo.png", // Optional
    role: "Job Role",
    batch: "2024 Batch",
    salary: "₹5.0 LPA"
  },
  // Add more...
];
```

### Updating Training Programs

Edit the `trainingPrograms` array in `app/data.js`:

```javascript
export const trainingPrograms = [
  {
    id: 1,
    title: "Program Name",
    icon: "Building", // Building, Shield, TrendingUp, Zap
    duration: "6 Weeks",
    description: "Program description...",
    highlights: ["Feature 1", "Feature 2"],
    placement: "100% Placement Assistance"
  },
];
```

### Contact Form Setup

1. Sign up at [Formspree](https://formspree.io/) (free)
2. Create a new form and get your Form ID
3. Update `app/data.js`:

```javascript
export const siteConfig = {
  contact: {
    formspreeId: "your-actual-formspree-id-here" // Replace this
  }
};
```

---

## File Structure

```
ps-training-website/
├── app/
│   ├── data.js          # All content data (placements, programs, etc.)
│   ├── page.tsx         # Main page with all sections
│   ├── layout.tsx       # Root layout with metadata
│   └── globals.css      # Global styles and Tailwind directives
├── tailwind.config.ts   # Tailwind configuration
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

---

## Theme Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#002147` | Primary, headings, backgrounds |
| Gold | `#D4AF37` | Accents, CTAs, highlights |
| White | `#FFFFFF` | Backgrounds, text on dark |

---

## Adding Company Logos

Create a `public/companies/` folder and add logo images:
```
public/
└── companies/
    ├── hdfc.png
    ├── icici.png
    ├── sbi.png
    ├── axis.png
    └── lic.png
```

Then reference them in `data.js`:
```javascript
companyLogo: "/companies/hdfc.png"
```

---

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: { DEFAULT: '#002147' },
  gold: { DEFAULT: '#D4AF37' },
}
```

### Update Site Info

Edit `siteConfig` in `app/data.js`:

```javascript
export const siteConfig = {
  name: "PS Training",
  tagline: "Your Tagline",
  contact: {
    email: "info@yourdomain.com",
    phone: "+91 98765 43210",
    address: "Your Address"
  }
};
```

---

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Static Export

For pure static hosting (GitHub Pages, S3):

Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
}
```

Then run:
```bash
npm run build
```

Static files will be in the `out/` directory.

---

## License

MIT

---

## Support

For issues or questions, contact: info@pstraining.com
