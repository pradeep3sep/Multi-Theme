# 🎨 Multi-Theme Responsive React App

Built with **10+ years of frontend experience**, this project is a responsive, theme-aware React application using **React 19**, **Vite**, **Tailwind CSS 4**, and **React Router v7**. The app supports persistent themes with smooth transitions, category-based filtering, active state tracking, and a loading indicator during async operations.

## 🧠 Features

- 🔁 **Dropdown-based Theme Switching**
  - Toggle between multiple UI themes using a dropdown menu.
  - Full layout, typography, and color transitions are applied.
  - Transitions are **animated and smooth** for an elegant UX.
  - User theme preference is **persisted in `localStorage`**, so reloads or revisits retain the selected theme.

- 🎯 **Category Filtering with Active Highlight**
  - Clicking on a category loads its data and highlights the selected category.
  - The UI automatically scrolls to or focuses on the relevant content if needed.
  - Fully dynamic route-aware data loading using `useParams` + `useLocation`.

- ⏳ **Custom Loader**
  - Loader appears while fetching data or on route transitions using the same component.
  - Ensures a seamless visual experience with zero jank.

- 📱 **Responsive Design**
  - Layout adapts across screen sizes (mobile → tablet → desktop).
  - UI components are mobile-first and touch-friendly.

- ⚡ **Fast Build Tooling**
  - Powered by **Vite 7** for lightning-fast dev builds and previews.
  - Supports HMR (Hot Module Replacement).

## 🧩 Tech Stack

| Tech                  | Version     |
|-----------------------|-------------|
| React                 | ^19.1.0     |
| React DOM             | ^19.1.0     |
| React Router DOM      | ^7.7.1      |
| Tailwind CSS          | ^4.1.11     |
| Axios (API Requests)  | ^1.11.0     |
| TypeScript            | ~5.8.3      |
| Vite                  | ^7.0.4      |
| ESLint                | ^9.30.1     |
| Node.js               | 20.x+       |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pradeep3sep/Multi-Theme.git
cd my-app
````

### 2. Install dependencies

Make sure you’re using **Node.js v20 or higher**:

```bash
node -v # should be >= 20
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to see the app.

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/               # Static assets (e.g. images, icons)
│
├── components/           # Reusable, modular UI components
│   ├── About.tsx         # About page UI
│   ├── Contact.tsx       # Contact form with responsive layout
│   ├── Header.tsx        # Top navigation bar + theme dropdown
│   ├── Home.tsx          # Landing page
│   ├── Loading.tsx       # Loader spinner shown during API calls or route changes
│   ├── ProductList.tsx   # Displays products per selected category
│   └── SideBar.tsx       # Category selector with active state highlight
│
├── context/              # (Optional) React context providers (e.g., ThemeContext if used)
│
├── lib/                  # Core logic or reusable utility functions
│   ├── apiCalls.ts       # All data fetching logic
│   └── axios.ts          # Axios base config and interceptors
│
├── routes/               # Centralized route definitions
│   └── AppRoutes.tsx     # All route mappings using React Router v7
│
├── types/                # Shared TypeScript types/interfaces
│
├── App.tsx               # Main app shell + layout structure
├── App.css               # Optional global styles
├── index.css             # Tailwind base + custom styles
├── main.tsx              # Entry point (ReactDOM.render / createRoot)
└── vite-env.d.ts         # Vite type declarations

# Project root
├── tailwind.config.ts    # Tailwind theme config
├── vite.config.ts        # Vite plugins and aliasing
├── tsconfig.json         # TypeScript compiler settings
├── package.json          # Project metadata and scripts
├── README.md             # Project documentation
```

## 🔐 Persistent Theme (localStorage)

Theme preference is stored using `localStorage`. When the app initializes, it checks and applies the saved theme before rendering. This prevents flickers or incorrect themes on reload.

```ts
// Example from useTheme hook
const storedTheme = localStorage.getItem("theme") ?? "light";
```

## 🔄 API Handling with Loader

* Uses `axios` for API requests.
* Reuses the same component for dynamic routes (e.g. `/:id`).
* Triggers a re-fetch on route param change with a loading state:

```ts
useEffect(() => {
  setLoading(true);
  fetchData().finally(() => setLoading(false));
}, [id]);
```

## 🔒 Security Enhancements

* Implemented **security validation** for:

  * **URL parameters** to prevent injection or malformed requests
  * **User input fields** to ensure proper sanitization and avoid XSS or script injection

## 🧼 Code Quality

* ESLint with React & TypeScript rules
* Clean architecture
* Fully typed with TypeScript
* Component and state separation

## 👨‍💻 Author

Built and maintained by a frontend engineer with over **10 years of experience** in building scalable, maintainable UI architectures.