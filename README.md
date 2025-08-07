# test-react-app

A lightweight React Single Page Application (SPA) bootstrapped with **Vite** and **ESLint**, enhanced with:

- Clean routing (`/about`, `/users`, `/users/:id`, and 404 fallback)
- Responsive design from 360px to 1600px
- Loading spinner and error toast for async operations
- Accessibility-focused UI with clear hierarchy and focus states

---

##  Features

- **Routing & Navigation**
    - Root (`/`) redirects to `/about`
    - `/about`: Static informational page
    - `/users`: Lists users with real-time filtering and cards
    - `/users/:id`: Shows detailed user info with a “Back” button
    - `/*`: Displays a 404 page with links back to `/about` or `/users`
    - Persistent NavBar across all routes

- **Responsive UI**
    - Adapts to mobile and desktop layouts
    - Compact user lists on mobile, grid layout on wider screens
    - Sticky navigation bar for intuitive access

- **Async Handling**
    - Spinner during loading
    - Error toast popup if data fetch fails

- **Accessibility**
    - Keyboard focus states
    - Semantic elements and ARIA labels
    - High contrast and scalable layouts

---

##  Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Install & Run

```bash
git clone https://github.com/OleksiyMusiyezdov/test-teact-app.git
cd test-teact-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

##  Available Scripts

| Command       | Description                             |
|---------------|-----------------------------------------|
| `npm run dev` | Start development server with HMR       |
| `npm run build` | Create optimized production build     |
| `npm run preview` | Preview production build locally   |

---

##  Code Highlights

- **Vite + React setup** with instant reload and performance optimizations.
- **Routing** handled with `react-router-dom`.
- **User data** mocked inside the app—easily replaceable with a real API in the future.
- **Spinner** and **toast** components ensure feedback during async operations.
- **CSS** is responsive and ensures strong visual feedback and accessibility.

---

##  Future Improvements

- Integrate real users API.
- Add form validation for user edits.
- Animate transitions between routes.
- Test coverage (e.g., via Jest or React Testing Library).
- Refactor CSS-files structure.

---
