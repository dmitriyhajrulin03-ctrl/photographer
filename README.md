# JOHANNPICTURES - Professional Photography Portfolio

Modern, responsive photography portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features a beautiful glassmorphism design, dark mode support, and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark Mode**: Full dark mode support with smooth theme transitions
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for performance with Next.js App Router
- **TypeScript**: Fully typed with TypeScript
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Theme**: next-themes
- **Type Safety**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/photographer.git
cd photographer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing pages
│   ├── (auth)/            # Authentication pages
│   └── api/               # API routes
├── components/            # React components
│   ├── features/          # Feature components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # UI components
├── config/                # Configuration files
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── sections/              # Page sections
├── store/                 # Zustand stores
└── types/                 # TypeScript types
```

## 🎨 Sections

- **Hero Section**: Eye-catching hero with animated background
- **Logos Carousel**: Brand logos showcase
- **Benefits Section**: Key benefits and features
- **Services Section**: Service offerings with interactive cards
- **Process Section**: Workflow visualization
- **Testimonials**: Customer testimonials
- **FAQ & Contact**: Frequently asked questions and contact form

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/photographer)

### Other Platforms

This project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**JOHANNPICTURES**

- Website: [johannpictures.com](https://johannpictures.com)
- Email: info@johannpictures.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Lucide](https://lucide.dev) - Beautiful icon library
- [shadcn/ui](https://ui.shadcn.com) - Re-usable components
