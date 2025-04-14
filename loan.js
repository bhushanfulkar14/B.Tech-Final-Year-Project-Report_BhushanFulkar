// Form Submission Handler
document.addEventListener("DOMContentLoaded", () => {
    const sellForm = document.getElementById("sellForm");
    if (sellForm) {
        sellForm.addEventListener("submit", handleFormSubmit);
    }
    
    // Setup dark/light mode toggle
    const toggleModeButton = document.getElementById("toggleMode");
    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", toggleMode);
    }
    
    // Initialize background slider (if multiple slider sections exist)
    initSlider();
});

// Handle form submission for seller's vehicle listing
function handleFormSubmit(event) {
    event.preventDefault();
    showAlert("Your vehicle has been listed successfully!");
    
    // Optionally, add the new vehicle to the vehicle list dynamically.
    // Example: get form inputs, create a new DOM element, and append it to the vehicle list.
    // const vehicleList = document.getElementById('vehicleList');
    // const newVehicle = document.createElement('div');
    // newVehicle.className = 'vehicle-item';
    // newVehicle.innerHTML = `<img src="path_to_uploaded_image" alt="Vehicle Image">
    //                        <h3>${document.getElementById('carModel').value}</h3>
    //                        <p>Price: ₹${parseInt(document.getElementById('carPrice').value).toLocaleString('en-IN')}</p>
    //                        <button>View Details</button>`;
    // vehicleList.appendChild(newVehicle);
}

// Generic alert function for notifications
function showAlert(message) {
    alert(message);
}

// Simulated Document Verification Process
function verifyDocument() {
    const result = document.getElementById("verificationResult");
    if (result) {
        updateStatus(result, "Verification in progress...", "Document is verified successfully!");
    }
}

// Simulated Insurance and Loan Check
function checkInsurance() {
    const result = document.getElementById("insuranceResult");
    if (result) {
        updateStatus(result, "Checking insurance details...", "Insurance and loan details found!");
    }
}

// Reusable function to update status messages with a simulated delay
function updateStatus(element, initialMessage, successMessage, delay = 2000) {
    element.innerText = initialMessage;
    element.style.color = "#666";
    
    setTimeout(() => {
        element.innerText = successMessage;
        element.style.color = "green"; // Optional styling for success
    }, delay);
}

// Toggle between dark and light modes
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Basic background image slider functionality for elements with the class "slider-bg"
let currentSlide = 0;
function initSlider() {
    const slides = document.querySelectorAll(".slider-bg");
    if (slides.length === 0) return;
    
    slides.forEach((slide, index) => {
        // Initially show only the first slide
        slide.style.display = index === 0 ? "block" : "none";
    });
    
    setInterval(() => {
        // Hide current slide
        slides[currentSlide].style.display = "none";
        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
        // Show the new current slide
        slides[currentSlide].style.display = "block";
    }, 5000); // Slide changes every 5 seconds
}
