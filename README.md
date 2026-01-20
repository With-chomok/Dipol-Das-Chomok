# MyPortfolio -  Dipol Das

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Animations**: Smooth transitions and hover effects
- **Component-Based**: Modular React components for easy maintenance
- **TypeScript**: Type-safe development
- **shadcn/ui**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons


## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Navigation component
│   ├── HeroSection.tsx  # Hero section
│   ├── AboutSection.tsx # About section
│   ├── SkillsSection.tsx# Skills section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── EducationSection.tsx # Education background
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx       # Footer component
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors

The portfolio uses a custom color scheme defined in `tailwind.config.js`:

- Primary Green: `#2bee6c`
- Background Dark: `#112217`
- Surface Dark: `#193322`
- Border Dark: `#326744`

### Content

Update the content in each component file:

- Personal information in `HeroSection.tsx`
- About text in `AboutSection.tsx`
- Skills in `SkillsSection.tsx`
- Projects in `ProjectsSection.tsx`
- Education in `EducationSection.tsx`
- Contact information in `ContactSection.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
