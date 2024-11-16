// Water Calculator Functionality
const calculatorForm = document.getElementById('water-calculator');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');

// Conversion constant from feet to meters
const FEET_TO_METERS = 0.3048;
const RUNOFF_COEFFICIENT = 0.75; // Example for rooftop surfaces

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const lengthFeet = parseFloat(document.getElementById('length').value);
    const widthFeet = parseFloat(document.getElementById('width').value);
    const rainfallMM = parseFloat(document.getElementById('rainfall').value);

    // Convert length and width to meters
    const lengthMeters = lengthFeet * FEET_TO_METERS;
    const widthMeters = widthFeet * FEET_TO_METERS;

    // Calculate area and water collected
    const area = lengthMeters * widthMeters; // in square meters
    const waterCollected = area * rainfallMM * RUNOFF_COEFFICIENT; // in liters

    // Display the result
    resultContainer.classList.remove('hidden');
    resultElement.textContent = `You can collect approximately ${waterCollected.toFixed(2)} liters of water.`;
});
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

