/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is crucial for your theming approach
  darkMode: 'class', // Enable dark mode based on the presence of a 'dark' class

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- EXISTING BASE THEME COLORS ---
        // Define your base light colors
        'custom-blue': '#b7def1',
        'light-primary': 'var(--color-light-primary)',
        'light-secondary': 'var(--color-light-secondary)',
        'light-card-bg': 'var(--color-light-card-bg)',
        'light-text-primary': 'var(--color-light-text-primary)',
        'light-text-secondary': 'var(--color-light-text-secondary)',
        'light-border': 'var(--color-light-border)',
        'light-input-border': 'var(--color-light-input-border)',
        'light-button-primary-bg': 'var(--color-light-button-primary-bg)',
        'light-button-primary-text': 'var(--color-light-button-primary-text)',
        'light-button-secondary-bg': 'var(--color-light-button-secondary-bg)',
        'light-button-secondary-text': 'var(--color-light-button-secondary-text)',
        'light-link': 'var(--color-light-link)',

        // Define your base dark colors (from your image)
        'dark-primary': 'var(--color-dark-primary)',
        'dark-secondary': 'var(--color-dark-secondary)',
        'dark-card-bg': 'var(--color-dark-card-bg)',
        'dark-text-primary': 'var(--color-dark-text-primary)',
        'dark-text-secondary': 'var(--color-dark-text-secondary)',
        'dark-border': 'var(--color-dark-border)',
        'dark-input-border': 'var(--color-dark-input-border)',
        'dark-button-primary-bg': 'var(--color-dark-button-primary-bg)',
        'dark-button-primary-text': 'var(--color-dark-button-primary-text)',
        'dark-button-secondary-bg': 'var(--color-dark-button-secondary-bg)',
        'dark-button-secondary-text': 'var(--color-dark-button-secondary-text)',
        'dark-link': 'var(--color-dark-link)',

        // Define blob colors (referencing the base colors, or direct values if preferred)
        'blob-light-1': 'var(--color-blob-light-1)',
        'blob-light-2': 'var(--color-blob-light-2)',
        'blob-light-3': 'var(--color-blob-light-3)',
        'blob-dark-1': 'var(--color-blob-dark-1)',
        'blob-dark-2': 'var(--color-blob-dark-2)',
        'blob-dark-3': 'var(--color-blob-dark-3)',

        // Theme-aware colors that directly map to your CSS variables (existing)
        'theme-bg': 'var(--color-theme-bg)',
        'theme-section-bg': 'var(--color-section-bg)',
        'theme-heading-primary': 'var(--color-theme-heading-primary)',
        'theme-text': 'var(--color-theme-text)',
        'theme-text-secondary': 'var(--color-theme-text-secondary)',
        'theme-nav-bg': 'var(--color-nav-bg)',
        'theme-border': 'var(--color-theme-border)',
        'theme-hero-bg': 'var(--color-hero-bg)',
        'theme-hero-heading': 'var(--color-hero-heading)',
        'theme-hero-text': 'var(--color-hero-text)',
        'theme-button-primary-bg': 'var(--color-theme-button-primary-bg)',
        'theme-button-primary-hover': 'var(--color-theme-button-primary-hover)',
        'theme-button-primary-text': 'var(--color-theme-button-primary-text)',
        'theme-button-secondary-bg': 'var(--color-button-secondary-bg)',
        'theme-button-secondary-text': 'var(--color-button-secondary-text)',
        'theme-button-secondary-hover': 'var(--color-button-secondary-hover)',
        'theme-button-secondary-border': 'var(--color-button-secondary-border)',
        'theme-button-secondary-hover-alt': 'var(--color-button-secondary-hover-alt)',
        'theme-card-bg': 'var(--color-card-bg)',
        'theme-card-bg-light': 'var(--color-card-bg-light)',
        'theme-card-hover-bg-light': 'var(--color-card-hover-bg-light)',
        'theme-input-bg': 'var(--color-input-bg)',
        'theme-progress-bar-bg': 'var(--color-progress-bar-bg)',
        'theme-heading-step': 'var(--color-heading-step)',
        'theme-step-arrow': 'var(--color-step-arrow)',
        'theme-stat-icon-bg': 'var(--color-stat-icon-bg)',
        'theme-stat-icon-color': 'var(--color-stat-icon-color)',
        'theme-stat-icon-hover-bg': 'var(--color-stat-icon-hover-bg)',
        'theme-stat-number': 'var(--color-stat-number)',
        'theme-stat-label': 'var(--color-stat-label)',
        'theme-input-border': 'var(--color-theme-input-border)',
        'theme-input-placeholder': 'var(--color-theme-input-placeholder)',
        'theme-input-border-hover': 'var(--color-theme-input-border-hover)',
        'theme-link': 'var(--color-theme-link)',
        'theme-link-hover': 'var(--color-theme-link-hover)',


        // --- NEW SIDEBAR SPECIFIC COLORS (merged in) ---
        'primary-light': 'var(--color-primary-light)', // Existing from previous list, keeping for consistency
        'accent-light': 'var(--color-accent-light)', // Existing
        'text-light': 'var(--color-text-light)',     // Existing
        'background-light': 'var(--color-background-light)', // Existing
        'card-light': 'var(--color-card-light)',     // Existing

        'primary-dark': 'var(--color-primary-dark)', // Existing
        'accent-dark': 'var(--color-accent-dark)',   // Existing
        'text-dark': 'var(--color-text-dark)',       // Existing
        'background-dark': 'var(--color-background-dark)', // Existing
        'card-dark': 'var(--color-card-dark)',       // Existing

        // Sidebar Specific Colors
        'sidebar-light': 'var(--color-sidebar-light)', // Fallback for the light sidebar if gradient fails
        'sidebar-dark': 'var(--color-sidebar-dark)',   // Solid background for dark sidebar

        // Navigation Item Colors
        'nav-item-text-light': 'var(--color-nav-item-text-light)',
        'nav-item-text-dark': 'var(--color-nav-item-text-dark)',
        'nav-item-hover-bg-light': 'var(--color-nav-item-hover-bg-light)',
        'nav-item-hover-bg-dark': 'var(--color-nav-item-hover-bg-dark)',
        'nav-item-active-bg-light': 'var(--color-nav-item-active-bg-light)',
        'nav-item-active-bg-dark': 'var(--color-nav-item-active-bg-dark)',

        // Logout Button Colors (for sidebar)
        'logout-btn-bg-light': 'var(--color-logout-btn-bg-light)',
        'logout-btn-text-light': 'var(--color-logout-btn-text-light)',
        'logout-btn-hover-bg-light': 'var(--color-logout-btn-hover-bg-light)',
        'logout-btn-border-light': 'var(--color-logout-btn-border-light)',
        'logout-btn-icon-bg-light': 'var(--color-logout-btn-icon-bg-light)',

        'logout-btn-bg-dark': 'var(--color-logout-btn-bg-dark)',
        'logout-btn-text-dark': 'var(--color-logout-btn-text-dark)',
        'logout-btn-hover-bg-dark': 'var(--color-logout-btn-hover-bg-dark)',
        'logout-btn-border-dark': 'var(--color-logout-btn-border-dark)',
        'logout-btn-icon-bg-dark': 'var(--color-logout-btn-icon-bg-dark)',

        // User Info Card Colors (on sidebar)
        'user-card-bg-light': 'var(--color-user-card-bg-light)',
        'user-card-border-light': 'var(--color-user-card-border-light)',
        'user-card-text-light': 'var(--color-user-card-text-light)',
        'user-card-role-bg-light': 'var(--color-user-card-role-bg-light)',
        'user-card-role-text-light': 'var(--color-user-card-role-text-light)',

        'user-card-bg-dark': 'var(--color-user-card-bg-dark)',
        'user-card-border-dark': 'var(--color-user-card-border-dark)',
        'user-card-text-dark': 'var(--color-user-card-text-dark)',
        'user-card-role-bg-dark': 'var(--color-user-card-role-bg-dark)',
        'user-card-role-text-dark': 'var(--color-user-card-role-text-dark)',
      },
      backgroundImage: {
        // Existing gradient (if any)
        'theme-gradient-start': 'var(--color-theme-gradient-start)',

        // New sidebar gradient
        'gradient-sidebar-light': 'linear-gradient(180deg, var(--gradient-sidebar-start-light) 0%, var(--gradient-sidebar-end-light) 100%)',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};