# 🤖 The History of Artificial Intelligence

A stunning, interactive timeline showcasing the evolution of AI from the 1940s to 2025. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![AI History Timeline](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop)

## ✨ Features

- 🎨 **Stunning Visual Design**: Glassmorphism effects, gradient animations, and smooth transitions
- 🌓 **Dark/Light Mode**: Beautifully styled theme toggle with smooth transitions
- 📱 **Fully Responsive**: Alternating timeline on desktop, vertical stack on mobile
- 🎬 **Smooth Animations**: Framer Motion powered scroll-triggered reveals and entrance animations
- ✨ **Interactive Particles**: Dynamic particle background that responds to user interaction
- 📊 **Progress Tracking**: Scroll progress bar shows your position in the timeline
- 🏷️ **30+ Milestones**: Carefully curated events from Turing Test to GPT-4 and beyond
- ⚡ **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- 🎯 **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd ai-history-timeline
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── BackgroundParticles.tsx  # Animated particle background
│   ├── Hero.tsx                 # Hero section with typing animation
│   ├── ProgressBar.tsx          # Scroll progress indicator
│   ├── ThemeToggle.tsx          # Dark/light mode toggle
│   ├── Timeline.tsx             # Timeline container
│   ├── TimelineItem.tsx         # Individual timeline event card
│   └── providers/
│       └── ThemeProvider.tsx    # Theme provider wrapper
├── lib/
│   ├── timelineData.ts     # Timeline events data
│   └── utils.ts            # Utility functions
├── public/                 # Static assets (images would go here)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
\`\`\`

## 🎨 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **tsParticles**: Interactive particle effects
- **next-themes**: Dark mode support
- **Lucide React**: Beautiful icon set

## 🎯 Timeline Events

The timeline includes 30+ carefully selected milestones:

- 1943: McCulloch-Pitts Neuron
- 1950: Turing Test
- 1956: Dartmouth Conference (Birth of AI)
- 1997: Deep Blue defeats Kasparov
- 2012: AlexNet (ImageNet moment)
- 2017: Transformer architecture
- 2022: ChatGPT launches
- 2024: Claude 3, Gemini 1.5
- 2025: The AI Agent era

Each event includes:
- Year
- Title
- Detailed description
- High-quality image
- Category tags (Theory, Breakthrough, Product, etc.)

## 🎨 Customization

### Adding Timeline Events

Edit \`lib/timelineData.ts\`:

\`\`\`typescript
export const timelineData: TimelineEvent[] = [
  {
    year: "2025",
    title: "Your New Event",
    description: "Description of the event...",
    image: "https://images.unsplash.com/photo-xxx",
    tags: ["Tag1", "Tag2"]
  },
  // ... more events
];
\`\`\`

### Changing Colors

Edit \`tailwind.config.ts\` and \`app/globals.css\` to customize the color scheme.

### Modifying Animations

Adjust animation parameters in component files using Framer Motion props.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click!

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Built with ❤️ using [Claude](https://claude.ai)
- Images from [Unsplash](https://unsplash.com)
- Inspired by the incredible journey of AI research and development

## 🌟 Show Your Support

If you found this project helpful or inspiring, please give it a ⭐️ on GitHub!

---

**Made with ❤️ using Claude**
