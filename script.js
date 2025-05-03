// CadenzaBoard Main JavaScript with improved event handling
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded, initializing CadenzaBoard...');
    
    // Initialize mobile menu
    initializeMenuToggle();
    
    // Initialize user dropdown
    initializeUserDropdown();
    
    // Initialize button click handlers
    initializeButtons();
    
    // Add animation to cards
    animateOnScroll();
});

// Mobile Menu Toggle
function initializeMenuToggle() {
    console.log('Initializing mobile menu toggle...');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!menuToggle || !nav) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    menuToggle.addEventListener('click', function(e) {
        console.log('Mobile menu clicked');
        e.preventDefault();
        e.stopPropagation();
        nav.classList.toggle('mobile-nav-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('mobile-nav-open');
        }
    });
}

// User dropdown functionality
function initializeUserDropdown() {
    console.log('Initializing user dropdown...');
    const userIcons = document.querySelectorAll('.user-icon');
    
    userIcons.forEach(function(icon) {
        icon.addEventListener('click', function(e) {
            console.log('User icon clicked');
            e.preventDefault();
            e.stopPropagation();
            
            // First, close any other open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
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
            dropdownItems.forEach(function(item) {
                item.style.padding = '12px 20px';
                item.style.cursor = 'pointer';
                item.style.transition = 'background 0.2s';
                
                item.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f7f8fc';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                });
                
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Menu item clicked: ${this.textContent}`);
                    dropdown.remove();
                    
                    // Simple alert to show functionality
                    alert(`You clicked: ${this.textContent}`);
                });
            });
            
            // Position dropdown relative to icon
            icon.style.position = 'relative';
            icon.appendChild(dropdown);
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function closeDropdown(e) {
                if (!icon.contains(e.target)) {
                    if (dropdown.parentNode) {
                        dropdown.remove();
                    }
                    document.removeEventListener('click', closeDropdown);
                }
            });
        });
    });
}

// Initialize button functionality
function initializeButtons() {
    console.log('Initializing buttons...');
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', this.textContent.trim());
            
            // Add a feedback animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Simple alert to show functionality
            alert(`You clicked: ${this.textContent.trim()}`);
        });
    });
    
    // Initialize menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all menu items
            menuItems.forEach(function(mi) {
                mi.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Simple alert to show functionality
            alert(`You navigated to: ${this.textContent.trim()}`);
        });
    });
}

// Animation on scroll
function animateOnScroll() {
    console.log('Initializing scroll animations...');
    // Add a class to elements that should be animated
    const elementsToAnimate = document.querySelectorAll('.focus-card');
    
    elementsToAnimate.forEach(function(element) {
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
        elementsToAnimate.forEach(function(element) {
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