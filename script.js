document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Theme Toggle Logic --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        // Only change icon if the button actually exists on the page
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    // Only attach click event if the theme button exists
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    /* --- 2. Mobile Menu Logic --- */
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');

    // Only attach click event if both the menu button and nav exist
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            const icon = menuToggle.querySelector('i');
            
            // Safety check for the icon
            if (icon) {
                if (nav.classList.contains('show')) {
                    icon.classList.replace('fa-bars', 'fa-xmark');
                } else {
                    icon.classList.replace('fa-xmark', 'fa-bars');
                }
            }
        });
    }

    /* --- 3. Scroll to Top Button Logic --- */
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Only attach scroll and click events if the scroll button exists on this specific page
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
