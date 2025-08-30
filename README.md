# Digital Art Canvas

A powerful and intuitive digital art creation platform built with Next.js, TypeScript, and modern web technologies. Create stunning artwork with advanced drawing tools, layer support, and a seamless user experience.

![Canvas Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Digital+Art+Canvas)

## ✨ Features

### 🎨 Drawing Tools
- **Advanced Brushes**: Multiple brush types with customizable size, opacity, and flow
- **Shape Tools**: Draw rectangles and circles with precision
- **Text Tool**: Add text annotations to your artwork
- **Eraser**: Remove content with adjustable size

### 🔄 Advanced Features
- **Unlimited History**: Full undo/redo functionality with extensive history tracking
- **Layer Support**: Organize your artwork with multiple layers
- **Color Management**: Comprehensive color picker with saved palettes and history
- **Export Options**: Save artwork in PNG, JPG, WebP, and SVG formats

### 🎯 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Touch Support**: Full touch and stylus support for drawing
- **Dark/Light Theme**: Automatic theme switching based on system preferences
- **Intuitive Interface**: Clean, modern UI built with shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SohamAI99/Digital-Art-Canvas.git
   cd digital-art-canvas
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to start creating art!

## 📁 Project Structure

```
digital-art-canvas/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── draw/             # Drawing page
│   ├── help/             # Help page
│   └── settings/         # Settings page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── drawing-canvas.tsx # Main canvas component
│   ├── color-picker.tsx   # Color picker component
│   └── theme-provider.tsx # Theme provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Usage

### Basic Drawing
1. Navigate to the drawing page
2. Select your preferred tool from the toolbar
3. Choose your color using the color picker
4. Adjust brush size and opacity as needed
5. Start drawing on the canvas

### Advanced Features
- **Undo/Redo**: Use Ctrl+Z / Ctrl+Y or the toolbar buttons
- **Clear Canvas**: Remove all content with the clear button
- **Export**: Save your artwork in various formats
- **Layers**: Organize complex artwork (future feature)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Customization

The app is highly customizable. You can modify:

- **Colors**: Update the color palette in `components/color-picker.tsx`
- **Tools**: Add new drawing tools in `components/drawing-canvas.tsx`
- **UI**: Customize the interface using Tailwind CSS classes
- **Themes**: Modify themes in `components/theme-provider.tsx`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Inspired by digital art tools like Krita and Photoshop

## 📞 Support

If you have any questions or need help:

- Open an [issue](https://github.com/SohamAI99/Digital-Art-Canvas/issues) on GitHub
- Check the [Help page](http://localhost:3000/help) in the app
- Review the documentation in this README

---

**Happy Creating! 🎨**

Made with ❤️ by [SohamAI99](https://github.com/SohamAI99)
