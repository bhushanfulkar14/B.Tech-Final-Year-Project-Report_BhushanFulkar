document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const vehicleType = document.getElementById('vehicle-type').value;
    const vehicleBrand = document.getElementById('vehicle-brand').value;
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);
    const vehicleMileage = parseFloat(document.getElementById('vehicle-mileage').value);
    const buyerIncome = parseFloat(document.getElementById('buyer-income').value);
    const employmentType = document.getElementById('employment-type').value;
    const loanHistory = document.getElementById('loan-history').value;

    // Prediction Logic (Mockup)
    let eligibility = 'not eligible';

    // Example conditions for eligibility (these would be your model logic)
    if (buyerIncome >= 25000 && vehiclePrice <= 80000 && loanHistory === 'yes') {
        eligibility = 'eligible';
    }

    // Display result
    const resultDiv = document.getElementById('result');
    if (eligibility === 'eligible') {
        resultDiv.innerHTML = `<p class="success">✅ Congratulations! This vehicle is eligible for finance.</p>`;
    } else {
        resultDiv.innerHTML = `<p class="error">❌ Sorry, this vehicle is not eligible for finance.</p>`;
    }
});
