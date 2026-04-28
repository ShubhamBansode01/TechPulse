/* =========================================
   GLOBAL FUNCTIONS (For HTML interactions)
   ========================================= */

// 1. Live Search Logic
function performSearch() {
    const searchInput = document.getElementById('site-search');
    if (searchInput) {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('h2')?.innerText.toLowerCase() || "";
            if (title.includes(filter)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none";
            }
        });
    }
}

// 2. Cookie Banner Logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

function checkCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'flex';
    }
}

/* =========================================
   UI LOGIC (Runs when the page loads)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Cookie Check
    checkCookies();

    /* --- Theme Toggle Logic --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

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

    /* --- Mobile Menu Logic --- */
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            const icon = menuToggle.querySelector('i');
            
            if (icon) {
                if (nav.classList.contains('show')) {
                    icon.classList.replace('fa-bars', 'fa-xmark');
                } else {
                    icon.classList.replace('fa-xmark', 'fa-bars');
                }
            }
        });
    }

    /* --- Scroll to Top Button Logic --- */
    const scrollTopBtn = document.getElementById('scrollTop');
    
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

// Automatically attach current page link to WhatsApp Share buttons
document.querySelectorAll('.share-btn.whatsapp').forEach(btn => {
    let currentUrl = window.location.href; // Ye automatically us page ka link nikal lega
    let originalHref = btn.getAttribute('href');
    
    // Check karega ki link pehle se add toh nahi hai
    if (!originalHref.includes(currentUrl)) {
        // Text ke aage space aur website ka link jod dega
        btn.setAttribute('href', originalHref + " " + currentUrl);
    }
});


