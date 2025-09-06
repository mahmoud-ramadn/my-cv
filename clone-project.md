# CV Website Clone Instructions

## How to Clone and Set Up Your CV Website

### Step 1: Clone the Project
```bash
# Navigate to your desired directory
cd C:\Users\pc\Desktop

# Create a new directory for the clone
mkdir cv-clone
cd cv-clone

# Copy all files from the original project
xcopy "C:\Users\pc\Desktop\cv\*" "." /E /H /C /I
```

### Step 2: Install Dependencies
```bash
# Install all required packages
npm install
```

### Step 3: Start Development Server
```bash
# Start the development server
npm run dev
```

### Step 4: Build for Production
```bash
# Build the project for deployment
npm run build

# Preview the production build
npm run preview
```

## PDF Export Feature

Your CV website now includes a **"Download PDF"** button in the header that:

✅ **Generates high-quality PDF** using client-side rendering
✅ **Preserves all styling** and brand colors
✅ **Hides navigation elements** in PDF (no-print class)
✅ **Handles multi-page content** automatically
✅ **Uses authentic filename**: "Mahmoud_Ramadan_CV.pdf"

### PDF Features:
- **High Resolution**: 2x scale for crisp quality
- **A4 Format**: Standard professional size
- **White Background**: Clean printing
- **Multi-page Support**: Automatically splits long content
- **Error Handling**: User-friendly error messages

## Key Technologies Included:

### Core Stack:
- ⚛️ **React 18** + TypeScript
- 🎨 **Tailwind CSS** for styling
- ⚡ **Vite** for fast development
- 🌙 **Dark/Light Mode** with localStorage persistence

### PDF Export:
- 📄 **html2canvas** for DOM to canvas conversion
- 📋 **jsPDF** for PDF generation
- 🖼️ **High-quality rendering** at 2x scale

### Icons & UI:
- 🎯 **Lucide React** for UI icons
- 🏢 **Authentic brand SVG icons** for technologies
- 📱 **Responsive design** for all devices

## Project Structure:
```
cv/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation with PDF download
│   │   ├── Icons.tsx       # All icon definitions
│   │   ├── SkillsSection.tsx # Technical skills with brand icons
│   │   └── ...
│   ├── data/
│   │   └── cvData.ts       # Your CV content
│   ├── contexts/
│   │   └── ThemeContext.tsx # Dark/light mode logic
│   └── ...
├── package.json            # Dependencies
└── README.md
```

## Customization:

1. **Update Personal Info**: Edit `src/data/cvData.ts`
2. **Add Projects**: Add to the projects array in cvData.ts
3. **Modify Skills**: Update technicalSkills in cvData.ts
4. **Change Colors**: Modify Tailwind config
5. **Add Icons**: Create new icons in Icons.tsx

## Deployment Options:

- **Vercel**: `npm run build` → Deploy dist folder
- **Netlify**: Connect GitHub repo → Auto deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: `firebase deploy`

Your professional CV website is ready with all modern features! 🚀