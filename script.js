// CadenzaBoard Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initializeMenuToggle();
    
    // Initialize user dropdown
    initializeUserDropdown();
    
    // Add animation to cards
    animateOnScroll();
    
    console.log('CadenzaBoard initialized successfully!');
});

// Mobile Menu Toggle
function initializeMenuToggle() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!menuToggle || !nav) return;
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('mobile-nav-open');
        }
    });
}

// User dropdown functionality
function initializeUserDropdown() {
    const userIcons = document.querySelectorAll('.user-icon');
    
    userIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // First, close any other open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.remove();
            });
            
            // Create dropdown menu
            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown-menu');
            
            // Add dropdown items
            dropdown.innerHTML = `
                <div class="dropdown-item">Profile</div>
                <div class="dropdown-item">Account Settings</div>
                <div class="dropdown-item">Notifications</div>
                <div class="dropdown-item">Help & Support</div>
                <div class="dropdown-item">Log Out</div>
            `;
            
            // Style the dropdown
            dropdown.style.position = 'absolute';
            dropdown.style.top = '50px';
            dropdown.style.right = '0';
            dropdown.style.backgroundColor = 'white';
            dropdown.style.borderRadius = '8px';
            dropdown.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            dropdown.style.zIndex = '1000';
            dropdown.style.width = '200px';
            dropdown.style.overflow = 'hidden';
            
            // Style dropdown items
            const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.style.padding = '12px 20px';
                item.style.cursor = 'pointer';
                item.style.transition = 'background 0.2s';
                
                item.addEventListener('mouseenter', () => {
                    item.style.backgroundColor = '#f7f8fc';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.backgroundColor = 'transparent';
                });
                
                item.addEventListener('click', () => {
                    console.log(`Menu item clicked: ${item.textContent}`);
                    dropdown.remove();
                });
            });
            
            // Position dropdown relative to icon
            icon.style.position = 'relative';
            icon.appendChild(dropdown);
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function closeDropdown(e) {
                if (!icon.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener('click', closeDropdown);
                }
            });
        });
    });
}

// Animation on scroll
function animateOnScroll() {
    // Add a class to elements that should be animated
    const elementsToAnimate = document.querySelectorAll('.focus-card');
    
    elementsToAnimate.forEach(element => {
        // Add animation styles
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Check all elements and animate if in viewport
    function checkElements() {
        elementsToAnimate.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Run check on load and scroll
    checkElements();
    window.addEventListener('scroll', checkElements);
    window.addEventListener('resize', checkElements);
}

// Add interactive behavior to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a feedback animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Log the action (would be replaced with real functionality)
            console.log(`Button clicked: ${this.textContent.trim()}`);
        });
    });
});