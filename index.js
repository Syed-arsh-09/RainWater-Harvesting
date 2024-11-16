// Get elements
const hamburger = document.getElementById('hamburger');
const offScreenMenu = document.getElementById('off-screen-menu');
const menuLinks = offScreenMenu.querySelectorAll('a'); // Get all links inside the off-screen menu

// Toggle the menu and cross icon on hamburger click
hamburger.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click from bubbling
    offScreenMenu.classList.toggle('menu-active');
    hamburger.classList.toggle('ham-active');
});


// Close menu when clicking outside the menu or on a menu item
document.addEventListener('click', function (event) {
    if (!hamburger.contains(event.target) && !offScreenMenu.contains(event.target)) {
        offScreenMenu.classList.remove('menu-active');
        hamburger.classList.remove('ham-active');
    }
});

// Close the menu when clicking any menu link
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        offScreenMenu.classList.remove('menu-active');
        hamburger.classList.remove('ham-active');
    });
});
// For smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const fadeInElements = document.querySelectorAll('.fade-in');

function checkVisibility() {
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('show'); // Add 'show' class when visible
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Trigger the function on page load

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated Counter Logic, stat section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200; // Adjust speed

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// feedback touch up
const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name === "" || message === "") {
        alert('Please fill out all fields!');
    } else {
        alert('Thank you for your feedback!');
        form.reset();
    }
});
// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax, .hero');
    const scrollPosition = window.scrollX;

    parallaxElements.forEach(el => {
        const speed = 0.2; // Adjust this for subtle movement
        const offset = ((-scrollPosition) * speed); // Move background up or down
        el.style.backgroundPosition = `center ${offset}px`; // Keep it centered horizontally
    });
});
