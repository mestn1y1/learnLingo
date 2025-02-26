# LearnLingo

LearnLingo is an interactive language learning platform designed to help users learn new languages through various resources, including teachers and their lessons. The website offers features like signing up, logging in, and marking teachers as favorites.

Features
Home Page: Displays the main content and offers easy navigation to other sections.
Teachers Page: Allows users to browse and view information about available teachers.
Favorites Page: A private page where users can add their favorite teachers to a list and access them later.
Authentication: Users can sign up, log in, and log out. The authentication state is maintained across sessions using Firebase.
Technologies Used
Frontend:

React: JavaScript library for building user interfaces.
React Router: Used for handling routing and navigation between pages.
Redux: State management tool for managing the application’s state.
Redux Persist: To persist the Redux state (such as authentication) in the browser’s local storage.
React Icons: For scalable vector icons, such as the login/logout icons.
CSS Modules: Scoped styles for better organization and modularity of CSS.
Authentication & Database:

Firebase: Firebase Authentication is used for handling user authentication (sign-up, login, logout). User data is stored in Firebase Authentication, while information about teachers and their details is stored in Firebase's Firestore database, ensuring that data is persisted across sessions.
Form Validation:

React Hook Form & Yup: For handling form validation and submission during login and registration.
Usage
Home Page: Navigate to the homepage to explore general information and quick links to the Teachers and Favorites pages.
Teachers Page: Browse available teachers, their details, and choose to add them to your favorites.
Favorites Page: After logging in, you can access your favorite teachers on this private page.
