# 🐕 Dog Birthday Calculator

Calculate your dog's upcoming birthdays in "dog years" (7 human weeks = 1 dog year).

**[Try the Live Demo](https://aldi.github.io/dog-birthday-calculator/)**

![Preview](preview.webp)

## ✨ Features

- 📅 Enter your dog's name and date of birth
- 🎂 Get the next 7 upcoming "dog birthdays"
- ✨ Smooth CSS-based animations
- 📱 Fully responsive design
- 🎥 Beautiful video background

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **Vite 6** - Build tool and dev server
- **Bulma 1.0** - CSS framework (via CDN)
- **Custom CSS** - Visual styling and animations
- **Day.js** - Date formatting

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── App.jsx                # Main app component
├── App.css                # Custom styles
├── main.jsx               # React entry point
├── components/
│   ├── BackgroundVideo.jsx # Video background
│   └── Birthdays.jsx       # Birthday list display
└── utils/
    └── calculateBirthdays.js # Birthday calculation logic
```

## 📄 License

Released under the [MIT License](LICENSE).
