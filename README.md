# LearnLingo

✨ **LearnLingo** is an interactive language learning platform designed to help users learn new languages through various resources, including teachers and their lessons. The website offers features like signing up, logging in, marking teachers as favorites, and switching between themes.

---

## 🚀 Features

- **Home Page**: Displays the main content and offers easy navigation to other sections.
- **Teachers Page**: Allows users to browse and view information about available teachers.
- **Favorites Page**: A private page where users can add their favorite teachers to a list and access them later. **Favorites are stored in Firebase**, ensuring they are preserved across sessions.
- **Authentication**: Users can sign up, log in, and log out. The authentication state is maintained across sessions using Firebase.
- **Theme Switching**: Users can switch between different themes (e.g., light, dark, or custom themes) to personalize their experience.

---

## ⚙️ Technologies Used

### Frontend:

- **React**: JavaScript library for building user interfaces.
- **React Router**: Used for handling routing and navigation between pages.
- **Redux**: State management tool for managing the application’s state.
- **Redux Persist**: To persist the Redux state (such as authentication) in the browser’s local storage.
- **React Icons**: For scalable vector icons, such as the login/logout icons.
- **CSS Modules**: Scoped styles for better organization and modularity of CSS.
- **Context API**: Used for managing the theme state and providing theme-related data to components.

### Authentication & Database:

- **Firebase**: Firebase Authentication is used for handling user authentication (sign-up, login, logout). User data is stored in Firebase Authentication, while information about teachers and their details is stored in Firebase's Firestore database.
- **Favorites are also stored in Firebase**, ensuring that data is persisted across sessions.

---

### 📝 Form Validation:

- **React Hook Form & Yup**: For handling form validation and submission during login and registration.

---

## 🔧 Usage

- **Home Page**: Navigate to the homepage to explore general information and quick links to the Teachers and Favorites pages.
- **Teachers Page**: Browse available teachers, their details, and choose to add them to your favorites.
- **Favorites Page**: After logging in, you can access your favorite teachers on this private page.
- **Theme Switching**: Click the theme toggle button (usually represented by a palette icon) to switch between different themes. The selected theme will be applied across the entire application.

---

## 🎨 Theme Switching

The application supports dynamic theme switching, allowing users to choose from multiple themes. The theme context is managed using React's Context API, and the selected theme is applied to all components, ensuring a consistent look and feel.

---

### How It Works:

- **Theme Context**: A context provider (`ThemeProvider`) wraps the application, providing theme-related data (colors, images, etc.) to all components.
- **Theme Toggle**: A button in the header allows users to switch between themes. Each theme has predefined colors for backgrounds, text, and other UI elements.
- **Dynamic Styling**: Components use the current theme's colors and styles, which are dynamically applied based on the selected theme.
