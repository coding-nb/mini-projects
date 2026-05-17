# Mini Projects

This workspace contains a set of small React projects built with Vite. Each folder is an independent app with its own `package.json`, source code, and README.

## Projects

### `bg-changer`
A simple background color changer. It renders a full-screen canvas and lets you switch the page background with preset color buttons.

### `context-api`
An example of React Context for user state. It includes a login form, a shared user provider, and a profile area that reacts to the current user.

### `counter`
A basic counter demo. It shows increment and decrement actions with simple bounds on the value.

### `password-generator`
A customizable password generator. You can control password length, include numbers or special characters, and copy the result to the clipboard.

### `react-router`
A React Router example with nested routes, a shared layout, and pages such as Home, About, User, and GitHub.

### `theme-context`
A theme toggle demo using React Context. It switches the app between light and dark mode and updates the UI based on shared theme state.

## Common Stack

Most projects use:

- React 19
- Vite 7
- JavaScript modules
- ESLint for linting

Some projects also use:

- Tailwind CSS 4
- React Router DOM

## Getting Started

Each project can be run independently from its own folder.

1. Open the project folder you want to explore.
2. Install dependencies:

	```bash
	npm install
	```

3. Start the dev server:

	```bash
	npm run dev
	```

4. Build for production if needed:

	```bash
	npm run build
	```

5. Preview the production build:

	```bash
	npm run preview
	```

## Notes

- The projects are intentionally small and focused on learning specific React patterns.
- Each folder is self-contained, so dependencies are not shared across apps.
- The individual project READMEs can contain more specific usage details if needed.
