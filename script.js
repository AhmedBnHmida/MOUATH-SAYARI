function setLanguage(lang) {
    document.body.className = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);

    // Update all .ar/.fr elements
    document.querySelectorAll('.ar, .fr').forEach(function(el) {
        if (lang === 'ar') {
            el.style.display = el.classList.contains('ar') ? '' : 'none';
        } else {
            el.style.display = el.classList.contains('fr') ? '' : 'none';
        }
    });

    // Update language switch buttons
    var arBtn = document.getElementById('lang-ar');
    var frBtn = document.getElementById('lang-fr');
    if (arBtn && frBtn) {
        if (lang === 'ar') {
            arBtn.classList.add('active');
            frBtn.classList.remove('active');
        } else {
            frBtn.classList.add('active');
            arBtn.classList.remove('active');
        }
    }

    updatePageDirection(lang);
}

function updatePageDirection(lang) {
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.documentElement.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
        document.documentElement.style.direction = 'ltr';
    }
}

// Get the correct base path based on current page location
function getBasePath() {
    var path = window.location.pathname;
    // If we're in a subfolder (like /views/), go up one level
    if (path.includes('/views/')) {
        return '../components/';
    }
    return 'components/';
}

// Load components
function loadComponents() {
    var basePath = getBasePath();
    
    // Check if we're on index page (has landing div) or view page
    var hasLanding = document.getElementById('landing') !== null;
    
    // Load header
    fetch(basePath + 'header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header not found at ' + basePath + 'header.html');
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load landing only if it exists (index page)
    if (hasLanding) {
        fetch(basePath + 'landing.html')
            .then(response => {
                if (!response.ok) throw new Error('Landing not found');
                return response.text();
            })
            .then(data => {
                document.getElementById('landing').innerHTML = data;
            })
            .catch(error => console.error('Error loading landing:', error));
    }

    // Load footer
    fetch(basePath + 'footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Highlight active menu item
function highlightActiveMenu() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var menuLinks = document.querySelectorAll('.menu a, .dropdown-menu a');
    
    menuLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.style.backgroundColor = 'var(--primary-yellow)';
            link.style.color = 'var(--primary-black)';
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Load components
    loadComponents();
    
    // Set language after components load
    setTimeout(function() {
        var savedLang = localStorage.getItem('language');
        var defaultLang = savedLang || 'ar';
        setLanguage(defaultLang);
        
        // Re-bind language buttons
        setTimeout(function() {
            var arBtn = document.getElementById('lang-ar');
            var frBtn = document.getElementById('lang-fr');
            if (arBtn) arBtn.onclick = function() { setLanguage('ar'); };
            if (frBtn) frBtn.onclick = function() { setLanguage('fr'); };
            
            highlightActiveMenu();
            
            // Back to top button
            var backToTop = document.querySelector('.back-to-top');
            if (backToTop) {
                backToTop.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }, 100);
    }, 200);

    // Search functionality
    setTimeout(function() {
        var searchButton = document.querySelector('.search button');
        var searchInput = document.querySelector('.search input');
        
        if (searchButton && searchInput) {
            searchButton.addEventListener('click', function() {
                var query = searchInput.value;
                if (query) {
                    alert('بحث عن: ' + query);
                }
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchButton.click();
                }
            });
        }
    }, 300);
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    var href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}, true);