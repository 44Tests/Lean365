# Lean365 Interactive Strategy App 🚀

A sophisticated, interactive web application presenting the Lean365 Growth Strategy with professional McKinsey-style design and marketing-focused content.

![Lean365 Strategy App](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple)

## 🎯 Features

### ✨ Interactive Strategy Presentation
- **Modal-based Navigation**: Professional overlay system instead of inline expansion
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 📊 6-Stage Consulting Framework
- **Interactive Stepper**: Visual progression through transformation stages
- **ROI Metrics**: Quantified benefits for each stage (25-40% efficiency gains)
- **Professional Navigation**: Step-by-step framework exploration

### 🎨 McKinsey-Style Design
- **Clean Visual Hierarchy**: Professional typography and spacing
- **Brand-Aligned Colors**: Lean365 blue and white color scheme
- **Executive-Ready**: Suitable for C-suite presentations

### 🏢 Core Strategy Sections
1. **Value Proposition & Core Offerings** - Tech-enabled Lean solutions
2. **Consulting Framework** - 6-stage transformation methodology  
3. **Go-to-Market Strategy** - Healthcare & Manufacturing focus
4. **Brand Building & Thought Leadership** - Digital presence strategy
5. **Capability Development** - Team recruitment & upskilling
6. **Measurement & Continuous Improvement** - ROI tracking systems

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/44Tests/Lean365.git
cd Lean365

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve production build (recommended for stability)
npx serve dist -p 8000
```

## 🌐 Deployment URLs

### Development Server
- **Local**: `http://localhost:5173/`
- **Network**: `http://[your-ip]:5173/`

### Production Build (Recommended)
- **Local**: `http://localhost:8000/`
- **More Stable**: Static files served via HTTP server

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Custom CSS (no framework dependencies)
- **Development**: ESLint + TypeScript

## 📱 Usage

1. **Open the Application**: Navigate to the deployment URL
2. **Explore Strategy Cards**: Click on any of the 6 strategy section cards
3. **Interactive Framework**: Use the stepper navigation in the Consulting Framework modal
4. **View Benefits**: See quantified ROI metrics and benefits for each section
5. **Professional Presentation**: Perfect for client meetings and executive presentations

## 🎨 Design Philosophy

The application follows a **marketing-expert approach** with:
- **Benefits-driven messaging** instead of feature lists
- **Quantified ROI numbers** for credibility
- **Professional visual hierarchy** for executive audiences
- **McKinsey-style consulting presentation** format

## 🔧 Key Implementation Details

### Modal System
- Click outside to close
- Smooth scale and fade animations
- Proper focus management
- Mobile-responsive design

### Framework Navigation
- Interactive stepper with visual progress
- Previous/Next navigation
- Direct stage selection via dots
- ROI metrics display for each stage

### Performance Optimized
- Code splitting with Vite
- Optimized bundle size
- Fast loading animations
- Smooth 60fps interactions

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)
```bash
npm run build
# Upload /dist folder to any static host
```

### Option 2: Development Server
```bash
npm run dev -- --host --port 3000
# Access via http://localhost:3000/
```

### Option 3: Docker (Future Enhancement)
```dockerfile
# Dockerfile example for containerized deployment
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npx", "serve", "dist", "-p", "8000"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lean365 Team** for the strategic content
- **Framer Motion** for smooth animations  
- **Lucide React** for beautiful icons
- **Vite** for lightning-fast development

---

**Built with ❤️ for professional strategy presentations**

🤖 *Generated with [Claude Code](https://claude.ai/code)*