
// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);


// Toggle theme function
function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update button icon
    updateThemeIcon(newTheme);
}

// Update button icon based on theme
function updateThemeIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
        button.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Initialize button icon on page load
document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon(currentTheme);
});