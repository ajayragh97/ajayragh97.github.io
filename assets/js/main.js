/**
 * main.js - Core interactive UI behaviors: Dark Mode & Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileNav();
});

// Theme switcher
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    // Read initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeUI(currentTheme);

    themeBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch(e) {}
        updateThemeUI(newTheme);
    });
}

function updateThemeUI(theme) {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    
    if (theme === 'dark') {
        themeBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
        themeBtn.setAttribute('title', 'Switch to Dark Mode');
    }
}

// Mobile navigation drawer toggle
function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (!toggleBtn || !mobileNav) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNav.classList.toggle('is-open');
        toggleBtn.classList.toggle('is-active', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileNav.classList.remove('is-open');
            toggleBtn.classList.remove('is-active');
        }
    });
}
