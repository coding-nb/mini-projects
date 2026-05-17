# 🔐 Password Generator

A modern, interactive password generator web application built with React and Vite. Generate secure, customizable passwords with just a few clicks!

## ✨ Features

- **Customizable Password Length**: Adjust password length from 6 to 100 characters using the range slider
- **Include Numbers**: Toggle to include numeric digits (0-9) in your password
- **Include Special Characters**: Toggle to include special characters (@, #, $, %, ^, &, *) in your password
- **Real-time Generation**: Passwords are generated instantly as you adjust settings
- **Copy to Clipboard**: One-click button to copy the generated password to your clipboard
- **Clean UI**: Modern, user-friendly interface built with Tailwind CSS
- **Responsive Design**: Works seamlessly on different screen sizes

## 🛠️ Tech Stack

- **React 19**: UI library for building interactive components
- **Vite 7**: Fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Modern JavaScript with hooks

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd password-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

1. **Set Password Length**: Use the range slider to select desired password length (6-100 characters)
2. **Toggle Numbers**: Check the "Number" checkbox to include digits in the password
3. **Toggle Special Characters**: Check the "Character" checkbox to include special characters
4. **Copy Password**: Click the "Copy" button to copy the generated password to your clipboard

The password updates automatically whenever you change any setting!

## 📁 Project Structure

```
password-generator/
├── src/
│   ├── App.jsx           # Main component with password generator logic
│   ├── App.css           # Component styles
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Static files
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🔧 Development

### Development Server

The development server runs on `http://localhost:5173` with Hot Module Replacement (HMR) enabled for instant updates.

```bash
npm run dev
```

### Linting

Check code quality using ESLint:

```bash
npm run lint
```

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🎯 Key Components

### App.jsx

The main component that handles:
- **State Management**: Uses React hooks (useState) to manage password, length, and character options
- **Password Generation**: `passwordGenerator()` function creates random passwords based on settings
- **Copy Functionality**: `copyPasswordToClipboard()` function copies the password to clipboard
- **UI Rendering**: Displays input field, controls, and copy button

### Hooks Used

- `useState`: Manages component state (password, length, number/character allowance)
- `useCallback`: Optimizes functions to prevent unnecessary re-renders
- `useEffect`: Triggers password generation when settings change
- `useRef`: References the password input field for selection and copying

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom utilities:
- Responsive layout with flexbox
- Color scheme with cyan and yellow accents
- Rounded corners and shadow effects for modern look

## 📝 Notes

- Passwords are generated on the client-side for privacy
- Minimum password length: 6 characters
- Maximum password length: 100 characters
- No external API calls are made

## 📄 License

This project is open source and available under the MIT License.
